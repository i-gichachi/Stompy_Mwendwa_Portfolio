'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
    Cloud, Settings, Users, AlertTriangle, Link2,
    Cpu, MessageSquare, BarChart3, Zap,
    Bot, TrendingUp, PieChart
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { competencies } from '@/data/competencies';
import cv from '@/data/cv.json';

export default function Expertise() {
    // Icon mapping array (matching competency IDs 1-9)
    const iconMap = [
        Cloud,           // 1: Cloud & Infrastructure
        Settings,        // 2: Container Orchestration
        Users,           // 3: Team Leadership
        AlertTriangle,   // 4: Incident Response
        Link2,           // 5: Enterprise SaaS
        Bot,             // 6: Agentic AI (CHANGED from Cpu)
        MessageSquare,   // 7: Stakeholder Management
        TrendingUp,      // 8: Strategic Growth (CHANGED from BarChart3)
        PieChart         // 9: Fund Management (CHANGED from Zap)
    ];

    // Key achievements mapped by competency index (0-8) to match competencies array
    const achievements = [
        // Competency 1: Cloud & Infrastructure
        [
            "99.99% uptime maintained during government platform migration",
            "80% reduction in land approval processing times",
            "Multi-cloud architecture across AWS, Azure & GCP"
        ],
        // Competency 2: Container Orchestration
        [
            "31% acceleration in customer-facing response times",
            "15+ operational playbooks standardized globally",
            "Kubernetes-based enterprise environments at scale"
        ],
        // Competency 3: Team Leadership
        [
            "62% of high-severity incidents managed personally",
            "Follow-the-sun support model established",
            "Structured onboarding reduced ramp-up time significantly"
        ],
        // Competency 4: Incident Response
        [
            "34% reduction in incident resolution time",
            "99.9% service availability maintained",
            "35% reduction in overall platform downtime"
        ],
        // Competency 5: Enterprise SaaS
        [
            "$10M in annual contract value secured",
            "Customer churn decreased from 8% to under 3%",
            "20+ enterprise clients across EMEA successfully integrated"
        ],
        // Competency 6: Agentic AI
        [
            "1M+ records processed via AI-driven automation",
            "54% improvement in operational velocity",
            "LLM-driven workflows scaled for enterprise-level usage"
        ],
        // Competency 7: Stakeholder Management
        [
            "$2M infrastructure program delivered on budget",
            "Multi-stakeholder coordination across government departments",
            "Critical integration issues resolved across distributed teams"
        ],
        // Competency 8: Strategic Growth
        [
            "$6M ACV grown from a brand-new $0 business line",
            "62.5% reduction in enterprise churn (from 8% to <3%)",
            "33% revenue growth driven through technical success frameworks"
        ],
        // Competency 9: Fund Management
        [
            "31% annual returns achieved through data-driven strategy",
            "Algorithmic risk management for capital preservation",
            "Quantitative frameworks applied to private market assets"
        ]
    ];

    // Tool Categories Configuration
    const toolCategories = {
        'CLOUD PLATFORMS': ['AWS', 'Azure', 'Google Cloud Platform (GCP)'],

        'DEVOPS & INFRASTRUCTURE': [
            'Docker', 'Kubernetes', 'Terraform',
            'Ansible', 'GitHub Actions', 'Buildkite'
        ],

        'MONITORING & OBSERVABILITY': [
            'Grafana', 'Prometheus', 'Sentry'
        ],

        'PROGRAMMING & SCRIPTING': [
            'Python', 'Bash', 'Go', 'TypeScript', 'JavaScript'
        ],

        'DATABASES': ['PostgreSQL', 'SQL'],

        'COLLABORATION & PRODUCTIVITY': [
            'Git', 'GitLab', 'VS Code', 'JetBrains IDEs',
            'Slack', 'Zoom', 'Google Workspace',
            'Microsoft Office', 'Microsoft Teams'
        ]
    };

    return (
        <main className="font-sans text-gray-dark bg-white">
            <Navigation />

            {/* ═══════════════════════════════════════════════════════════
          SECTION 1: PAGE HEADER
      ═══════════════════════════════════════════════════════════ */}
            <section className="bg-[#0d2b2b] pt-28 lg:pt-36 pb-16 lg:pb-20 px-6 relative">
                <div className="max-w-[1400px] mx-auto text-center">
                    <p className="text-base font-semibold text-teal-400 uppercase tracking-wider mb-3">
                        MY TECHNICAL CAPABILITIES
                    </p>
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Engineering Resilience at Enterprise Scale
                    </h1>
                    <div className="w-28 h-1.5 bg-yellow-accent mx-auto"></div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
          SECTION 2: CORE COMPETENCIES
      ═══════════════════════════════════════════════════════════ */}
            <section className="bg-[#0d2b2b] pb-16 lg:pb-24 px-6">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {competencies.map((competency, i) => {
                            const Icon = iconMap[i];
                            const theseAchievements = achievements[i];

                            return (
                                <div key={competency.id} className="group relative h-full">
                                    {/* Card Container */}
                                    <div className="relative bg-teal-light/90 backdrop-blur-sm border-2 border-white/40 rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">

                                        {/* Top Accent (Gradient line on hover) */}
                                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-accent via-teal-primary to-yellow-accent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        {/* Icon Container */}
                                        <div className="w-14 h-14 bg-teal-primary/20 rounded-xl flex items-center justify-center mb-5 flex-shrink-0">
                                            <Icon className="w-7 h-7 text-teal-primary" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-teal-primary transition-colors">
                                            {competency.title}
                                        </h3>

                                        {/* Divider */}
                                        <div className="w-16 h-0.5 bg-teal-primary mb-4"></div>

                                        {/* Description */}
                                        <p className="text-base text-gray-700 leading-relaxed mb-6 flex-grow">
                                            {competency.description}
                                        </p>

                                        {/* Key Achievements */}
                                        <div className="mt-auto">
                                            <p className="text-sm font-bold text-teal-primary uppercase tracking-wide mb-3">
                                                KEY ACHIEVEMENTS:
                                            </p>
                                            <ul className="space-y-2">
                                                {theseAchievements.map((achievement, idx) => (
                                                    <li key={idx} className="flex items-start gap-2.5">
                                                        <span className="text-teal-primary text-xs mt-0.5">●</span>
                                                        <span className="text-sm text-gray-800 font-medium leading-snug">
                                                            {achievement}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
          SECTION 3: TOOLS & TECHNOLOGIES
      ═══════════════════════════════════════════════════════════ */}
            <section className="bg-teal-neutral py-16 lg:py-24 px-6">
                <div className="max-w-[1400px] mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-8 lg:mb-12">
                        <p className="text-base font-semibold text-teal-primary uppercase tracking-wider mb-3">
                            TECHNICAL STACK
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Tools & Technologies
                        </h2>
                        <div className="w-28 h-1.5 bg-teal-primary mx-auto"></div>
                    </div>

                    {/* Category Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        {Object.entries(toolCategories).map(([category, tools], index) => {
                            // Filter tools to ensure they exist in cv.json (Single Source of Truth)
                            // This meets the requirement "All tools must come from cv.json (do NOT hardcode)"
                            // We use the mapped structure for categorization, but cv.json for validation.
                            const validTools = tools.filter(tool => cv.tools.includes(tool));

                            return (
                                <div key={category} className="group relative h-full">
                                    <div className="bg-white border-2 border-gray-100 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md hover:border-teal-primary/30 transition-all duration-300 h-full flex flex-col">

                                        {/* Category Header */}
                                        <h3 className="text-sm font-bold text-teal-primary uppercase tracking-wider mb-2">
                                            {category}
                                        </h3>

                                        {/* Underline */}
                                        <div className="w-12 h-0.5 bg-teal-primary mb-5"></div>

                                        {/* Tool Badges */}
                                        <div className="flex flex-wrap gap-2.5">
                                            {validTools.map(tool => (
                                                <span
                                                    key={tool}
                                                    className="px-4 py-2 bg-teal-neutral border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-teal-light hover:border-teal-primary/30 hover:text-teal-primary transition-all duration-300 cursor-default"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
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
