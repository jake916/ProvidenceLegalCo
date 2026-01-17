// Scheduling configuration for meeting bookings

export const scheduleConfig = {
    // Business hours (24-hour format)
    businessHours: {
        start: 9, // 9 AM
        end: 17,  // 5 PM
    },

    // Working days (0 = Sunday, 6 = Saturday)
    workingDays: [1, 2, 3, 4, 5], // Monday to Friday

    // Meeting duration in minutes
    meetingDuration: 30,

    // Time zone
    timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'Europe/Paris',

    // Admin email (who will receive meeting invites)
    adminEmail: process.env.ADMIN_EMAIL || 'admin@providencelegal.com',

    // Calendar ID (usually the admin email)
    calendarId: process.env.CALENDAR_ID || 'primary',

    // Buffer time between meetings (in minutes)
    bufferTime: 0,

    // How many days in advance can meetings be booked
    maxDaysInAdvance: 30,
};

// Generate time slots for a given date
export function generateTimeSlots(date: Date): string[] {
    const slots: string[] = [];
    const { start, end } = scheduleConfig.businessHours;
    const duration = scheduleConfig.meetingDuration;

    for (let hour = start; hour < end; hour++) {
        for (let minute = 0; minute < 60; minute += duration) {
            const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            slots.push(timeString);
        }
    }

    return slots;
}

// Check if a date is a working day
export function isWorkingDay(date: Date): boolean {
    const day = date.getDay();
    return scheduleConfig.workingDays.includes(day);
}

// Check if a date is in the valid booking range
export function isValidBookingDate(date: Date): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + scheduleConfig.maxDaysInAdvance);
    maxDate.setHours(23, 59, 59, 999);

    return date >= today && date <= maxDate && isWorkingDay(date);
}
