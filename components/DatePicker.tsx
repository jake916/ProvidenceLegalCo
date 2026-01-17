'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { isValidBookingDate } from '@/lib/schedule-config';

interface DatePickerProps {
    selectedDate: Date | null;
    onSelectDate: (date: Date) => void;
}

export default function DatePicker({ selectedDate, onSelectDate }: DatePickerProps) {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const monthStart = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const monthEnd = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    const startDate = new Date(monthStart);
    startDate.setDate(startDate.getDate() - monthStart.getDay());

    const endDate = new Date(monthEnd);
    endDate.setDate(endDate.getDate() + (6 - monthEnd.getDay()));

    const days = [];
    const current = new Date(startDate);

    while (current <= endDate) {
        days.push(new Date(current));
        current.setDate(current.getDate() + 1);
    }

    const previousMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const isToday = (date: Date) => {
        const today = new Date();
        return date.toDateString() === today.toDateString();
    };

    const isSelected = (date: Date) => {
        return selectedDate?.toDateString() === date.toDateString();
    };

    const isCurrentMonth = (date: Date) => {
        return date.getMonth() === currentMonth.getMonth();
    };

    return (
        <div className="w-full">
            {/* Month navigation */}
            <div className="flex items-center justify-between mb-4">
                <button
                    onClick={previousMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Previous month"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <h3 className="text-lg font-semibold">
                    {format(currentMonth, 'MMMM yyyy')}
                </h3>

                <button
                    onClick={nextMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Next month"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Day labels */}
            <div className="grid grid-cols-7 gap-1 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar days */}
            <div className="grid grid-cols-7 gap-1">
                {days.map((day, index) => {
                    const isValidDate = isValidBookingDate(day);
                    const isTodayDate = isToday(day);
                    const isSelectedDate = isSelected(day);
                    const isInCurrentMonth = isCurrentMonth(day);

                    return (
                        <button
                            key={index}
                            onClick={() => isValidDate && onSelectDate(day)}
                            disabled={!isValidDate}
                            className={`
                aspect-square p-2 rounded-lg text-sm font-medium transition-all
                ${!isInCurrentMonth ? 'text-gray-300' : ''}
                ${isValidDate ? 'hover:bg-rose-50 cursor-pointer' : 'cursor-not-allowed opacity-40'}
                ${isSelectedDate ? 'bg-rose-500 text-white hover:bg-rose-600' : ''}
                ${isTodayDate && !isSelectedDate ? 'border-2 border-rose-500' : ''}
              `}
                        >
                            {day.getDate()}
                        </button>
                    );
                })}
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
                Select a weekday to view available time slots
            </p>
        </div>
    );
}
