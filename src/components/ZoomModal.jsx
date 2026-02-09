'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

export default function ZoomModal({ isOpen, onClose, testimonial }) {

    // Handle ESC key to close
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            // Prevent scrolling on body when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, handleKeyDown]);

    if (!isOpen || !testimonial) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8 animate-fade-in"
            onClick={onClose} // Close when clicking background
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all duration-300 z-50"
                aria-label="Close modal"
            >
                <X className="w-8 h-8" />
            </button>

            {/* Image Container - Stop propagation to prevent closing when clicking image */}
            <div
                className="relative w-full max-w-5xl h-auto max-h-[90vh] rounded-lg overflow-hidden shadow-2xl animate-scale-in"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative w-full h-full min-h-[50vh]">
                    {/* We use standard img tag for modal to ensure full resolution rendering without Next.js optimization complexity for modal zoom */}
                    <img
                        src={testimonial.screenshot}
                        alt={testimonial.alt}
                        className="w-full h-full object-contain max-h-[85vh] mx-auto rounded-lg"
                    />
                </div>

                {/* Caption in Modal */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-4 text-white">
                    <p className="text-center font-medium text-sm md:text-base">
                        {testimonial.alt}
                    </p>
                </div>
            </div>
        </div>
    );
}
