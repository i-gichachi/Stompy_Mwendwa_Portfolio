'use client';

import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { services } from '@/data/services';
import { branding } from '@/data/branding';
import { Bot, TrendingUp, Cloud, ArrowRight, Mail, CheckCircle2, Globe } from 'lucide-react';
import Image from 'next/image';

export default function ServicesPage() {
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId;

        const scroll = () => {
            if (!isPaused) {
                // Higher speed on mobile (width < 768px), slower on desktop
                const isMobile = window.innerWidth < 768;
                const speed = isMobile ? 1.5 : 0.5; // Increased mobile speed significantly

                scrollContainer.scrollLeft += speed;

                // Reset when we've scrolled past the first set (roughly half content)
                // We use scrollWidth / 2 as approximation since we duplicated the content
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    // Updated summaries based on User Request
    const updatedServices = [
        {
            ...services[0],
            summary: "Build AI-powered automation that eliminates manual bottlenecks without hiring engineers. Deliver functional MVPs in 21 days using enterprise-grade infrastructure refined over 7+ years at Sourcegraph and IQVIA.",
            trustElement: (
                <div className="bg-teal-primary/5 border-l-2 border-teal-primary rounded-lg p-3.5 mb-5">
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700 font-medium leading-relaxed">
                            Delivered 4 automation tools in 3 months during leadership transition at Sourcegraph
                        </p>
                    </div>
                </div>
            )
        },
        {
            ...services[1],
            summary: "Generate consistent alpha while protecting downside through AI-driven investment infrastructure. Instant exposure to global assets with volatility-optimized returns, built on cloud architecture managing $2M+ programs and $10M enterprise contracts.",
            trustElement: (
                <div className="bg-teal-primary/5 border-l-2 border-teal-primary rounded-lg p-3.5 mb-5">
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700 font-medium leading-relaxed">
                            Maintained 99.99% uptime managing $2M infrastructure program across seven government platforms
                        </p>
                    </div>
                </div>
            )
        },
        {
            ...services[2],
            summary: "Architect cloud applications delivering 99.99% uptime for enterprise SaaS platforms. Reduce incident resolution by 34% and maintain 99.9% availability using battle-tested Kubernetes, CI/CD, and monitoring frameworks across AWS, Azure, and GCP.",
            trustElement: (
                <div className="bg-teal-primary/5 border-l-2 border-teal-primary rounded-lg p-3.5 mb-5">
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700 font-medium leading-relaxed">
                            Reduced incident resolution time by 34% for global AI-powered developer platform
                        </p>
                    </div>
                </div>
            )
        }
    ];

    const getServiceIcon = (id) => {
        const iconClass = "w-6 h-6 text-teal-primary"; // Reduced from w-7 h-7
        switch (id) {
            case 1: return <Bot className={iconClass} />;
            case 2: return <TrendingUp className={iconClass} />;
            case 3: return <Cloud className={iconClass} />;
            default: return <Bot className={iconClass} />;
        }
    };

    const processSteps = [
        {
            number: "1",
            title: "Discovery Call",
            description: "30-minute technical consultation to understand your infrastructure challenges, current stack, and performance bottlenecks"
        },
        {
            number: "2",
            title: "Scope & Proposal",
            description: "Detailed statement of work with architecture diagrams, technology stack recommendations, and milestone-based timeline delivered within 48 hours"
        },
        {
            number: "3",
            title: "Build & Iterate",
            description: "Kubernetes deployment, Prometheus monitoring setup, and CI/CD pipeline configuration with async Slack updates daily and video check-ins weekly"
        },
        {
            number: "4",
            title: "Launch & Support",
            description: "Complete infrastructure handover with runbooks, operational playbooks, and 30-day hyper-care support via follow-the-sun coverage"
        }
    ];

    // Double duplication for seamless scrolling
    const logos = [...branding.companies, ...branding.companies];

    return (
        <main className="font-sans text-gray-dark bg-white">
            <Navigation />

            {/* SECTION 1: SERVICE CARDS SECTION */}
            <section className="bg-gray-50 pt-28 pb-12 lg:pt-36 lg:pb-20"> {/* Increased top padding for navbar spacing */}
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

                    {/* SECTION HEADER */}
                    <div className="text-center mb-10 lg:mb-14">
                        <span className="text-sm font-semibold text-teal-primary uppercase tracking-wider block mb-3">
                            CONSULTING SERVICES
                        </span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
                            Transform Infrastructure Into Competitive Advantage
                        </h2>
                        <div className="w-24 h-1 bg-teal-primary mx-auto"></div>
                    </div>

                    {/* SERVICE CARDS GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"> {/* Tightened gap */}
                        {updatedServices.map((service, index) => (
                            <div
                                key={service.id}
                                className={`
                                    bg-teal-neutral rounded-2xl p-5 lg:p-7 border-l-4 border-yellow-accent shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between
                                    ${index === 2 ? 'lg:col-span-2 lg:mx-auto lg:w-3/4' : ''}
                                `}
                            >
                                {/* Reduced padding from p-6 lg:p-8 to p-5 lg:p-7 */}
                                <div>
                                    {/* 1. ICON + TITLE ROW */}
                                    <div className="mb-4">
                                        <div className="w-12 h-12 bg-teal-primary/10 rounded-xl flex items-center justify-center mb-4"> {/* Reduced icon container */}
                                            {getServiceIcon(service.id)}
                                        </div>
                                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight"> {/* Reduced text size */}
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* 2. SUMMARY PARAGRAPH */}
                                    <p className="text-base text-gray-700 leading-relaxed mb-5"> {/* Fixed text base, reduced mb */}
                                        {service.summary}
                                    </p>

                                    {/* 3. TRUST ELEMENT */}
                                    {service.trustElement}

                                    {/* 4. ENGAGEMENT DETAILS GRID */}
                                    <div className="bg-white/60 rounded-xl p-4 lg:p-5 mb-5"> {/* Reduced padding and margin */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">

                                            {/* A. BEST FOR */}
                                            <div>
                                                <h4 className="text-[11px] font-bold text-teal-primary uppercase tracking-wide mb-1.5">
                                                    BEST FOR
                                                </h4>
                                                <p className="text-sm text-gray-700 leading-relaxed">
                                                    {service.bestFor}
                                                </p>
                                            </div>

                                            {/* B. TIMEFRAME */}
                                            <div>
                                                <h4 className="text-[11px] font-bold text-teal-primary uppercase tracking-wide mb-1.5">
                                                    TIMEFRAME
                                                </h4>
                                                <p className="text-sm text-gray-700 leading-relaxed">
                                                    {service.timeframe}
                                                </p>
                                            </div>

                                            {/* C. INVESTMENT */}
                                            <div className="bg-yellow-accent/20 border-2 border-yellow-accent rounded-xl p-3">
                                                <h4 className="text-[11px] font-bold text-teal-primary uppercase mb-0.5">
                                                    INVESTMENT
                                                </h4>
                                                <p className="text-xl lg:text-2xl font-bold text-gray-900"> {/* Reduced text size */}
                                                    {service.investment}
                                                </p>
                                            </div>

                                            {/* D. EXPERTISE */}
                                            <div>
                                                <h4 className="text-[11px] font-bold text-teal-primary uppercase tracking-wide mb-1.5">
                                                    TECHNICAL EXPERTISE
                                                </h4>
                                                <p className="text-sm text-gray-700 leading-relaxed">
                                                    {service.expertise}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/* 5. CTA BUTTON */}
                                <a
                                    href={`mailto:mwendwa.stompy@gmail.com?subject=Consultation Request: ${service.title}&body=Hi Stompy,%0D%0A%0D%0AI'm interested in your ${service.title} and would like to schedule a consultation.%0D%0A%0D%0A[Please share your company/organization and primary challenge]`}
                                    className="inline-flex items-center gap-2 bg-yellow-accent text-gray-900 px-6 py-3.5 rounded-xl font-bold hover:bg-yellow-accent/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl w-full sm:w-auto justify-center mt-auto text-sm lg:text-base"
                                >
                                    <span>{service.cta}</span>
                                    <ArrowRight className="w-5 h-5" />
                                </a>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* SECTION 2: WHY WORK WITH ME (NEW) */}
            <section className="bg-teal-neutral py-16 lg:py-24">
                <div className="max-w-[1400px] mx-auto px-6">

                    {/* SECTION HEADER */}
                    <div className="text-center mb-12 lg:mb-16">
                        <span className="text-sm font-semibold text-teal-primary uppercase tracking-wider block mb-3">
                            WHY WORK WITH ME
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Enterprise Experience at Startup Speed
                        </h2>
                        <div className="w-24 h-1 bg-teal-primary mx-auto"></div>
                    </div>

                    {/* DIFFERENTIATORS GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">

                        {/* CARD 1 */}
                        <div className="bg-white rounded-xl p-6 lg:p-8 border-2 border-gray-100 hover:border-teal-primary/30 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                            <div className="w-12 h-12 bg-teal-primary/10 rounded-xl flex items-center justify-center mb-4">
                                <Cloud className="w-6 h-6 text-teal-primary" />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                                Proven at Scale
                            </h3>
                            <p className="text-base text-gray-700 leading-relaxed">
                                7+ years managing global infrastructure at Sourcegraph, IQVIA, and Kenya Government. Enterprise-grade reliability without enterprise bureaucracy.
                            </p>
                        </div>

                        {/* CARD 2 */}
                        <div className="bg-white rounded-xl p-6 lg:p-8 border-2 border-gray-100 hover:border-teal-primary/30 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                            <div className="w-12 h-12 bg-teal-primary/10 rounded-xl flex items-center justify-center mb-4">
                                <Globe className="w-6 h-6 text-teal-primary" />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                                Global Operations Expertise
                            </h3>
                            <p className="text-base text-gray-700 leading-relaxed">
                                Orchestrated platform operations across three continents using follow-the-sun support model. Async-first workflows refined over 4 years of distributed team management.
                            </p>
                        </div>

                        {/* CARD 3 */}
                        <div className="bg-white rounded-xl p-6 lg:p-8 border-2 border-gray-100 hover:border-teal-primary/30 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                            <div className="w-12 h-12 bg-teal-primary/10 rounded-xl flex items-center justify-center mb-4">
                                <TrendingUp className="w-6 h-6 text-teal-primary" />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                                Measurable Impact
                            </h3>
                            <p className="text-base text-gray-700 leading-relaxed">
                                34% faster incident resolution. 99.9% service availability maintained. $10M in contracts secured through technical excellence. Results-driven infrastructure optimization.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* SECTION 3: PROCESS SECTION */}
            <section className="bg-teal-dark py-12 lg:py-24 relative overflow-hidden">
                {/* Subtle texture for depth */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                </div>

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">

                    {/* SECTION HEADER */}
                    <div className="text-center mb-12 lg:mb-16">
                        <span className="text-sm font-semibold text-yellow-accent uppercase tracking-wider block mb-3">
                            HOW IT WORKS
                        </span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                            Simple, Transparent Process
                        </h2>
                        <div className="w-24 h-1 bg-yellow-accent mx-auto"></div>
                    </div>

                    {/* DESKTOP PROCESS STEPS */}
                    <div className="hidden md:grid grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="relative group">
                                {/* Arrow Connector (except last step) */}
                                {index < processSteps.length - 1 && (
                                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                        <ArrowRight className="w-8 h-8 text-yellow-accent/50 group-hover:text-yellow-accent transition-colors duration-300" />
                                    </div>
                                )}

                                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 h-full mt-4">
                                    <div className="absolute -top-4 left-6 w-12 h-12 bg-yellow-accent rounded-full flex items-center justify-center shadow-lg shadow-yellow-accent/20">
                                        <span className="text-xl font-bold text-teal-dark">{step.number}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 mt-4 pt-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* MOBILE PROCESS STEPS */}
                    <div className="md:hidden flex flex-col">
                        {processSteps.map((step, index) => (
                            <div key={index} className="relative flex gap-5 items-start pb-10 last:pb-0">
                                {/* Connecting Line (except last step) */}
                                {index < processSteps.length - 1 && (
                                    <div className="absolute left-6 top-12 w-0.5 h-full bg-white/10 -ml-[1px]"></div>
                                )}

                                <div className="w-12 h-12 bg-yellow-accent rounded-full flex items-center justify-center shadow-lg shadow-yellow-accent/20 flex-shrink-0 z-10">
                                    <span className="text-xl font-bold text-teal-dark">{step.number}</span>
                                </div>
                                <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-5">
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* SECTION 4: SOCIAL PROOF SECTION */}
            <section className="bg-white py-12 lg:py-24">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

                    {/* SECTION HEADER */}
                    <div className="text-center mb-10">
                        <span className="text-sm font-semibold text-teal-primary uppercase tracking-wider block mb-3">
                            TRUSTED BY LEADING ORGANIZATIONS
                        </span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
                            Companies I've Partnered With
                        </h2>
                        <div className="w-24 h-1 bg-teal-primary mx-auto"></div>
                    </div>

                    {/* Scrolling container */}
                    <div className="relative overflow-hidden">
                        {/* Gradient Fades - narrower on mobile */}
                        <div className="absolute left-0 top-0 bottom-0 w-12 lg:w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-12 lg:w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

                        {/* Scrolling track */}
                        <div
                            ref={scrollRef}
                            className="flex gap-16 overflow-x-auto no-scrollbar"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            onTouchStart={() => setIsPaused(true)}
                            onTouchEnd={() => setIsPaused(false)}
                        >
                            {/* First set of logos */}
                            {logos.map((company, index) => (
                                <div key={`first-${index}`} className="flex-shrink-0 flex flex-col items-center gap-3 w-32">
                                    <div className="w-24 h-24 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                                        <div className="relative w-full h-full">
                                            <img
                                                src={company.logo}
                                                alt={`${company.name} logo`}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        {company.name}
                                    </span>
                                </div>
                            ))}

                            {/* Second set for seamless loop - using same logos array as it already has 2x duplication in definition, but Homepage does manual map duplication. 
                               Wait, `logos` in ServicesPage is defined as `[...branding.companies, ...branding.companies]`.
                               HOMEPAGE does: 
                               {branding.companies.map...}
                               {branding.companies.map...}
                               
                               In ServicesPage, `logos` ALREADY has double content.
                               So I should just map `logos` once? 
                               BUT, the homepage logic `if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2)` depends on having two sets.
                               If `logos` is already double, mapping it once gives me 2 sets.
                               So `scrollWidth / 2` will work if I scroll to half.
                               
                               However, to be EXACTLY like Homepage, I should see how Homepage does it.
                               Homepage: 
                               {branding.companies.map...}
                               {branding.companies.map...}
                               
                               ServicesPage:
                               const logos = [...branding.companies, ...branding.companies];
                               {logos.map...}
                               (This is effectively 2 sets)
                               
                               So logic holds.
                            */}
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION 5: FINAL CTA SECTION */}
            <section className="bg-teal-neutral py-12 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">

                    <div className="bg-white rounded-2xl lg:rounded-3xl p-8 lg:p-12 shadow-xl border border-teal-light/50 text-center relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-primary via-teal-mid to-teal-primary"></div>

                        <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                            Ready to Eliminate Infrastructure Headaches?
                        </h2>
                        <p className="text-base lg:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Schedule a focused 30-minute discovery call to map out a strategy for your specific technical challenges.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="mailto:mwendwa.stompy@gmail.com?subject=Free Consultation Request&body=Hi Stompy,%0D%0A%0D%0AI'd like to schedule a consultation to discuss my infrastructure needs."
                                className="inline-flex items-center gap-2 bg-yellow-accent text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-accent/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto justify-center"
                            >
                                <span>Schedule Free Consultation</span>
                                <ArrowRight className="w-5 h-5" />
                            </a>

                            <a
                                href="mailto:mwendwa.stompy@gmail.com"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-teal-primary hover:bg-teal-neutral/50 transition-all duration-300 w-full sm:w-auto justify-center"
                            >
                                <Mail className="w-5 h-5" />
                                <span>Email Directly</span>
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
            <BackToTop />
        </main>
    );
}
