'use client';

import { useState } from 'react';
import { XMarkIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import DatePicker from './DatePicker';
import TimeSlotPicker from './TimeSlotPicker';
import BookingForm from './BookingForm';

interface SchedulingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type Step = 'date' | 'time' | 'form' | 'confirmation';

interface BookingData {
    date: Date | null;
    time: string | null;
    firstName: string;
    lastName: string;
    email: string;
    description: string;
}

interface ConfirmationData {
    meetLink: string;
    startTime: string;
    endTime: string;
}

export default function SchedulingModal({ isOpen, onClose }: SchedulingModalProps) {
    const [step, setStep] = useState<Step>('date');
    const [bookingData, setBookingData] = useState<BookingData>({
        date: null,
        time: null,
        firstName: '',
        lastName: '',
        email: '',
        description: '',
    });
    const [confirmationData, setConfirmationData] = useState<ConfirmationData | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleClose = () => {
        // Reset state when closing
        setStep('date');
        setBookingData({
            date: null,
            time: null,
            firstName: '',
            lastName: '',
            email: '',
            description: '',
        });
        setConfirmationData(null);
        setError(null);
        onClose();
    };

    const handleDateSelect = (date: Date) => {
        setBookingData(prev => ({ ...prev, date }));
        setStep('time');
    };

    const handleTimeSelect = (time: string) => {
        setBookingData(prev => ({ ...prev, time }));
        setStep('form');
    };

    const handleFormSubmit = async (formData: {
        firstName: string;
        lastName: string;
        email: string;
        description: string;
    }) => {
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('/api/schedule/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    date: bookingData.date?.toISOString(),
                    time: bookingData.time,
                    ...formData,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to schedule meeting');
            }

            setBookingData(prev => ({ ...prev, ...formData }));
            setConfirmationData({
                meetLink: data.meeting.meetLink,
                startTime: data.meeting.startTime,
                endTime: data.meeting.endTime,
            });
            setStep('confirmation');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleBack = () => {
        if (step === 'time') setStep('date');
        else if (step === 'form') setStep('time');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
                onClick={handleClose}
            />

            {/* Modal */}
            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative bg-ivory-200 rounded-2xl shadow-2xl max-w-2xl w-full p-8 transform transition-all">
                    {/* Close button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Close"
                    >
                        <XMarkIcon className="w-6 h-6 text-gray-500" />
                    </button>

                    {/* Header */}
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Schedule a Consultation
                        </h2>
                        <p className="text-gray-600">
                            {step === 'date' && 'Select a date for your consultation'}
                            {step === 'time' && 'Choose a convenient time'}
                            {step === 'form' && 'Tell us about yourself'}
                            {step === 'confirmation' && 'Your meeting is confirmed!'}
                        </p>
                    </div>

                    {/* Progress indicator */}
                    {step !== 'confirmation' && (
                        <div className="flex items-center justify-center mb-8">
                            <div className="flex items-center space-x-2">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step === 'date' ? 'bg-rose-500 text-white' : 'bg-gray-200 text-gray-600'
                                    }`}>
                                    1
                                </div>
                                <div className="w-12 h-1 bg-gray-200">
                                    <div className={`h-full bg-rose-500 transition-all ${step === 'time' || step === 'form' ? 'w-full' : 'w-0'
                                        }`} />
                                </div>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step === 'time' || step === 'form' ? 'bg-rose-500 text-white' : 'bg-gray-200 text-gray-600'
                                    }`}>
                                    2
                                </div>
                                <div className="w-12 h-1 bg-gray-200">
                                    <div className={`h-full bg-rose-500 transition-all ${step === 'form' ? 'w-full' : 'w-0'
                                        }`} />
                                </div>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step === 'form' ? 'bg-rose-500 text-white' : 'bg-gray-200 text-gray-600'
                                    }`}>
                                    3
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Content */}
                    <div className="min-h-[400px]">
                        {step === 'date' && (
                            <DatePicker
                                selectedDate={bookingData.date}
                                onSelectDate={handleDateSelect}
                            />
                        )}

                        {step === 'time' && bookingData.date && (
                            <TimeSlotPicker
                                selectedDate={bookingData.date}
                                selectedTime={bookingData.time}
                                onSelectTime={handleTimeSelect}
                            />
                        )}

                        {step === 'form' && (
                            <div>
                                {error && (
                                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                                        <p className="text-red-800 text-sm">{error}</p>
                                    </div>
                                )}
                                <BookingForm
                                    onSubmit={handleFormSubmit}
                                    isSubmitting={isSubmitting}
                                />
                            </div>
                        )}

                        {step === 'confirmation' && confirmationData && (
                            <div className="text-center py-8">
                                <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-6" />

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Meeting Scheduled Successfully!
                                </h3>

                                <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-sm text-gray-600">Date & Time</p>
                                            <p className="font-semibold text-gray-900">
                                                {bookingData.date && format(bookingData.date, 'EEEE, MMMM d, yyyy')} at {bookingData.time}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-600">Duration</p>
                                            <p className="font-semibold text-gray-900">30 minutes</p>
                                        </div>

                                        {confirmationData.meetLink && (
                                            <div>
                                                <p className="text-sm text-gray-600 mb-2">Google Meet Link</p>
                                                <a
                                                    href={confirmationData.meetLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                                                >
                                                    Join Meeting
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6">
                                    A calendar invitation has been sent to <strong>{bookingData.email}</strong>
                                </p>

                                <button
                                    onClick={handleClose}
                                    className="px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg font-semibold hover:from-rose-600 hover:to-rose-700 transition-all"
                                >
                                    Done
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Navigation buttons */}
                    {step !== 'date' && step !== 'confirmation' && (
                        <div className="mt-6 flex justify-between">
                            <button
                                onClick={handleBack}
                                className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                            >
                                Back
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
