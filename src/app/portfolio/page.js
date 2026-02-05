'use client';

import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Calendar, TrendingUp, CheckCircle2, ChevronDown, ChevronUp, Lightbulb, Target, ArrowLeft, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { caseStudies } from '@/data/caseStudies';

function PortfolioContent() {
    const [expandedCards, setExpandedCards] = useState({});
    const searchParams = useSearchParams();

    const toggleCard = (id) => {
        setExpandedCards(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    useEffect(() => {
        const id = searchParams.get('id');
        if (id) {
            const element = document.getElementById(`case-study-${id}`);
            if (element) {
                // Scroll to the card immediately
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Auto-expand after 10 seconds
                const timer = setTimeout(() => {
                    setExpandedCards(prev => ({
                        ...prev,
                        [Number(id)]: true
                    }));
                }, 10000);

                return () => clearTimeout(timer);
            }
        }
    }, [searchParams]);

    return (
        <div className="min-h-screen bg-[#0d2b2b] text-white selection:bg-teal-primary/30 selection:text-white relative overflow-hidden font-sans">
            {/* Navigation */}
            <Navigation />

            {/* Dot Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
                    backgroundSize: '32px 32px'
                }}
            />

            <main className="pt-24 lg:pt-32 pb-12 lg:pb-20 relative z-10">

                {/* Header Section */}
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center mb-10 lg:mb-14">
                    <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2 animate-fade-in">
                        Portfolio
                    </p>
                    <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up">
                        Case Studies & Technical Wins
                    </h1>
                    <div className="w-20 h-1.5 bg-[#FCD34D] mx-auto mb-10 rounded-full animate-fade-in"></div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
                        {[
                            { value: "5", label: "Featured Projects" },
                            { value: "$8M+", label: "Value Delivered" },
                            { value: "99.99%", label: "Peak Uptime" },
                            { value: "34%", label: "Faster Resolution" }
                        ].map((metric, idx) => (
                            <div
                                key={idx}
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-4 lg:p-5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="text-2xl lg:text-3xl font-bold text-[#FCD34D] mb-1 group-hover:scale-105 transition-transform duration-300">
                                    {metric.value}
                                </div>
                                <div className="text-xs text-white/60 uppercase tracking-wide font-medium">
                                    {metric.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Case Study Cards */}
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-6 lg:space-y-8">
                    {caseStudies.map((study, index) => {
                        const isExpanded = expandedCards[study.id];

                        return (
                            <article
                                key={study.id}
                                id={`case-study-${study.id}`}
                                className="group relative"
                            >
                                <div className={`
                  bg-white/95 backdrop-blur-sm border-l-4 border-[#FCD34D] border-2 border-white/20 
                  rounded-xl lg:rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300
                  p-5 lg:p-8
                `}>

                                    {/* Card Content (Always Visible) */}
                                    <div className="flex flex-col gap-5 lg:gap-6">
                                        {/* Header Row */}
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-100 pb-5 mb-1">
                                            <div className="flex items-center gap-4">
                                                <div className="bg-white w-12 h-12 lg:w-14 lg:h-14 rounded-xl border border-gray-100 shadow-sm p-2 flex items-center justify-center shrink-0">
                                                    <Image
                                                        src={study.logo}
                                                        alt={`${study.company} logo`}
                                                        width={48}
                                                        height={48}
                                                        className="object-contain w-full h-full"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="text-xs font-bold text-[#1a5f5f] uppercase tracking-wide mb-1">
                                                        {study.company}
                                                    </h3>
                                                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                                                        <Calendar className="w-3 h-3" />
                                                        {study.period}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Case Number Badge (Tablet/Desktop) */}
                                            <div className="hidden sm:flex w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#1a5f5f]/10 border border-[#1a5f5f]/20 items-center justify-center shrink-0">
                                                <span className="text-base lg:text-lg font-bold text-[#1a5f5f]">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Title & Summary */}
                                        <div>
                                            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#1a5f5f] transition-colors">
                                                {study.title}
                                            </h2>
                                            <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-5">
                                                {study.executiveSummary}
                                            </p>
                                        </div>

                                        {/* Key Outcomes (Subset) */}
                                        <div className="bg-gradient-to-br from-[#1a5f5f]/5 to-[#1a5f5f]/10 border border-[#1a5f5f]/20 rounded-xl p-5 mb-1">
                                            <div className="flex items-center gap-2 mb-3">
                                                <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-[#1a5f5f]" />
                                                <span className="text-[10px] lg:text-xs font-bold text-[#1a5f5f] uppercase tracking-wide">
                                                    Key Outcomes
                                                </span>
                                            </div>
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
                                                {study.quantifiableOutcomes.slice(0, 4).map((outcome, idx) => (
                                                    <div key={idx} className="flex items-start gap-2.5">
                                                        <CheckCircle2 className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#1a5f5f] mt-1 shrink-0" />
                                                        <span className="text-xs lg:text-sm text-gray-800 font-medium leading-snug">
                                                            {outcome}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Tools Section */}
                                        <div>
                                            <div className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-wide mb-2.5">
                                                🔧 Technical Stack:
                                            </div>
                                            <div className="flex flex-wrap gap-2 mb-1">
                                                {study.technicalProficiencies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="bg-white/80 border border-[#1a5f5f]/20 text-[10px] lg:text-xs font-medium text-[#0f3d3d] px-2.5 py-1 rounded-md hover:bg-[#1a5f5f]/5 transition-colors cursor-default"
                                                    >
                                                        {tech.tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Expanded Content */}
                                        {isExpanded && (
                                            <div className="animate-fade-in mt-2">
                                                <div className="border-t border-gray-200 my-6 lg:my-8"></div>

                                                {/* Context & Background */}
                                                <div className="mb-6 lg:mb-8">
                                                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#1a5f5f]/10 rounded-lg flex items-center justify-center mb-2 lg:mb-3">
                                                        <Lightbulb className="w-4 h-4 lg:w-5 lg:h-5 text-[#1a5f5f]" />
                                                    </div>
                                                    <h3 className="text-lg lg:text-2xl font-bold text-gray-900 mb-3">Context & Background</h3>
                                                    <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                                                        {study.context}
                                                    </p>
                                                </div>

                                                {/* The Challenge */}
                                                <div className="bg-[#FCD34D]/10 border-l-4 border-[#FCD34D] rounded-xl p-5 lg:p-8 mb-6 lg:mb-8">
                                                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#FCD34D]/20 rounded-lg flex items-center justify-center mb-2 lg:mb-3">
                                                        <Target className="w-4 h-4 lg:w-5 lg:h-5 text-gray-900" />
                                                    </div>
                                                    <h3 className="text-lg lg:text-2xl font-bold text-gray-900 mb-3">The Challenge</h3>
                                                    <p className="text-sm lg:text-base text-gray-800 leading-relaxed">
                                                        {study.challenge}
                                                    </p>
                                                </div>

                                                {/* Strategic Approach */}
                                                <div className="mb-6 lg:mb-8">
                                                    <h3 className="text-lg lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Strategic Approach</h3>
                                                    <div className="space-y-5 lg:space-y-6">
                                                        {study.strategicApproach.map((phase, idx) => (
                                                            <div key={idx} className="relative pl-6 lg:pl-8 border-l-2 border-[#1a5f5f]">
                                                                <div className="absolute -left-[17px] top-0 w-8 h-8 bg-[#1a5f5f] rounded-full flex items-center justify-center shadow-md text-sm font-bold text-white">
                                                                    {idx + 1}
                                                                </div>
                                                                <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-1 lg:mb-2">{phase.phase}</h4>
                                                                <p className="text-sm lg:text-base text-gray-700 leading-relaxed">{phase.description}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Full Quantifiable Outcomes */}
                                                <div className="bg-gradient-to-br from-[#1a5f5f]/8 to-[#1a5f5f]/5 rounded-xl p-5 lg:p-8 mb-6 lg:mb-8">
                                                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#1a5f5f]/20 rounded-lg flex items-center justify-center mb-3 lg:mb-4">
                                                        <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-[#1a5f5f]" />
                                                    </div>
                                                    <h3 className="text-lg lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Quantifiable Outcomes</h3>
                                                    <div className="grid grid-cols-1 gap-2 lg:gap-3">
                                                        {study.quantifiableOutcomes.map((outcome, idx) => (
                                                            <div key={idx} className="flex items-start gap-3 bg-white/80 rounded-lg p-3 lg:p-4 border border-[#1a5f5f]/10">
                                                                <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-[#1a5f5f] mt-0.5 shrink-0" />
                                                                <span className="text-sm lg:text-base text-gray-800 font-medium leading-relaxed">
                                                                    {outcome}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Qualitative Impact */}
                                                <div className="mb-6 lg:mb-8">
                                                    <h3 className="text-lg lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Qualitative Impact</h3>
                                                    <div className="space-y-2 lg:space-y-3">
                                                        {study.qualitativeAchievements.map((achievement, idx) => (
                                                            <div key={idx} className="flex items-start gap-3">
                                                                <span className="text-[#1a5f5f] text-lg mt-0.5 lg:mt-1">●</span>
                                                                <p className="text-sm lg:text-base text-gray-700 leading-relaxed">{achievement}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Key Takeaway */}
                                                <div className="bg-[#FCD34D]/15 border-l-4 border-[#FCD34D] rounded-xl p-5 lg:p-8 mb-6 lg:mb-8">
                                                    <div className="text-xs lg:text-sm font-bold text-gray-900 mb-2 lg:mb-3 uppercase tracking-wide">
                                                        Key Takeaway
                                                    </div>
                                                    <p className="text-sm lg:text-lg text-gray-800 leading-relaxed italic">
                                                        &quot;{study.keyTakeaway}&quot;
                                                    </p>
                                                </div>

                                                {/* Technical Proficiencies Applied */}
                                                <div className="mb-6 lg:mb-8">
                                                    <h3 className="text-lg lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Technical Proficiencies Applied</h3>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                                                        {study.technicalProficiencies.map((tech, idx) => (
                                                            <div key={idx} className="bg-white/60 rounded-xl p-4 lg:p-5 border border-[#1a5f5f]/10">
                                                                <h4 className="text-xs lg:text-sm font-bold text-[#1a5f5f] uppercase tracking-wide mb-1 lg:mb-2">
                                                                    {tech.tool}
                                                                </h4>
                                                                <p className="text-xs lg:text-sm text-gray-700 leading-relaxed">
                                                                    {tech.description}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Core Competencies */}
                                                <div className="mb-6 lg:mb-8">
                                                    <h3 className="text-lg lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Core Competencies</h3>
                                                    <div className="flex flex-wrap gap-2 lg:gap-3">
                                                        {study.coreCompetencies.map((comp, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="bg-[#1a5f5f]/8 border border-[#1a5f5f]/30 text-xs lg:text-sm font-medium text-gray-800 px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg"
                                                            >
                                                                {comp}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Conclusion */}
                                                <div className="bg-white/60 border-2 border-[#1a5f5f] rounded-xl p-5 lg:p-8 mb-6 lg:mb-8">
                                                    <h3 className="text-lg lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Conclusion</h3>
                                                    <p className="text-sm lg:text-lg text-gray-700 leading-relaxed">
                                                        {study.conclusion}
                                                    </p>
                                                </div>

                                                {/* Project Links */}
                                                {study.links && study.links.length > 0 && (
                                                    <div className="mb-6 lg:mb-8">
                                                        <h3 className="text-lg lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Project Links</h3>
                                                        <div className="space-y-2">
                                                            {study.links.map((link, idx) => (
                                                                <a
                                                                    key={idx}
                                                                    href={link.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="flex items-center gap-2 text-[#1a5f5f] hover:text-[#0f3d3d] transition-colors group w-fit"
                                                                >
                                                                    <ExternalLink className="w-4 h-4" />
                                                                    <span className="group-hover:underline text-sm lg:text-base">{link.label}</span>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Expand/Collapse Button */}
                                        <div className="mt-1 lg:mt-2 text-center">
                                            <button
                                                onClick={() => toggleCard(study.id)}
                                                className={`
                          inline-flex items-center gap-2 bg-[#FCD34D] text-gray-900 px-6 py-3 lg:py-3.5 rounded-xl text-sm lg:text-base font-semibold 
                          hover:bg-[#FCD34D]/90 transition-all duration-300 hover:gap-3 w-full sm:w-auto justify-center
                          focus:outline-none focus:ring-2 focus:ring-[#1a5f5f] focus:ring-offset-2
                        `}
                                                aria-expanded={isExpanded}
                                                aria-label={isExpanded ? "Collapse case study details" : "Read full case study"}
                                            >
                                                {isExpanded ? (
                                                    <>
                                                        Collapse Case Study
                                                        <ChevronUp className="w-4 h-4 lg:w-5 lg:h-5" />
                                                    </>
                                                ) : (
                                                    <>
                                                        Read Full Case Study
                                                        <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5" />
                                                    </>
                                                )}
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </main>

            <Footer />
            <BackToTop />
        </div>
    );
}

export default function Portfolio() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#0d2b2b]" />}>
            <PortfolioContent />
        </Suspense>
    );
}
