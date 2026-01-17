// Google Calendar API integration utilities

import { google } from 'googleapis';
import { scheduleConfig } from './schedule-config';

// Initialize Google Calendar client
export function getCalendarClient() {
    const credentials = process.env.GOOGLE_CALENDAR_CREDENTIALS;

    if (!credentials) {
        throw new Error('Google Calendar credentials not configured');
    }

    let auth;

    try {
        // Parse the credentials JSON
        const credentialsJson = JSON.parse(credentials);

        // Create auth client from service account
        auth = new google.auth.GoogleAuth({
            credentials: credentialsJson,
            scopes: ['https://www.googleapis.com/auth/calendar'],
        });
    } catch (error) {
        console.error('Error parsing Google Calendar credentials:', error);
        throw new Error('Invalid Google Calendar credentials format');
    }

    return google.calendar({ version: 'v3', auth });
}

// Fetch busy time slots for a given date
export async function getBusySlots(date: Date): Promise<string[]> {
    try {
        const calendar = getCalendarClient();

        // Set time range for the entire day
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);

        const response = await calendar.freebusy.query({
            requestBody: {
                timeMin: startOfDay.toISOString(),
                timeMax: endOfDay.toISOString(),
                items: [{ id: scheduleConfig.calendarId }],
                timeZone: scheduleConfig.timeZone,
            },
        });

        const busySlots: string[] = [];
        const calendars = response.data.calendars;

        if (calendars && calendars[scheduleConfig.calendarId]) {
            const busy = calendars[scheduleConfig.calendarId].busy || [];

            busy.forEach((slot) => {
                if (slot.start && slot.end) {
                    const startTime = new Date(slot.start);
                    const endTime = new Date(slot.end);

                    // Generate all time slots within this busy period
                    let current = new Date(startTime);
                    while (current < endTime) {
                        const hours = current.getHours().toString().padStart(2, '0');
                        const minutes = current.getMinutes().toString().padStart(2, '0');
                        busySlots.push(`${hours}:${minutes}`);

                        current.setMinutes(current.getMinutes() + scheduleConfig.meetingDuration);
                    }
                }
            });
        }

        return busySlots;
    } catch (error) {
        console.error('Error fetching busy slots:', error);
        // Return empty array if calendar API is not configured yet
        return [];
    }
}

// Create a calendar event with Google Meet link
export async function createCalendarEvent(
    date: Date,
    time: string,
    clientInfo: {
        firstName: string;
        lastName: string;
        email: string;
        description: string;
    }
) {
    try {
        const calendar = getCalendarClient();

        // Parse time (HH:MM format)
        const [hours, minutes] = time.split(':').map(Number);

        // Create start time
        const startTime = new Date(date);
        startTime.setHours(hours, minutes, 0, 0);

        // Create end time
        const endTime = new Date(startTime);
        endTime.setMinutes(endTime.getMinutes() + scheduleConfig.meetingDuration);

        // Create event
        const event = {
            summary: `Consultation with ${clientInfo.firstName} ${clientInfo.lastName}`,
            description: `Client consultation\n\nClient: ${clientInfo.firstName} ${clientInfo.lastName}\nEmail: ${clientInfo.email}\n\nTopic:\n${clientInfo.description}`,
            start: {
                dateTime: startTime.toISOString(),
                timeZone: scheduleConfig.timeZone,
            },
            end: {
                dateTime: endTime.toISOString(),
                timeZone: scheduleConfig.timeZone,
            },
            attendees: [
                { email: scheduleConfig.adminEmail },
                { email: clientInfo.email },
            ],
            conferenceData: {
                createRequest: {
                    requestId: `${Date.now()}-${Math.random().toString(36).substring(7)}`,
                    conferenceSolutionKey: { type: 'hangoutsMeet' },
                },
            },
            reminders: {
                useDefault: false,
                overrides: [
                    { method: 'email', minutes: 24 * 60 }, // 1 day before
                    { method: 'popup', minutes: 30 }, // 30 minutes before
                ],
            },
        };

        const response = await calendar.events.insert({
            calendarId: scheduleConfig.calendarId,
            conferenceDataVersion: 1,
            sendUpdates: 'all', // Send email invitations to all attendees
            requestBody: event,
        });

        return {
            success: true,
            eventId: response.data.id,
            meetLink: response.data.hangoutLink || response.data.conferenceData?.entryPoints?.[0]?.uri,
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString(),
        };
    } catch (error) {
        console.error('Error creating calendar event:', error);
        throw new Error('Failed to create calendar event. Please ensure Google Calendar API is properly configured.');
    }
}
