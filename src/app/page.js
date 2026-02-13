'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Cloud, Settings, Users, CheckCircle, ArrowRight,
  Mail, Phone, MapPin, Linkedin, Github,
  Clock, DollarSign, Quote, Menu, X
} from 'lucide-react';
import { branding } from '@/data/branding';
import { competencies } from '@/data/competencies';
import { caseStudies } from '@/data/caseStudies';
import { services } from '@/data/services';
import { slackTestimonials } from '@/data/testimonials';
import ScreenshotCard from '@/components/ScreenshotCard';
import ZoomModal from '@/components/ZoomModal';
import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  return (
    <main className="pt-20 relative font-sans text-gray-dark">
      {/* STEP 2 & FIX 6: NAVIGATION (Sticky with Hamburger) */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-dark uppercase tracking-wide">
            Stompy Mwendwa
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-base font-medium text-gray-dark hover:text-teal-primary transition-colors">
              About
            </Link>
            <Link href="/expertise" className="text-base font-medium text-gray-dark hover:text-teal-primary transition-colors">
              Expertise
            </Link>
            <Link href="/portfolio" className="text-base font-medium text-gray-dark hover:text-teal-primary transition-colors">
              Portfolio
            </Link>
            <Link href="/services" className="text-base font-medium text-gray-dark hover:text-teal-primary transition-colors">
              Services
            </Link>
            <Link href="/testimonials" className="text-base font-medium text-gray-dark hover:text-teal-primary transition-colors">
              Testimonials
            </Link>
            <button className="bg-yellow-accent text-gray-dark px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
              Schedule Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-dark" />
            ) : (
              <Menu className="w-6 h-6 text-gray-dark" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg absolute w-full left-0 top-20">
            <div className="flex flex-col px-6 py-4 space-y-4">
              <Link href="/about" className="text-base font-medium text-gray-dark hover:text-teal-primary" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/expertise" className="text-base font-medium text-gray-dark hover:text-teal-primary" onClick={() => setMobileMenuOpen(false)}>
                Expertise
              </Link>
              <Link href="/portfolio" className="text-base font-medium text-gray-dark hover:text-teal-primary" onClick={() => setMobileMenuOpen(false)}>
                Portfolio
              </Link>
              <Link href="/services" className="text-base font-medium text-gray-dark hover:text-teal-primary" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="/testimonials" className="text-base font-medium text-gray-dark hover:text-teal-primary" onClick={() => setMobileMenuOpen(false)}>
                Testimonials
              </Link>
              <button className="bg-yellow-accent text-gray-dark px-6 py-3 rounded-lg font-semibold w-full">
                Schedule Call
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION - EXECUTIVE PROFESSIONAL DESIGN */}
      <section className="relative bg-gradient-to-br from-teal-primary via-teal-primary to-teal-dark overflow-hidden pt-12 lg:pt-16 pb-12 lg:pb-16">

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* LEFT COLUMN - Content (Order 2 on mobile, Order 1 on desktop) */}
            <div className="order-2 lg:order-1 relative z-10 animate-fade-in-up">

              {/* Name Block */}
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-none mb-3 tracking-tight">
                {branding.name ? branding.name.toUpperCase() : "STOMPY MWENDWA"}
              </h1>

              {/* Enhanced separator with glow effect */}
              <div className="relative w-20 h-1 bg-yellow-accent mb-4">
                <div className="absolute inset-0 bg-yellow-accent blur-sm opacity-50"></div>
              </div>

              <p className="text-xl lg:text-2xl font-semibold text-yellow-accent mb-4 uppercase tracking-wide">
                {branding.roleTitle}
              </p>

              <p className="text-lg lg:text-xl font-medium text-white leading-relaxed max-w-xl mb-8 drop-shadow-sm">
                {branding.tagline}
              </p>

              {/* METRICS IN CARDS (Glassmorphism) */}
              {branding.keyMetrics && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {[
                    branding.keyMetrics[3], // $6M
                    branding.keyMetrics[1], // 34%
                    branding.keyMetrics[2]  // 99.9%
                  ].map((metric, index) => (
                    <div key={index} className="relative group h-full">

                      {/* Enhanced card with better hover states */}
                      <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-black/10 transition-all duration-300 h-full flex flex-col justify-between">

                        {/* Gradient overlay on hover - more subtle */}
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-accent/0 via-yellow-accent/0 to-yellow-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Content with improved contrast */}
                        <div className="relative z-10">
                          <p className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                            {metric ? metric.value : ''}
                          </p>
                          <p className="text-xs lg:text-sm font-semibold text-white/80 uppercase tracking-wide">
                            {metric ? metric.label : ''}
                          </p>
                        </div>

                        {/* Bottom accent line - appears on hover */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* REFINED CTA BUTTONS - EXPANDED */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {/* Primary CTA with shine effect */}
                <Link
                  href="/about"
                  className="group relative bg-yellow-accent text-gray-900 px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-yellow-accent/20 hover:-translate-y-0.5 hover:scale-[1.02] w-full flex items-center justify-center"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    About Me
                  </span>
                  {/* Shine animation on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                </Link>

                {/* Secondary CTA */}
                <button className="relative bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold border border-white/30 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-0.5 w-full flex items-center justify-center">
                  View Portfolio
                </button>
              </div>

            </div>

            {/* RIGHT COLUMN - Image (Order 1 on mobile, Order 2 on desktop) */}
            <div className="order-1 lg:order-2 flex items-center justify-center w-full h-full animate-fade-in">
              {/* Capsule Image Container */}
              <div className="relative w-[280px] lg:w-[380px]">

                {/* Enhanced yellow accent background with blur */}
                <div className="absolute inset-0 bg-yellow-accent rounded-[190px] -z-10 translate-x-3 translate-y-3 blur-sm opacity-60"></div>

                {/* Main capsule container - Taller aspect ratio to match content */}
                <div className="relative w-full aspect-[2/3] rounded-[190px] overflow-hidden border-4 border-white/20 bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">

                  <Image
                    src={branding.profileImage}
                    alt={`${branding.name} - ${branding.roleTitle}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STEP 4 & FIX 2: LOGO CAROUSEL (Transparent Containers, Full Clarity, No Opacity) */}
      <section className="bg-gray-50 py-10 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <h3 className="text-center text-lg md:text-xl font-bold text-teal-primary uppercase tracking-wider mb-12">
            Trusted by Leading Organizations
          </h3>

          {/* Scrolling container */}
          <div className="relative overflow-hidden">
            {/* Gradient fade on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

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
              {branding.companies.map((company, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 flex flex-col items-center gap-3 w-32">
                  <div className="w-24 h-24 flex items-center justify-center transition-all duration-300">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-700 text-center">
                    {company.name}
                  </p>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {branding.companies.map((company, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 flex flex-col items-center gap-3 w-32">
                  <div className="w-24 h-24 flex items-center justify-center transition-all duration-300">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-700 text-center">
                    {company.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STEP 5: COMPETENCIES (Refined Light Theme) */}
      <section className="relative bg-teal-neutral py-12 lg:py-20 overflow-hidden">

        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6">

          {/* Section Header */}
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-teal-primary uppercase tracking-wider mb-2">
              MY EXPERTISE
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">
              Engineering Resilience at Scale
            </h2>
            <div className="w-20 h-1 bg-teal-primary mx-auto"></div>
          </div>

          {/* 3 Pillar Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

            {/* PILLAR 1: Infrastructure & Platform Engineering */}
            <div className="group relative">
              <div className="relative bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">

                {/* Top accent border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-primary via-teal-light to-teal-primary rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 mb-5 bg-teal-primary/5 rounded-lg flex items-center justify-center group-hover:bg-teal-primary/10 transition-colors">
                    <svg className="w-7 h-7 text-teal-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-gray-dark mb-3 leading-tight">
                    Infrastructure & Platform Engineering
                  </h3>

                  <ul className="space-y-2 flex-grow">
                    <li className="flex items-start gap-2.5">
                      <span className="text-teal-primary mt-1.5 flex-shrink-0 text-xs">●</span>
                      <span className="text-[15px] text-gray-600 leading-relaxed">
                        Cloud & Infrastructure Architecture
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-teal-primary mt-1.5 flex-shrink-0 text-xs">●</span>
                      <span className="text-[15px] text-gray-600 leading-relaxed">
                        Container Orchestration & CI/CD Pipeline Engineering
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-teal-primary mt-1.5 flex-shrink-0 text-xs">●</span>
                      <span className="text-[15px] text-gray-600 leading-relaxed">
                        Cross-Functional Stakeholder Management & Technical Communication
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PILLAR 2: AI & Innovation */}
            <div className="group relative">
              <div className="relative bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">

                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-primary via-teal-light to-teal-primary rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 mb-5 bg-teal-primary/5 rounded-lg flex items-center justify-center group-hover:bg-teal-primary/10 transition-colors">
                    <svg className="w-7 h-7 text-teal-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-gray-dark mb-3 leading-tight">
                    AI & Innovation
                  </h3>

                  <ul className="space-y-2 flex-grow">
                    <li className="flex items-start gap-2.5">
                      <span className="text-teal-primary mt-1.5 flex-shrink-0 text-xs">●</span>
                      <span className="text-[15px] text-gray-600 leading-relaxed">
                        Agentic AI & Intelligent Automation
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-teal-primary mt-1.5 flex-shrink-0 text-xs">●</span>
                      <span className="text-[15px] text-gray-600 leading-relaxed">
                        Strategic Growth & Enterprise Customer Success
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-teal-primary mt-1.5 flex-shrink-0 text-xs">●</span>
                      <span className="text-[15px] text-gray-600 leading-relaxed">
                        Quantitative Strategy & Fund Management
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PILLAR 3: Reliability & Leadership */}
            <div className="group relative">
              <div className="relative bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">

                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-primary via-teal-light to-teal-primary rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 mb-5 bg-teal-primary/5 rounded-lg flex items-center justify-center group-hover:bg-teal-primary/10 transition-colors">
                    <svg className="w-7 h-7 text-teal-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-gray-dark mb-3 leading-tight">
                    Reliability & Leadership
                  </h3>

                  <ul className="space-y-2 flex-grow">
                    <li className="flex items-start gap-2.5">
                      <span className="text-teal-primary mt-1.5 flex-shrink-0 text-xs">●</span>
                      <span className="text-[15px] text-gray-600 leading-relaxed">
                        Engineering Team Leadership & Mentorship
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-teal-primary mt-1.5 flex-shrink-0 text-xs">●</span>
                      <span className="text-[15px] text-gray-600 leading-relaxed">
                        Incident Response & Platform Reliability Engineering
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-teal-primary mt-1.5 flex-shrink-0 text-xs">●</span>
                      <span className="text-[15px] text-gray-600 leading-relaxed">
                        Enterprise SaaS Integration & Technical Client Success
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href="/expertise"
              className="group relative bg-teal-primary text-white px-10 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-teal-dark hover:-translate-y-0.5 inline-flex items-center gap-3"
            >
              <span className="relative z-10">View All Competencies</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* STEP 6 & FIX 3: CASE STUDIES (With Logos) */}
      <section className="bg-gray-50 py-12 lg:py-20">
        <div className="max-w-[1000px] mx-auto px-5 lg:px-6">

          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-teal-primary uppercase tracking-wider mb-3">
              FEATURED WORK
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Case Studies & Technical Wins
            </h2>
            <div className="w-24 h-1 bg-teal-primary mx-auto"></div>
          </div>

          {/* Case Study Cards */}
          <div className="space-y-12">

            {caseStudies.slice(0, 3).map((study, index) => (
              <div key={index} className="group relative">

                {/* Enhanced card with elevated shadow */}
                <div className="relative bg-white rounded-2xl p-6 lg:p-8 border-l-4 border-teal-primary shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

                  {/* Company Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5 pb-5 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      {/* Company logo with refined background */}
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center p-2 flex-shrink-0">
                        <Image
                          src={study.logo || branding.companies.find(c => c.name === study.company)?.logo}
                          alt={study.company}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-teal-primary uppercase tracking-wide">
                          {study.company}
                        </p>
                        <p className="text-[10px] text-gray-500 mt-0.5">{study.period}</p>
                      </div>
                    </div>
                  </div>

                  {/* Title with hover color transition */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-teal-primary transition-colors duration-300">
                    {study.title}
                  </h3>

                  {/* Executive Summary */}
                  <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
                    {study.executiveSummary}
                  </p>

                  {/* Outcomes - Refined Design */}
                  <div className="bg-gradient-to-br from-teal-light/20 to-teal-light/10 rounded-xl p-5 lg:p-6 mb-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {study.quantifiableOutcomes.slice(0, 2).map((outcome, i) => (
                        <div key={i} className="flex items-start gap-3">
                          {/* Refined checkmark icon */}
                          <div className="flex-shrink-0 w-6 h-6 bg-teal-primary rounded-full flex items-center justify-center shadow-sm">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-800 font-medium leading-snug flex-1">
                            {outcome}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced CTA Button */}
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/portfolio?id=${study.id}`}
                      className="group/link inline-flex items-center gap-3 bg-teal-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-dark transition-all duration-300 hover:gap-4 hover:shadow-lg"
                    >
                      <span>Read Full Case Study</span>
                      <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* View All Portfolio Button */}
          <div className="text-center mt-16">
            <Link
              href="/portfolio"
              className="group relative bg-white border-2 border-teal-primary text-teal-primary px-10 py-4 rounded-xl font-semibold hover:bg-teal-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-3"
            >
              <span>View All Case Studies</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* STEP 7: TESTIMONIALS (Elevated Glassmorphic -> Professional Mid-Tone) */}
      <section className="bg-teal-mid py-12 lg:py-20 overflow-hidden relative">

        {/* Subtle dot pattern (white for subtle texture) */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
              backgroundSize: '32px 32px'
            }}
          />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6">

          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-teal-primary uppercase tracking-wider mb-3">
              TESTIMONIALS
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Colleagues Say
            </h2>
            <div className="w-24 h-1 bg-teal-primary mx-auto"></div>
          </div>

          {/* Testimonial Cards Grid - Using ScreenshotCard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {slackTestimonials.slice(0, 3).map((testimonial) => (
              <ScreenshotCard
                key={testimonial.id}
                testimonial={testimonial}
                onClick={openModal}
              />
            ))}
          </div>

          {/* View All Testimonials Button */}
          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="group relative bg-yellow-accent text-gray-900 px-10 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-yellow-accent/20 hover:-translate-y-0.5 inline-flex items-center gap-3"
            >
              <span className="relative z-10">View All Testimonials</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
            </Link>
          </div>

        </div>
      </section>

      {/* MODAL FOR TESTIMONIALS */}
      <ZoomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        testimonial={selectedTestimonial}
      />

      {/* STEP 8 & FIX 4: SERVICES (Capabilities & Value Focus) */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6">

          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-teal-primary uppercase tracking-wider mb-3">
              HOW I CAN HELP
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Consulting & Advisory Services
            </h2>
            <div className="w-24 h-1 bg-teal-primary mx-auto"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">

            {/* Service 1: DevOps & Cloud Infrastructure */}
            <div className="group relative">
              <div className="relative bg-gray-50 rounded-2xl p-6 lg:p-8 border-2 border-gray-100 hover:border-teal-primary hover:shadow-xl transition-all duration-300 h-full flex flex-col">

                {/* Service title */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-teal-primary transition-colors">
                  Enterprise DevOps & Cloud Infrastructure Consulting
                </h3>

                {/* Service description */}
                <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
                  Worried about downtime costing you customers and revenue? I architect, build and maintain cloud applications that deliver 99.99% uptime for enterprise SaaS platforms. With 7+ years managing global infrastructure across AWS, Azure and GCP for companies like Sourcegraph and IQVIA, I've reduced incident resolution times by 34% and maintained 99.9% service availability for mission-critical systems serving thousands of users.
                </p>

                {/* Key capabilities */}
                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700 font-medium">Cloud architecture & migration (AWS, Azure, GCP)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700 font-medium">Kubernetes orchestration & containerization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700 font-medium">CI/CD pipeline optimization & automation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700 font-medium">Infrastructure as Code (Terraform, Ansible)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700 font-medium">Monitoring, observability & incident response</span>
                  </div>
                </div>

                {/* Engagement details */}
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-teal-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>3-week initial engagement</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-teal-primary font-semibold hover:gap-3 transition-all"
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 2: AI Agentic Infrastructure */}
            <div className="group relative">
              <div className="relative bg-gray-50 rounded-2xl p-6 lg:p-8 border-2 border-gray-100 hover:border-teal-primary hover:shadow-xl transition-all duration-300 h-full flex flex-col">

                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-teal-primary transition-colors">
                  AI Agentic Infrastructure & Automation Consulting
                </h3>

                <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
                  Struggling to scale business processes without building expensive engineering teams? I help organizations build, ship and scale AI agentic tools and infrastructure that automate workflows and eliminate manual bottlenecks—no coding required. Leveraging 7+ years architecting enterprise cloud systems for companies like Sourcegraph and IQVIA, I deliver fully functional MVPs that transform operations through intelligent automation.
                </p>

                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700 font-medium">AI agent development & orchestration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700 font-medium">Workflow automation & process optimization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700 font-medium">LLM integration & prompt engineering</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700 font-medium">Infrastructure automation tools</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700 font-medium">Scalable deployment & maintenance</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-teal-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>21-day fully functional MVP delivery</span>
                  </div>
                </div>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-teal-primary font-semibold hover:gap-3 transition-all"
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>

          {/* View All Services Button */}
          <div className="text-center">
            <Link
              href="/services"
              className="group relative bg-teal-primary text-white px-10 py-4 rounded-xl font-semibold hover:bg-teal-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl inline-flex items-center gap-3"
            >
              <span>View All Services & Pricing</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* STEP 9 & FIX 5: FOOTER (Elevated Dark Gradient) */}
      <Footer />

      {/* FLOATING BACK TO TOP BUTTON */}
      {/* FLOATING BACK TO TOP BUTTON */}
      <BackToTop />

    </main>
  );
}
