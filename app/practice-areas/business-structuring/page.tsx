'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ScrollReveal from '@/components/ScrollReveal'
import SchedulingModal from '@/components/SchedulingModal'
import Image from 'next/image'

export default function BusinessStructuringPage() {
    const [isSchedulingOpen, setIsSchedulingOpen] = useState(false)

    return (
        <>
            <Navigation />

            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden">
                    <Image
                        src="/assets/hero-2.png"
                        alt="Business Structuring & Corporate Advisory"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-700/80 via-rose-600/75 to-rose-500/70" />

                    <div className="section-container relative z-10 text-center">
                        <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-ivory-50 animate-fade-in">
                            Business Structuring & Corporate Advisory
                        </h1>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="py-16 bg-ivory-300">
                    <div className="section-container">
                        <ScrollReveal>
                            <div className="max-w-4xl mx-auto text-center">
                                <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-6">Building Strong Foundations for Your Business</h2>

                                <p className="mb-6">
                                    We support businesses from formation through growth, restructuring, and maturity with comprehensive corporate advisory services that align with your strategic objectives.
                                </p>

                                <p>
                                    Whether you're launching a startup, scaling operations, or preparing for investment, we provide the legal infrastructure and strategic guidance to ensure your business is structured for success and positioned for sustainable growth.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Services Detail Section - Two Columns */}
                <section className="py-24 bg-ivory-300">
                    <div className="section-container">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Image - Left */}
                            <ScrollReveal>
                                <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/assets/female-lawyer-desk-with-scales-justice.jpg"
                                        alt="Business Structuring Services"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </ScrollReveal>

                            {/* Services List - Right */}
                            <ScrollReveal delay={200}>
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-bold text-rose-700 mb-6">Our Services Include:</h3>
                                    <ul className="space-y-4 text-gray-700">
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-rose-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span><strong>Company Incorporation and Post-Incorporation Compliance:</strong> Guiding you through entity formation, registration processes, and ongoing compliance requirements to keep your business in good standing.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-rose-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span><strong>Corporate Restructuring and Reorganization:</strong> Supporting strategic changes in ownership, structure, or operations to adapt to evolving business needs and market conditions.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-rose-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span><strong>Shareholder Agreements, Founders' Agreements, and Joint Ventures:</strong> Drafting comprehensive agreements that protect stakeholder interests, define roles and responsibilities, and prevent future disputes.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-rose-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span><strong>Director and Shareholder Changes, Exits, and Governance Matters:</strong> Managing transitions in leadership and ownership, including director appointments, shareholder exits, and corporate governance frameworks.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-rose-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span><strong>Investor Readiness, Cap Table Structuring, and Due Diligence Support:</strong> Preparing your business for investment rounds with proper documentation, cap table management, and comprehensive due diligence support.</span>
                                        </li>
                                    </ul>

                                    <div className="pt-8">
                                        <button onClick={() => setIsSchedulingOpen(true)} className="btn-primary">
                                            Schedule a Consultation
                                        </button>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-24 bg-gradient-to-br from-rose-50 to-blush-50">
                    <div className="section-container">
                        <ScrollReveal>
                            <div className="max-w-4xl mx-auto text-center">
                                <h2 className="text-4xl font-bold text-rose-800 mb-8">Why Choose Providence Legal Co. for Business Structuring?</h2>
                                <p className="mb-8">
                                    We understand that the right business structure is foundational to long-term success. Our approach combines legal expertise with commercial insight to create structures that not only comply with regulations but also support your strategic vision and growth trajectory.
                                </p>
                                <p>
                                    From startups to established enterprises, we provide tailored solutions that balance flexibility with protection, ensuring your business is built on solid legal foundations that can scale with your ambitions.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-r from-rose-700 to-rose-600">
                    <div className="section-container text-center">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ivory-50">Ready to Structure Your Business for Success?</h2>
                            <p className="text-blush-100 mb-10 max-w-2xl mx-auto">
                                Contact us today to discuss how we can help build the legal foundation for your business growth.
                            </p>
                            <a href="/contact" className="btn-secondary inline-block">
                                Get Started
                            </a>
                        </ScrollReveal>
                    </div>
                </section>
            </main>

            <Footer />
            <BackToTop />
            <SchedulingModal isOpen={isSchedulingOpen} onClose={() => setIsSchedulingOpen(false)} />
        </>
    )
}
