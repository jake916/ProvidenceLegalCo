'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ScrollReveal from '@/components/ScrollReveal'
import SchedulingModal from '@/components/SchedulingModal'
import Image from 'next/image'

export default function RegulatoryCompliancePage() {
    const [isSchedulingOpen, setIsSchedulingOpen] = useState(false)

    return (
        <>
            <Navigation />

            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden">
                    <Image
                        src="/assets/hero-2.png"
                        alt="Regulatory & Compliance Advisory"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-700/80 via-rose-600/75 to-rose-500/70" />

                    <div className="section-container relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory-50 animate-fade-in">
                            Regulatory & Compliance Advisory
                        </h1>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="py-16 bg-ivory-300">
                    <div className="section-container">
                        <ScrollReveal>
                            <div className="max-w-4xl mx-auto text-center">
                                <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-6">Navigate Regulations with Confidence</h2>

                                <p className="mb-6">
                                    We help clients navigate regulatory requirements with clarity and efficiency, covering corporate compliance, advertising regulations, and comprehensive risk mitigation strategies.
                                </p>

                                <p>
                                    In an increasingly regulated business environment, compliance is not just about avoiding penalties—it's about building trust and operating with integrity. We provide proactive compliance solutions that protect your business while enabling growth and innovation.
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
                                        src="/assets/office-worker-using-finance-graphs.jpg"
                                        alt="Regulatory & Compliance Services"
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
                                            <span><strong>Corporate and Statutory Compliance Advisory:</strong> Developing and implementing comprehensive compliance frameworks tailored to your industry, ensuring you meet all corporate and statutory obligations.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-rose-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span><strong>Advertising and Marketing Regulatory Compliance:</strong> Reviewing marketing materials, claims, and campaigns to ensure compliance with advertising standards and consumer protection laws.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-rose-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span><strong>Business Name and Entity Approvals:</strong> Guiding you through the process of securing business name registrations, entity approvals, and related regulatory clearances.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-rose-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span><strong>Ongoing Compliance Support for Growing Businesses:</strong> Providing continuous compliance monitoring and support as your business scales, ensuring you stay compliant at every stage of growth.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-rose-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span><strong>Risk Identification and Mitigation Strategies:</strong> Conducting compliance audits, identifying regulatory risks, and implementing proactive strategies to minimize exposure and protect your business.</span>
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
                                <h2 className="text-4xl font-bold text-rose-800 mb-8">Why Choose Providence Legal Co. for Regulatory & Compliance?</h2>
                                <p className="mb-8">
                                    We believe compliance should be practical, not burdensome. Our approach focuses on creating compliance frameworks that are proportionate to your business size and risk profile, ensuring you meet regulatory obligations without unnecessary complexity.
                                </p>
                                <p>
                                    From startups navigating their first regulatory requirements to established businesses managing complex compliance programs, we provide clear guidance and actionable solutions that protect your business and build stakeholder confidence.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-r from-rose-700 to-rose-600">
                    <div className="section-container text-center">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ivory-50">Ready to Strengthen Your Compliance?</h2>
                            <p className="text-xl text-blush-100 mb-10 max-w-2xl mx-auto">
                                Contact us today to discuss how we can help you navigate regulatory requirements with confidence.
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
