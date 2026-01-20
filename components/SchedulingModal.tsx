'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface SchedulingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SchedulingModal({ isOpen, onClose }: SchedulingModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const calcomUsername = process.env.NEXT_PUBLIC_CALCOM_USERNAME || 'your-username';
    const calcomEvent = process.env.NEXT_PUBLIC_CALCOM_EVENT || 'consultation';

    // Cal.com embed URL with light theme
    const embedUrl = `https://cal.com/${calcomUsername}/${calcomEvent}?embed=true&theme=light`;

    const modalContent = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-rose-900/75 transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors z-10"
                    aria-label="Close"
                >
                    <XMarkIcon className="w-6 h-6 text-gray-500" />
                </button>

                {/* Header */}
                <div className="p-8 pb-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Schedule a Consultation
                    </h2>
                    <p className="text-gray-600">
                        Choose a convenient time for your legal consultation
                    </p>
                </div>

                {/* Cal.com Embed */}
                <div className="px-8 pb-8">
                    <div className="w-full rounded-lg overflow-hidden bg-gray-50" style={{ height: '600px' }}>
                        {(calcomUsername === 'your-username' || calcomEvent === 'consultation') ? (
                            <div className="flex items-center justify-center h-full">
                                <div className="text-center p-8">
                                    <p className="text-amber-600 font-medium mb-2">
                                        ⚠️ Cal.com Not Configured
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        Please configure your Cal.com credentials in .env.local
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <iframe
                                src={embedUrl}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allow="camera; microphone; autoplay; display-capture; geolocation"
                                style={{
                                    border: 'none',
                                    backgroundColor: 'white'
                                }}
                                title="Schedule a Consultation"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}
