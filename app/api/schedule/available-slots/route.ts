import { NextRequest, NextResponse } from 'next/server';
import { generateTimeSlots, isValidBookingDate } from '@/lib/schedule-config';
import { getBusySlots } from '@/lib/calendar';

export async function POST(request: NextRequest) {
    try {
        const { date } = await request.json();

        if (!date) {
            return NextResponse.json(
                { error: 'Date is required' },
                { status: 400 }
            );
        }

        const selectedDate = new Date(date);

        // Validate the date
        if (!isValidBookingDate(selectedDate)) {
            return NextResponse.json(
                { error: 'Invalid booking date. Please select a valid working day.' },
                { status: 400 }
            );
        }

        // Generate all possible time slots
        const allSlots = generateTimeSlots(selectedDate);

        // Get busy slots from Google Calendar
        let busySlots: string[] = [];
        try {
            busySlots = await getBusySlots(selectedDate);
        } catch (error) {
            console.error('Error fetching busy slots:', error);
            // If calendar API is not configured, return all slots as available
            // This allows the UI to work during development
        }

        // Filter out busy slots
        const availableSlots = allSlots.filter(slot => !busySlots.includes(slot));

        return NextResponse.json({
            date: selectedDate.toISOString(),
            availableSlots,
            totalSlots: allSlots.length,
            busySlots: busySlots.length,
        });

    } catch (error) {
        console.error('Error in available-slots API:', error);
        return NextResponse.json(
            { error: 'Failed to fetch available slots' },
            { status: 500 }
        );
    }
}
