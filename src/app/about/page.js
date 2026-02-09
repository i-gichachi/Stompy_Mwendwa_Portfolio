'use client';
import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Calendar, ChevronDown, CheckCircle, Cloud, TrendingUp, Globe, Download } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import cv from '@/data/cv.json';

export default function About() {
    const [expandedRoles, setExpandedRoles] = useState({});

    const toggleResponsibilities = (index) => {
        setExpandedRoles(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <main className="font-sans text-gray-dark bg-white">
            <Navigation />

            {/* CAREER SNAPSHOT SECTION - MOVED TO HERO POSITION */}
            <section className="bg-white relative py-12 lg:py-16 pt-28 lg:pt-36">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="relative bg-yellow-accent/10 border-l-4 border-yellow-accent rounded-xl p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300">

                            {/* Label */}
                            <p className="text-xs font-bold text-teal-primary uppercase tracking-wider mb-3">
                                CAREER SNAPSHOT
                            </p>

                            {/* Headline */}
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                7 Years Building Resilient Infrastructure at Enterprise Scale
                            </h2>

                            {/* Summary */}
                            <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                                Senior DevOps Engineer with proven expertise leading platform reliability across global SaaS companies. Reduced incident resolution by 34% at Sourcegraph through automated monitoring systems, secured $10M in enterprise contracts at IQVIA via complex API integrations, and led government cloud migrations maintaining 99.99% uptime. Specialized in Kubernetes orchestration, multi-cloud architecture (AWS/Azure/GCP), and distributed team leadership across three continents.
                            </p>

                            {/* Key Highlights Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                {/* Item 1 */}
                                <div>
                                    <div className="w-10 h-10 bg-teal-primary/10 rounded-lg flex items-center justify-center mb-2">
                                        <Cloud className="w-5 h-5 text-teal-primary" />
                                    </div>
                                    <p className="text-xs font-semibold text-teal-primary uppercase tracking-wide">
                                        YEARS EXPERIENCE
                                    </p>
                                    <p className="text-xl lg:text-2xl font-bold text-gray-900">
                                        7+
                                    </p>
                                </div>

                                {/* Item 2 */}
                                <div>
                                    <div className="w-10 h-10 bg-teal-primary/10 rounded-lg flex items-center justify-center mb-2">
                                        <TrendingUp className="w-5 h-5 text-teal-primary" />
                                    </div>
                                    <p className="text-xs font-semibold text-teal-primary uppercase tracking-wide">
                                        INCIDENT REDUCTION
                                    </p>
                                    <p className="text-xl lg:text-2xl font-bold text-gray-900">
                                        34%
                                    </p>
                                </div>

                                {/* Item 3 */}
                                <div>
                                    <div className="w-10 h-10 bg-teal-primary/10 rounded-lg flex items-center justify-center mb-2">
                                        <Globe className="w-5 h-5 text-teal-primary" />
                                    </div>
                                    <p className="text-xs font-semibold text-teal-primary uppercase tracking-wide">
                                        GLOBAL OPERATIONS
                                    </p>
                                    <p className="text-xl lg:text-2xl font-bold text-gray-900">
                                        3 Continents
                                    </p>
                                </div>
                            </div>

                            {/* Download Resume Button */}
                            <a
                                href="/resume.pdf"
                                className="inline-flex items-center gap-2 bg-teal-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg mt-2"
                                aria-label="Download Stompy Mwendwa's resume as PDF"
                            >
                                <Download className="w-5 h-5" />
                                <span>Download Full Resume</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: PROFESSIONAL EXPERIENCE TIMELINE */}
            <section className="bg-teal-mid relative py-12 lg:py-24 overflow-hidden">

                {/* Dot Pattern Overlay */}
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
                        backgroundSize: '32px 32px'
                    }}></div>
                </div>

                <div className="relative max-w-[1400px] mx-auto px-6">

                    {/* Section Header */}
                    <div className="text-center mb-12 lg:mb-16">
                        <p className="text-base font-semibold text-teal-primary uppercase tracking-wider mb-3">
                            PROFESSIONAL JOURNEY
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Experience & Impact
                        </h2>
                        <div className="w-28 h-1.5 bg-teal-primary mx-auto"></div>
                    </div>

                    {/* Timeline Layout */}
                    <div className="relative max-w-[900px] mx-auto">
                        {/* Desktop Connector Line - Thicker */}
                        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[3px] bg-teal-primary"></div>

                        <div className="space-y-8 lg:space-y-12">
                            {cv.experience.map((role, index) => (
                                <div key={index} className="relative group lg:pl-12">

                                    {/* Timeline Dot (Desktop) - Bigger with Shadow */}
                                    <div className="hidden lg:block absolute left-[-11px] top-8 w-6 h-6 bg-teal-primary rounded-full border-[3px] border-white z-10 shadow-lg shadow-teal-primary/20 group-hover:scale-125 group-hover:shadow-xl transition-all duration-300"></div>

                                    {/* Card */}
                                    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-teal-primary/30 p-6 lg:p-8">

                                        <div className="flex flex-col lg:flex-row items-start gap-5 lg:gap-8">

                                            {/* Logo (Left Side) */}
                                            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-50 rounded-xl flex items-center justify-center p-3 flex-shrink-0 border border-gray-100">
                                                <Image
                                                    src={role.logo}
                                                    alt={`${role.company} logo`}
                                                    width={64}
                                                    height={64}
                                                    className="object-contain w-full h-full"
                                                />
                                            </div>

                                            {/* Content (Right Side) */}
                                            <div className="flex-1 w-full">
                                                {/* COMPANY NAME - Label */}
                                                <p className="text-xs font-bold text-teal-primary uppercase tracking-wide mb-1.5">
                                                    {role.company}
                                                </p>

                                                {/* JOB TITLE - Main Focus */}
                                                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-teal-primary transition-colors">
                                                    {role.title}
                                                </h2>

                                                {/* METADATA */}
                                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4 lg:mb-6">
                                                    <span className="flex items-center gap-1.5">
                                                        <MapPin className="w-4 h-4" />
                                                        {role.location}
                                                    </span>
                                                    <span>•</span>
                                                    <span className="flex items-center gap-1.5">
                                                        <Calendar className="w-4 h-4" />
                                                        {role.period}
                                                    </span>
                                                </div>

                                                {/* Collapsible Responsibilities */}
                                                <div className="space-y-2">
                                                    {role.responsibilities.slice(0, expandedRoles[index] ? undefined : 3).map((item, i) => (
                                                        <div key={i} className="flex items-start gap-3">
                                                            <span className="text-teal-primary font-bold text-base mt-0.5 flex-shrink-0">●</span>
                                                            <span className="text-base text-gray-800 font-medium leading-relaxed">
                                                                {item}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>

                                                {role.responsibilities.length > 3 && (
                                                    <button
                                                        onClick={() => toggleResponsibilities(index)}
                                                        className="mt-4 inline-flex items-center gap-2 text-teal-primary font-semibold text-sm hover:gap-3 transition-all"
                                                    >
                                                        <span>{expandedRoles[index] ? 'Show Less' : 'View All Responsibilities'}</span>
                                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedRoles[index] ? 'rotate-180' : ''}`} />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: EDUCATION - DARK EXECUTIVE THEME */}
            <section className="relative bg-[#0d2b2b] py-12 lg:py-24 overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6">

                    <div className="text-center mb-12 lg:mb-16">
                        <p className="text-base font-semibold text-teal-400 uppercase tracking-wider mb-3">
                            ACADEMIC FOUNDATION
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            Education
                        </h2>
                        <div className="w-28 h-1.5 bg-teal-primary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
                        {cv.education.map((edu, index) => (
                            <div key={index} className="relative bg-teal-light/90 backdrop-blur-sm rounded-2xl p-10 border-2 border-white/40 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">

                                {/* Top Accent Border */}
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-accent via-teal-primary to-yellow-accent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* University Logo - WHITE background */}
                                <div className="relative w-24 h-24 bg-white rounded-xl flex items-center justify-center p-4 mb-6 shadow-md">
                                    <Image
                                        src={edu.logo}
                                        alt={edu.institution}
                                        width={80}
                                        height={80}
                                        className="object-contain"
                                    />
                                </div>

                                {/* UNIVERSITY NAME - Label */}
                                <p className="text-xs font-bold text-teal-primary uppercase tracking-wide mb-2">
                                    {edu.institution}
                                </p>

                                {/* DEGREE - Main Focus */}
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-0 leading-snug group-hover:text-teal-primary transition-colors">
                                    {edu.degree}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: CERTIFICATIONS */}
            <section className="bg-teal-neutral py-16 lg:py-24 relative overflow-hidden">
                <div className="relative max-w-[1400px] mx-auto px-6">

                    <div className="text-center mb-16">
                        <p className="text-base font-semibold text-teal-primary uppercase tracking-wider mb-3">
                            PROFESSIONAL CREDENTIALS
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Certifications & Qualifications
                        </h2>
                        <div className="w-28 h-1.5 bg-teal-primary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                        {cv.certifications.map((cert, index) => {
                            return (
                                <div key={index} className="relative bg-white rounded-xl p-8 border-2 border-gray-100 hover:border-teal-primary/30 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col items-center text-center">
                                    <div className="w-20 h-20 mb-6 flex items-center justify-center">
                                        <Image
                                            src={cert.logo}
                                            alt={`${cert.issuer} logo`}
                                            width={80}
                                            height={80}
                                            className="object-contain"
                                        />
                                    </div>

                                    {/* PROVIDER NAME - Label */}
                                    <p className="text-xs font-bold text-teal-primary uppercase tracking-wide mb-2">
                                        {cert.issuer}
                                    </p>

                                    {/* CERTIFICATION NAME - Main focus */}
                                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-snug flex-grow">
                                        {cert.name.replace(/\([^)]*\)/g, '').trim()}
                                    </h3>

                                    {/* ACRONYM BADGE */}
                                    {cert.name.includes('(') && (
                                        <span className="inline-block text-xs font-bold px-2 py-1 rounded mt-2 bg-teal-neutral text-teal-primary">
                                            {cert.name.match(/\(([^)]+)\)/)?.[1]}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 4: LANGUAGES */}
            <section className="bg-white py-16 lg:py-24">
                <div className="max-w-[1400px] mx-auto px-6">

                    <div className="text-center mb-16">
                        <p className="text-base font-semibold text-teal-primary uppercase tracking-wider mb-3">
                            MULTILINGUAL CAPABILITY
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Languages
                        </h2>
                        <div className="w-28 h-1.5 bg-teal-primary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 max-w-5xl mx-auto">
                        {cv.languages.map((lang, index) => {
                            // Styling Logic
                            let width = "45%";
                            let barColor = "bg-gray-400";

                            if (lang.proficiency === 'Native') {
                                barColor = 'bg-teal-primary';
                                width = '100%';
                            } else if (lang.proficiency === 'Fluent') {
                                barColor = 'bg-yellow-accent';
                                width = '90%';
                            }

                            return (
                                <div key={index} className="relative bg-teal-neutral rounded-2xl p-10 border border-gray-100 hover:border-teal-primary/30 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">

                                    {/* Globe Icon */}
                                    <div className="absolute top-6 right-6 w-10 h-10 bg-white/60 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-teal-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>

                                    {/* LANGUAGE NAME - Big and bold */}
                                    <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-3">
                                        {lang.language}
                                    </h3>

                                    {/* PROFICIENCY LABEL */}
                                    <div className="mb-4">
                                        {lang.proficiency === 'Native' && (
                                            <span className="text-xs font-bold text-teal-primary uppercase tracking-wide bg-teal-primary/10 px-3 py-1.5 rounded-lg inline-block">
                                                Native Speaker
                                            </span>
                                        )}
                                        {lang.proficiency === 'Fluent' && (
                                            <span className="text-xs font-bold text-gray-900 uppercase tracking-wide bg-yellow-accent/20 px-3 py-1.5 rounded-lg inline-block">
                                                Fluent Proficiency
                                            </span>
                                        )}
                                        {lang.proficiency === 'Basic' && (
                                            <span className="text-xs font-bold text-gray-600 uppercase tracking-wide bg-gray-200 px-3 py-1.5 rounded-lg inline-block">
                                                Basic Proficiency
                                            </span>
                                        )}
                                    </div>

                                    {/* PROGRESS BAR - With animated shimmer */}
                                    <div className="w-full h-3 bg-gray-100 rounded-full shadow-inner overflow-hidden">
                                        <div className={`relative h-full rounded-full ${barColor}`} style={{ width: width }}>
                                            {/* Shimmer effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </main>
    );
}
