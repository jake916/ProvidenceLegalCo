'use client';

import { useEffect, useState } from 'react';

interface TimeSlotPickerProps {
    selectedDate: Date;
    selectedTime: string | null;
    onSelectTime: (time: string) => void;
}

export default function TimeSlotPicker({ selectedDate, selectedTime, onSelectTime }: TimeSlotPickerProps) {
    const [availableSlots, setAvailableSlots] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchAvailableSlots();
    }, [selectedDate]);

    const fetchAvailableSlots = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/schedule/available-slots', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ date: selectedDate.toISOString() }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch available slots');
            }

            const data = await response.json();
            setAvailableSlots(data.availableSlots);
        } catch (err) {
            setError('Failed to load available time slots. Please try again.');
            console.error('Error fetching slots:', err);
        } finally {
            setLoading(false);
        }
    };

    const formatTime = (time: string) => {
        const [hours, minutes] = time.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        return `${displayHour}:${minutes} ${ampm}`;
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-8">
                <p className="text-red-600 mb-4">{error}</p>
                <button
                    onClick={fetchAvailableSlots}
                    className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
                >
                    Try Again
                </button>
            </div>
        );
    }

    if (availableSlots.length === 0) {
        return (
            <div className="text-center py-8">
                <p className="text-gray-600">No available time slots for this date.</p>
                <p className="text-sm text-gray-500 mt-2">Please select another date.</p>
            </div>
        );
    }

    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">Select a Time</h3>

            <div className="grid grid-cols-3 gap-3 max-h-64 overflow-y-auto pr-2">
                {availableSlots.map((slot) => (
                    <button
                        key={slot}
                        onClick={() => onSelectTime(slot)}
                        className={`
              py-3 px-4 rounded-lg border-2 font-medium transition-all
              ${selectedTime === slot
                                ? 'bg-rose-500 text-white border-rose-500'
                                : 'bg-ivory-200 text-gray-700 border-gray-200 hover:border-rose-500 hover:bg-rose-50'
                            }
            `}
                    >
                        {formatTime(slot)}
                    </button>
                ))}
            </div>

            <p className="text-xs text-gray-500 mt-4">
                {availableSlots.length} time slot{availableSlots.length !== 1 ? 's' : ''} available
            </p>
        </div>
    );
}
