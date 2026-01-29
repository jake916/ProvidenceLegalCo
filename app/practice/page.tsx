import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ScrollReveal from '@/components/ScrollReveal'
import ScheduleButton from '@/components/ScheduleButton'
import Image from 'next/image'
import Link from 'next/link'

export default function PracticeAreasPage() {
    return (
        <>
            <Navigation />

            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
                    {/* Background Image with Rose Gold Overlay */}
                    <Image
                        src="/assets/view-3d-justice-scales.jpg"
                        alt="Our Practice Areas"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-700/80 via-rose-600/75 to-rose-500/70" />

                    <div className="section-container relative z-10 text-center">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ivory-50 animate-fade-in">
                            Our Practice Areas
                        </h1>
                        <p className="text-xl md:text-2xl text-blush-100 mt-6 max-w-3xl mx-auto">
                            Comprehensive legal services tailored to protect your innovations and structure your growth
                        </p>
                    </div>
                </section>

                {/* Practice Areas Section */}
                <section className="py-24 bg-ivory-300">
                    <div className="section-container">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Intellectual Property Protection */}
                            <ScrollReveal delay={100}>
                                <div className="bg-gradient-to-br from-rose-50 to-blush-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 h-full">
                                    <div className="w-16 h-16 bg-rose-700 rounded-xl flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-rose-700">Intellectual Property Protection & Brand Assets</h3>
                                    <p className="mb-6">
                                        We help clients secure, manage, and enforce the value embedded in their ideas and brands through trademark registration, copyright protection, and IP licensing.
                                    </p>

                                    <Link href="/practice-areas/intellectual-property" className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700 transition-colors duration-200 mt-4">
                                        Learn More
                                        <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </ScrollReveal>

                            {/* Business Structuring */}
                            <ScrollReveal delay={200}>
                                <div className="bg-gradient-to-br from-rose-50 to-blush-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 h-full">
                                    <div className="w-16 h-16 bg-rose-700 rounded-xl flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-rose-700">Business Structuring & Corporate Advisory</h3>
                                    <p className="mb-6">
                                        We support businesses from formation through growth, restructuring, and maturity with company incorporation, shareholder agreements, and investor readiness support.
                                    </p>
                                    <Link href="/practice-areas/business-structuring" className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700 transition-colors duration-200 mt-4">
                                        Learn More
                                        <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </ScrollReveal>

                            {/* Contracts & Commercial Agreements */}
                            <ScrollReveal delay={300}>
                                <div className="bg-gradient-to-br from-rose-50 to-blush-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 h-full">
                                    <div className="w-16 h-16 bg-rose-700 rounded-xl flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-rose-700">Contracts & Commercial Agreements</h3>
                                    <p className="mb-6">
                                        We draft, review, and negotiate contracts that reflect commercial realities while managing risk, including service agreements, NDAs, and bespoke commercial contracts.
                                    </p>
                                    <Link href="/practice-areas/contracts-commercial" className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700 transition-colors duration-200 mt-4">
                                        Learn More
                                        <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </ScrollReveal>

                            {/* Creative & Media Industry */}
                            <ScrollReveal delay={400}>
                                <div className="bg-gradient-to-br from-rose-50 to-blush-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 h-full">
                                    <div className="w-16 h-16 bg-rose-700 rounded-xl flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-rose-700">Creative & Media Industry Legal Support</h3>
                                    <p className="mb-6">
                                        We work closely with creatives, studios, and brands to protect creative rights through production agreements, licensing, and IP ownership structuring.
                                    </p>
                                    <Link href="/practice-areas/creative-media" className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700 transition-colors duration-200 mt-4">
                                        Learn More
                                        <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </ScrollReveal>

                            {/* Regulatory & Compliance */}
                            <ScrollReveal delay={500}>
                                <div className="bg-gradient-to-br from-rose-50 to-blush-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 h-full">
                                    <div className="w-16 h-16 bg-rose-700 rounded-xl flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-rose-700">Regulatory & Compliance Advisory</h3>
                                    <p className="mb-6">
                                        We help clients navigate regulatory requirements with clarity and efficiency, covering corporate compliance, advertising regulations, and risk mitigation strategies.
                                    </p>
                                    <Link href="/practice-areas/regulatory-compliance" className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700 transition-colors duration-200 mt-4">
                                        Learn More
                                        <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </ScrollReveal>

                            {/* Legal Strategy for Growth */}
                            <ScrollReveal delay={600}>
                                <div className="bg-gradient-to-br from-rose-50 to-blush-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 h-full">
                                    <div className="w-16 h-16 bg-rose-700 rounded-xl flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-rose-700">Legal Strategy for Growth & Expansion</h3>
                                    <p className="mb-6">
                                        We act as long-term legal partners with strategic services including legal frameworks for scaling, funding structures, and retainer-based general counsel services.
                                    </p>
                                    <Link href="/practice-areas/legal-strategy" className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700 transition-colors duration-200 mt-4">
                                        Learn More
                                        <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-r from-rose-700 to-rose-600">
                    <div className="section-container text-center">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ivory-50">Ready to Get Started?</h2>
                            <p className="text-blush-100 mb-10 max-w-2xl mx-auto">
                                Contact us today to discuss how we can support your legal needs and help your business thrive.
                            </p>
                            <ScheduleButton variant="inline" />
                        </ScrollReveal>
                    </div>
                </section>
            </main>

            <Footer />
            <BackToTop />
        </>
    )
}
