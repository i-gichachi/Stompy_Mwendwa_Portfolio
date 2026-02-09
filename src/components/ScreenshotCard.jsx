'use client';

import Image from 'next/image';
import { Maximize2 } from 'lucide-react';

export default function ScreenshotCard({ testimonial, onClick }) {
    return (
        <div
            className="group relative bg-white rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-teal-primary shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onClick={() => onClick(testimonial)}
        >
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full bg-white">
                <Image
                    src={testimonial.screenshot}
                    alt={testimonial.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-teal-primary/0 group-hover:bg-teal-primary/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 bg-white p-3 rounded-full shadow-lg">
                        <Maximize2 className="w-6 h-6 text-teal-primary" />
                    </div>
                </div>
            </div>

            {/* Caption/Footer (Optional, but good for context) */}
            <div className="p-4 bg-white border-t border-gray-100">
                <p className="text-sm font-medium text-gray-500 line-clamp-2">
                    {testimonial.alt}
                </p>
                <div className="mt-2 flex items-center gap-2 text-xs font-bold text-teal-primary uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Click to Expand</span>
                </div>
            </div>
        </div>
    );
}
