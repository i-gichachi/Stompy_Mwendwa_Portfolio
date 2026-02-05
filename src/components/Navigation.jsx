'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { branding } from '@/data/branding';

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-gray-dark uppercase tracking-wide">
                    {branding.name || "STOMPY MWENDWA"}
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
    );
}
