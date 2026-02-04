'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Cloud, Settings, Users, CheckCircle, ArrowRight,
  Mail, Phone, MapPin, Linkedin, Github, ArrowUp,
  Clock, DollarSign, Quote, Menu, X
} from 'lucide-react';
import { branding } from '@/data/branding';
import { competencies } from '@/data/competencies';
import { caseStudies } from '@/data/caseStudies';
import { services } from '@/data/services';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="pt-20 relative font-sans text-gray-dark">
      {/* STEP 2 & FIX 6: NAVIGATION (Sticky with Hamburger) */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-dark">
            SM
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

      {/* STEP 3 & FIX 1: HERO SECTION (Final Refined Version) */}
      {/* STEP 3 & FIX 1: HERO SECTION - V2 REDESIGN (MAXIMUM IMPACT) */}
      <section className="relative bg-teal-primary py-12 lg:py-16 px-6 lg:px-12" aria-label="Hero section">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 min-h-[550px] lg:min-h-[600px] items-center">

            {/* LEFT COLUMN - TEXT CONTENT */}
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pr-8">

              {/* Name - Slightly reduced to prevent overlap */}
              <h1 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-[0.9] mb-4 animate-fade-in-up">
                {branding.name}
              </h1>

              {/* Role */}
              <h2 className="text-xl lg:text-2xl font-bold text-white leading-tight mb-6 animate-fade-in-up delay-100">
                {branding.roleTitle}
              </h2>

              {/* Tagline */}
              <p className="text-base lg:text-lg font-normal text-white/80 leading-relaxed max-w-lg mb-8 animate-fade-in-up delay-200">
                {branding.tagline}
              </p>

              {/* CTA Buttons - Professional & Tight */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
                <button className="bg-yellow-accent hover:bg-yellow-500 text-teal-primary font-bold text-sm lg:text-base px-8 py-3.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-yellow-accent/50 focus:outline-none w-full sm:w-auto">
                  Schedule Call
                </button>
                <button className="border border-white/40 hover:border-white bg-transparent hover:bg-white/10 text-white font-semibold text-sm lg:text-base px-8 py-3.5 rounded-lg transition-all duration-300 focus:ring-4 focus:ring-white/50 focus:outline-none w-full sm:w-auto">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* CENTER COLUMN - PROFILE IMAGE (RECTANGULAR) */}
            <div className="flex items-center justify-center lg:px-4">
              <div className="relative w-[300px] lg:w-[320px] h-[450px] lg:h-[500px] mx-auto group">
                {/* Yellow Shadow */}
                <div className="absolute inset-0 translate-x-6 translate-y-6 bg-yellow-accent rounded-3xl opacity-90 -z-10 transition-transform duration-300 group-hover:translate-x-7 group-hover:translate-y-7"></div>

                {/* Image Container - Rectangular & Rounded */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden ring-8 ring-white z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1">
                  <Image
                    src={branding.profileImage}
                    alt={`${branding.name} - ${branding.roleTitle}`}
                    fill
                    className="object-cover object-center"
                    priority
                    quality={95}
                    sizes="(max-width: 768px) 300px, 320px"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - METRICS (Single Column Stack) */}
            <div className="w-full lg:pl-12">
              <div className="grid grid-cols-1 gap-4">
                {/* Metric 1 - Years Experience */}
                <div className="bg-teal-dark/30 rounded-xl p-6 flex flex-col justify-center border border-white/10 hover:bg-teal-dark/40 transition-all duration-300">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    7+
                  </div>
                  <div className="text-xs font-medium text-white/70 uppercase tracking-wider">
                    Years Experience
                  </div>
                </div>

                {/* Metric 2 - Incident Resolution */}
                <div className="bg-teal-dark/30 rounded-xl p-6 flex flex-col justify-center border border-white/10 hover:bg-teal-dark/40 transition-all duration-300">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    34%
                  </div>
                  <div className="text-xs font-medium text-white/70 uppercase tracking-wider">
                    Incident Resolution Improvement
                  </div>
                </div>

                {/* Metric 3 - Service Availability */}
                <div className="bg-teal-dark/30 rounded-xl p-6 flex flex-col justify-center border border-white/10 hover:bg-teal-dark/40 transition-all duration-300">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    99.9%
                  </div>
                  <div className="text-xs font-medium text-white/70 uppercase tracking-wider">
                    Service Availability
                  </div>
                </div>

                {/* Metric 4 - Contract Value */}
                <div className="bg-teal-dark/30 rounded-xl p-6 flex flex-col justify-center border border-white/10 hover:bg-teal-dark/40 transition-all duration-300">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    $6M
                  </div>
                  <div className="text-xs font-medium text-white/70 uppercase tracking-wider">
                    Contract Value Secured
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STEP 4 & FIX 2: LOGO CAROUSEL (Transparent Containers, Full Clarity, No Opacity) */}
      <section className="bg-teal-whisper py-10 px-6">
        <div className="max-w-[1400px] mx-auto">

          {/* Heading */}
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-dark text-center mb-12">
            Trusted by Leading Organizations
          </h2>

          {/* Scrolling Logo Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex gap-8 md:gap-12 animate-scroll">
              {[...branding.companies, ...branding.companies].map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-36 md:w-44"
                >
                  <div className="flex flex-col items-center gap-3">

                    {/* Logo Section - TRANSPARENT, NO PADDING, NO SHADOW, NO OPACITY */}
                    <div className="h-24 md:h-28 flex items-center justify-center w-full group transition-all">

                      {typeof company === 'string' ? (
                        <div className="text-3xl md:text-4xl font-bold text-gray-400 group-hover:text-teal-primary transition-colors">
                          {company.split(' ').map(word => word[0]).join('')}
                        </div>
                      ) : (
                        company.logo ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={company.logo}
                              alt={company.name}
                              fill
                              className="object-contain" // Removed opacity-80
                            />
                          </div>
                        ) : (
                          <div className="text-3xl md:text-4xl font-bold text-gray-400 group-hover:text-teal-primary transition-colors">
                            {company.name.split(' ').map(word => word[0]).join('')}
                          </div>
                        )
                      )}

                    </div>

                    {/* Company Name */}
                    <p className="text-xs md:text-sm text-gray-600 font-medium text-center leading-tight w-full px-1">
                      {typeof company === 'string' ? company : company.name}
                    </p>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* STEP 5: COMPETENCIES (Unchanged) */}
      <section className="bg-teal-light py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-teal-primary uppercase tracking-wide mb-2">
              MY EXPERTISE
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">
              Engineering Resilience at Scale
            </h2>
            <div className="w-16 h-1 bg-teal-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Pillar 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border-t-4 border-teal-primary">
              <div className="flex justify-center mb-4">
                <Cloud className="w-12 h-12 text-teal-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-dark mb-6 text-center">
                Infrastructure & Cloud Architecture
              </h3>
              <ul className="space-y-3">
                <li className="text-sm text-gray-medium leading-relaxed">
                  • Cloud & Infrastructure Architecture
                </li>
                <li className="text-sm text-gray-medium leading-relaxed">
                  • Infrastructure Automation & Operational Efficiency
                </li>
                <li className="text-sm text-gray-medium leading-relaxed">
                  • Cross-Functional Stakeholder Management & Technical Communication
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border-t-4 border-teal-primary">
              <div className="flex justify-center mb-4">
                <Settings className="w-12 h-12 text-teal-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-dark mb-6 text-center">
                Automation & Reliability
              </h3>
              <ul className="space-y-3">
                <li className="text-sm text-gray-medium leading-relaxed">
                  • Container Orchestration & CI/CD Pipeline Engineering
                </li>
                <li className="text-sm text-gray-medium leading-relaxed">
                  • Incident Response & Platform Reliability Engineering
                </li>
                <li className="text-sm text-gray-medium leading-relaxed">
                  • Data-Driven Decision Making & System Observability
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border-t-4 border-teal-primary">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-teal-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-dark mb-6 text-center">
                Leadership & Collaboration
              </h3>
              <ul className="space-y-3">
                <li className="text-sm text-gray-medium leading-relaxed">
                  • Engineering Team Leadership & Mentorship
                </li>
                <li className="text-sm text-gray-medium leading-relaxed">
                  • Enterprise SaaS Integration & Technical Client Success
                </li>
                <li className="text-sm text-gray-medium leading-relaxed">
                  • Agile Product Development & Technical Program Management
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/expertise"
              className="inline-flex items-center gap-2 text-teal-primary font-semibold hover:underline text-lg"
            >
              View All Competencies <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* STEP 6 & FIX 3: CASE STUDIES (With Logos) */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-teal-primary uppercase tracking-wide mb-2">
              FEATURED WORK
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">
              Case Studies & Technical Wins
            </h2>
            <div className="w-16 h-1 bg-teal-primary mx-auto"></div>
          </div>

          <div className="space-y-8">
            {caseStudies.slice(0, 3).map((study) => {
              // Use logo directly from study object or fallback to lookup
              const logoSrc = study.logo || branding.companies.find(c => c.name === study.company)?.logo;

              return (
                <div
                  key={study.id}
                  className="bg-gray-50 rounded-xl p-6 lg:p-8 border-l-4 border-teal-primary hover:shadow-lg transition-all"
                >
                  {/* Company Badge & Date */}
                  <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                    <div className="flex items-center gap-3">
                      {/* Render Logo if available, otherwise fallback to text badge */}
                      {logoSrc ? (
                        <div className="flex items-center gap-2">
                          <div className="relative w-8 h-8 rounded-md overflow-hidden flex-shrink-0 bg-white shadow-sm border border-gray-100">
                            <Image
                              src={logoSrc}
                              alt={study.company}
                              fill
                              className="object-contain p-1"
                            />
                          </div>
                          <span className="text-teal-primary font-bold text-sm tracking-wide uppercase">
                            {study.company}
                          </span>
                        </div>
                      ) : (
                        <span className="bg-teal-primary text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase">
                          {study.company}
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-medium">
                      {study.period}
                    </span>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-gray-dark mb-4 leading-tight">
                    {study.title}
                  </h3>

                  <p className="text-base text-gray-medium mb-6 leading-relaxed">
                    {study.executiveSummary.split('.').slice(0, 2).join('.')}.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                    {study.quantifiableOutcomes.slice(0, 2).map((outcome, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-dark leading-relaxed">
                          {outcome}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/portfolio/${study.slug}`}
                    className="inline-flex items-center gap-2 text-teal-primary font-semibold hover:underline"
                  >
                    Read Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-block bg-teal-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-dark transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* STEP 7: TESTIMONIALS */}
      <section className="bg-teal-pale py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">
              What Colleagues Say
            </h2>
            <div className="w-16 h-1 bg-teal-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm">
                <Quote className="w-10 h-10 text-teal-primary mb-4" />
                <p className="text-base text-gray-medium italic leading-relaxed mb-6">
                  "Testimonials will appear here once provided. This section showcases feedback from colleagues, managers and clients who have worked with Stompy."
                </p>
                <div>
                  <p className="text-sm font-semibold text-gray-dark">
                    - Placeholder Name
                  </p>
                  <p className="text-xs text-gray-medium">
                    Title, Company
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-teal-primary font-semibold hover:underline"
            >
              View All Testimonials <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* STEP 8 & FIX 4: SERVICES (Full Height Cards) */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">
              How I Can Help
            </h2>
            <div className="w-16 h-1 bg-teal-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Service 1 - AI Agentic */}
            {services && services.length > 0 && (
              <div className="bg-gray-50 rounded-xl p-8 shadow-md border border-gray-200 border-t-4 border-t-teal-primary hover:shadow-xl transition-all min-h-[400px] flex flex-col">
                <h3 className="text-xl font-bold text-gray-dark mb-4">
                  {services[0].title}
                </h3>
                <p className="text-sm text-gray-medium leading-relaxed mb-6 flex-grow">
                  {services[0].summary}
                </p>
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-teal-primary font-semibold mb-2">
                    <Clock className="w-4 h-4" />
                    {services[0].timeframe}
                  </div>
                  <div className="flex items-center gap-2 text-lg font-bold text-gray-dark">
                    <DollarSign className="w-5 h-5" />
                    {services[0].investment}
                  </div>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-teal-primary font-semibold hover:underline"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}

            {/* Service 3 - Enterprise DevOps */}
            {services && services.length > 2 && (
              <div className="bg-gray-50 rounded-xl p-8 shadow-md border border-gray-200 border-t-4 border-t-teal-primary hover:shadow-xl transition-all min-h-[400px] flex flex-col">
                <h3 className="text-xl font-bold text-gray-dark mb-4">
                  {services[2].title}
                </h3>
                <p className="text-sm text-gray-medium leading-relaxed mb-6 flex-grow">
                  {services[2].summary}
                </p>
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-teal-primary font-semibold mb-2">
                    <Clock className="w-4 h-4" />
                    {services[2].timeframe}
                  </div>
                  <div className="flex items-center gap-2 text-lg font-bold text-gray-dark">
                    <DollarSign className="w-5 h-5" />
                    {services[2].investment}
                  </div>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-teal-primary font-semibold hover:underline"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block bg-teal-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-dark transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* STEP 9 & FIX 5: FOOTER (Modern 3-Column) */}
      <footer className="bg-teal-dark py-16 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">

          {/* 3-COLUMN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

            {/* COLUMN 1: BRANDING & CTA */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Stompy Mwendwa
              </h3>
              <p className="text-sm text-white/70 mb-6 leading-relaxed">
                Senior DevOps & Platform Reliability Engineer
              </p>

              <p className="text-xs text-white/50 uppercase tracking-wider mb-6">
                For roles, consulting, or speaking enquiries
              </p>

              <button className="inline-flex items-center gap-2 bg-yellow-accent text-gray-dark px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                Book a Call
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* COLUMN 2: MENU */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Menu
              </h4>
              <div className="flex flex-col gap-3">
                <Link
                  href="/"
                  className="text-sm text-white/70 hover:text-yellow-accent transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/expertise"
                  className="text-sm text-white/70 hover:text-yellow-accent transition-colors"
                >
                  Expertise
                </Link>
                <Link
                  href="/portfolio"
                  className="text-sm text-white/70 hover:text-yellow-accent transition-colors"
                >
                  Portfolio
                </Link>
                <Link
                  href="/services"
                  className="text-sm text-white/70 hover:text-yellow-accent transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/testimonials"
                  className="text-sm text-white/70 hover:text-yellow-accent transition-colors"
                >
                  Testimonials
                </Link>
              </div>
            </div>

            {/* COLUMN 3: CONNECT */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Connect
              </h4>
              <div className="flex flex-col gap-4">

                <a
                  href="mailto:mwendwa.stompy@gmail.com"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-yellow-accent transition-colors group"
                >
                  <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center group-hover:bg-yellow-accent transition-colors">
                    <Mail className="w-4 h-4 group-hover:text-gray-dark" />
                  </div>
                  <span>mwendwa.stompy@gmail.com</span>
                </a>

                <a
                  href="https://linkedin.com/in/Stompy-Mwendwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-yellow-accent transition-colors group"
                >
                  <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center group-hover:bg-yellow-accent transition-colors">
                    <Linkedin className="w-4 h-4 group-hover:text-gray-dark" />
                  </div>
                  <span>LinkedIn Profile</span>
                </a>

                <div className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>San Francisco, California</span>
                </div>

              </div>
            </div>

          </div>

          {/* DIVIDER */}
          <div className="w-full h-px bg-white/20 mb-8"></div>

          {/* COPYRIGHT - CENTERED */}
          <div className="text-center">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} Stompy Mwendwa. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

      {/* FLOATING BACK TO TOP BUTTON */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-teal-primary text-white p-4 rounded-full shadow-lg hover:bg-teal-dark transition-all z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

    </main>
  );
}
