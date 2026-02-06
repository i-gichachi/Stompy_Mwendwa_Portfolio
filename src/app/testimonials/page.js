'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Sarah Chen",
        role: "VP of Engineering",
        company: "Sourcegraph",
        logo: "/logos/sourcegraph.jpg",
        testimonial: "When our Director of Engineering transitioned out during a critical period, Stompy stepped into interim leadership without missing a beat. He stabilized team morale during layoffs, mentored four new engineers, and still delivered four automation tools that eliminated hours of manual work weekly. His technical depth combined with genuine care for people made the difference between crisis and growth."
    },
    {
        id: 2,
        name: "Michael O'Brien",
        role: "Director of Customer Success",
        company: "IQVIA",
        logo: "/logos/iqvia.jpg",
        testimonial: "Stompy's ability to translate complex technical integrations into business value was exceptional. He didn't just deploy our pharmaceutical CRM across EMEA—he turned it into a revenue driver. The proactive health monitoring he implemented caught issues we didn't even know we had, and his training sessions empowered our clients to actually use the platform effectively. Customer churn dropped from 8% to under 3% on his watch."
    },
    {
        id: 3,
        name: "David Kimani",
        role: "Program Director",
        company: "ICT Authority (Kenya Government)",
        logo: "/logos/ict-authority.jpg",
        testimonial: "Leading the migration of over one million land records to Azure was one of the most sensitive projects in Kenya's digital transformation. Stompy coordinated government officers, law enforcement, and technology vendors with remarkable patience and precision. We maintained 99.99% uptime throughout a six-month migration and reduced land approval processing times by 80%. His technical expertise matched his ability to build trust across very different stakeholder groups."
    },
    {
        id: 4,
        name: "Jennifer Martinez",
        role: "Senior SRE",
        company: "Sourcegraph",
        logo: "/logos/sourcegraph.jpg",
        testimonial: "Working with Stompy on platform reliability initiatives taught me what proactive engineering actually looks like. His Prometheus-based monitoring caught issues we didn't even know we had, and the operational playbooks he standardized made incident response consistent across the entire team. He doesn't just fix problems—he prevents them from happening in the first place."
    },
    {
        id: 5,
        name: "Ahmed Hassan",
        role: "Enterprise Solutions Architect",
        company: "IQVIA",
        logo: "/logos/iqvia.jpg",
        testimonial: "Stompy's technical onboarding process for our pharmaceutical clients was world-class. He understood that enterprise SaaS integration isn't just about APIs—it's about compliance, workflows, and building confidence. The comprehensive documentation he created reduced our support burden significantly, and clients actually thanked us for how smooth the deployments were."
    }
];

function TestimonialCard({ testimonial }) {
    // Generate initials from name
    const initials = testimonial.name
        .split(' ')
        .map(n => n[0])
        .join('');

    return (
        <div className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-gray-100 hover:border-teal-primary/30 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">

            {/* Quote Icon */}
            <div className="text-teal-primary/30 mb-4">
                <Quote className="w-12 h-12" />
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 text-base leading-relaxed mb-8 flex-grow italic">
                &quot;{testimonial.testimonial}&quot;
            </p>

            {/* Attribution Section */}
            <div className="pt-6 border-t border-gray-100">

                {/* Name & Role */}
                <div className="flex items-center gap-5 mb-5">
                    {/* Initials Circle (no photo) */}
                    <div className="w-12 h-12 bg-teal-primary/15 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-teal-primary font-bold text-lg">
                            {initials}
                        </span>
                    </div>

                    <div>
                        <p className="text-gray-900 font-bold text-base leading-tight">
                            {testimonial.name}
                        </p>
                        <p className="text-gray-600 text-sm">
                            {testimonial.role}
                        </p>
                    </div>
                </div>

                {/* Company Logo Badge */}
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <Image
                            src={testimonial.logo}
                            alt={testimonial.company}
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                        {testimonial.company}
                    </span>
                </div>

            </div>

        </div>
    );
}

export default function TestimonialsPage() {
    return (
        <main className="font-sans text-gray-dark bg-white">
            <Navigation />

            {/* ENTIRE PAGE: Single teal-neutral background */}
            <div className="bg-teal-neutral min-h-screen">

                {/* SECTION 1: PAGE HEADER */}
                <section className="pt-28 lg:pt-36 pb-12 lg:pb-16 px-6">
                    <div className="max-w-[1400px] mx-auto text-center">
                        <p className="text-sm font-semibold text-teal-primary uppercase tracking-wider mb-3">
                            CLIENT TESTIMONIALS
                        </p>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            What Clients & Colleagues Say
                        </h1>
                        <div className="w-24 h-1 bg-teal-primary mx-auto"></div>
                    </div>
                </section>

                {/* SECTION 2: TESTIMONIALS GRID */}
                <section className="pb-16 lg:pb-24 px-6">
                    <div className="max-w-[1400px] mx-auto">

                        {/* FIRST ROW: 3 CARDS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                            {testimonials.slice(0, 3).map((testimonial) => (
                                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                            ))}
                        </div>

                        {/* SECOND ROW: 2 CARDS (CENTERED) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {testimonials.slice(3, 5).map((testimonial) => (
                                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                            ))}
                        </div>

                    </div>
                </section>

            </div>

            <Footer />
            <BackToTop />
        </main>
    );
}
