/**
 * Schedule configuration utilities for booking validation
 */

/**
 * Checks if a given date is valid for booking
 * Valid dates are:
 * - Weekdays (Monday-Friday)
 * - Not in the past
 * - Within the next 90 days
 */
export function isValidBookingDate(date: Date): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);

    // Check if date is in the past
    if (checkDate < today) {
        return false;
    }

    // Check if date is more than 90 days in the future
    const maxDate = new Date(today);
    maxDate.setDate(maxDate.getDate() + 90);
    if (checkDate > maxDate) {
        return false;
    }

    // Check if it's a weekday (Monday = 1, Friday = 5)
    const dayOfWeek = checkDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        return false; // Sunday or Saturday
    }

    return true;
}

/**
 * Available time slots for booking
 */
export const TIME_SLOTS = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
];

/**
 * Business hours configuration
 */
export const BUSINESS_HOURS = {
    start: 9, // 9 AM
    end: 17,  // 5 PM
    timezone: 'America/New_York',
};
