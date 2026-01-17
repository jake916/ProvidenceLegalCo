'use client';

import { useState } from 'react';
import { CalendarIcon } from '@heroicons/react/24/outline';
import SchedulingModal from './SchedulingModal';

export default function ScheduleButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsModalOpen(true)}
                className="fixed left-6 bottom-6 z-50 group"
                aria-label="Schedule a meeting"
            >
                <div className="relative">
                    {/* Main button */}
                    <div className="bg-gradient-to-br from-rose-500 to-rose-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                        <CalendarIcon className="w-7 h-7" />
                    </div>

                    {/* Pulse animation */}
                    <div className="absolute inset-0 bg-rose-500 rounded-full animate-ping opacity-20"></div>

                    {/* Tooltip */}
                    <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        Schedule a Consultation
                        <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-gray-900"></div>
                    </div>
                </div>
            </button>

            <SchedulingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}
