import { NextRequest, NextResponse } from 'next/server';
import { createCalendarEvent } from '@/lib/calendar';
import { isValidBookingDate } from '@/lib/schedule-config';

export async function POST(request: NextRequest) {
    try {
        const { date, time, firstName, lastName, email, description } = await request.json();

        // Validate required fields
        if (!date || !time || !firstName || !lastName || !email || !description) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        const selectedDate = new Date(date);

        // Validate the date
        if (!isValidBookingDate(selectedDate)) {
            return NextResponse.json(
                { error: 'Invalid booking date' },
                { status: 400 }
            );
        }

        // Validate time format (HH:MM)
        const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
        if (!timeRegex.test(time)) {
            return NextResponse.json(
                { error: 'Invalid time format' },
                { status: 400 }
            );
        }

        // Create calendar event
        const result = await createCalendarEvent(selectedDate, time, {
            firstName,
            lastName,
            email,
            description,
        });

        return NextResponse.json({
            success: true,
            message: 'Meeting scheduled successfully',
            meeting: {
                eventId: result.eventId,
                meetLink: result.meetLink,
                startTime: result.startTime,
                endTime: result.endTime,
                attendees: {
                    client: `${firstName} ${lastName} (${email})`,
                },
            },
        });

    } catch (error) {
        console.error('Error in book API:', error);

        // Check if it's a Google Calendar API error
        if (error instanceof Error && error.message.includes('Google Calendar')) {
            return NextResponse.json(
                {
                    error: 'Calendar service is not configured. Please contact the administrator.',
                    details: error.message
                },
                { status: 503 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to schedule meeting. Please try again.' },
            { status: 500 }
        );
    }
}
