'use client';
import Link from 'next/link';
import { Mail, Linkedin, ArrowRight, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-teal-dark to-[#0F2F2F] pt-12 pb-8 lg:pt-20 lg:pb-10 overflow-hidden relative text-white">

            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '24px 24px'
                    }}
                />
            </div>

            {/* Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-teal-primary/50 to-transparent"></div>

            <div className="relative max-w-[1400px] mx-auto px-6">

                {/* 3-COLUMN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* COLUMN 1: BRANDING & CTA (Span 5) */}
                    <div className="lg:col-span-5">
                        <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                            Stompy Mwendwa
                        </h3>
                        <p className="text-white/70 mb-8 leading-relaxed max-w-md text-[15px]">
                            Senior DevOps & Platform Reliability Engineer helping organizations build resilient, scalable cloud infrastructure that drives business value.
                        </p>

                        <div className="flex flex-col gap-4 items-start">
                            <p className="text-xs font-semibold text-yellow-accent uppercase tracking-wider">
                                Ready to optimize your infrastructure?
                            </p>
                            <button className="group relative bg-white text-teal-dark px-7 py-3.5 rounded-xl font-bold hover:bg-yellow-accent transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2">
                                <span>Book a Consultation</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>

                    {/* COLUMN 2: MENU (Span 3) */}
                    <div className="lg:col-span-3 lg:pl-8">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 opacity-40">
                            Navigation
                        </h4>
                        <div className="flex flex-col gap-3">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Expertise', href: '/expertise' },
                                { name: 'Portfolio', href: '/portfolio' },
                                { name: 'Services', href: '/services' },
                                { name: 'Testimonials', href: '/testimonials' },
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-white/70 hover:text-yellow-accent hover:pl-2 transition-all duration-300 text-[15px]"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* COLUMN 3: CONNECT (Span 4) */}
                    <div className="lg:col-span-4">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 opacity-40">
                            Connect
                        </h4>
                        <div className="flex flex-col gap-5">

                            <a
                                href="mailto:mwendwa.stompy@gmail.com"
                                className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="w-10 h-10 bg-teal-primary/30 rounded-lg flex items-center justify-center group-hover:bg-yellow-accent group-hover:text-teal-dark transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/50 uppercase tracking-wider mb-0.5">Email Me</p>
                                    <p className="text-sm font-medium text-white group-hover:text-yellow-accent transition-colors">mwendwa.stompy@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="https://linkedin.com/in/Stompy-Mwendwa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="w-10 h-10 bg-teal-primary/30 rounded-lg flex items-center justify-center group-hover:bg-yellow-accent group-hover:text-teal-dark transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/50 uppercase tracking-wider mb-0.5">LinkedIn</p>
                                    <p className="text-sm font-medium text-white group-hover:text-yellow-accent transition-colors">Stompy Mwendwa</p>
                                </div>
                            </a>

                        </div>
                    </div>

                </div>

                {/* DIVIDER & COPYRIGHT */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-white/40">
                        © {new Date().getFullYear()} Stompy Mwendwa. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <p className="flex items-center gap-2 text-sm text-white/40">
                            <MapPin className="w-4 h-4" />
                            San Francisco, CA
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
}
