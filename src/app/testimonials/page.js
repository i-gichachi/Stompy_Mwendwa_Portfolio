'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { slackTestimonials } from '@/data/testimonials';
import ScreenshotCard from '@/components/ScreenshotCard';
import ZoomModal from '@/components/ZoomModal';

export default function TestimonialsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);

    const openModal = (testimonial) => {
        setSelectedTestimonial(testimonial);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTestimonial(null);
    };

    return (
        <main className="font-sans text-gray-dark bg-teal-neutral min-h-screen flex flex-col">
            <Navigation />

            {/* PAGE HEADER */}
            <section className="pt-28 lg:pt-36 pb-12 px-6 relative">
                <div className="max-w-[1400px] mx-auto text-center">
                    <p className="text-sm font-semibold text-teal-primary uppercase tracking-wider mb-3">
                        CLIENT & COLLEAGUE FEEDBACK
                    </p>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        What People Are Saying
                    </h1>
                    <div className="w-28 h-1.5 bg-teal-primary mx-auto"></div>
                </div>
            </section>

            {/* TESTIMONIALS GRID */}
            <section className="pb-16 lg:pb-24 px-6 flex-grow">
                <div className="max-w-[1400px] mx-auto">
                    {/* First 9 Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {slackTestimonials.slice(0, 9).map((testimonial) => (
                            <ScreenshotCard
                                key={testimonial.id}
                                testimonial={testimonial}
                                onClick={openModal}
                            />
                        ))}
                    </div>

                    {/* 10th Card Centered */}
                    {slackTestimonials.length >= 10 && (
                        <div className="mt-8 flex justify-center">
                            <div className="w-full md:w-1/2 lg:w-1/3">
                                <ScreenshotCard
                                    testimonial={slackTestimonials[9]}
                                    onClick={openModal}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
            <BackToTop />

            {/* MODAL */}
            <ZoomModal
                isOpen={isModalOpen}
                onClose={closeModal}
                testimonial={selectedTestimonial}
            />
        </main>
    );
}
