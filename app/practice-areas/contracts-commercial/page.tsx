import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'

export default function ContractsCommercialPage() {
    return (
        <>
            <Navigation />

            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden">
                    <Image
                        src="/assets/hero-2.png"
                        alt="Contracts & Commercial Agreements"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-700/80 via-rose-600/75 to-rose-500/70" />

                    <div className="section-container relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory-50 animate-fade-in">
                            Contracts & Commercial Agreements
                        </h1>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="py-16 bg-ivory-300">
                    <div className="section-container">
                        <ScrollReveal>
                            <div className="max-w-4xl mx-auto text-center">
                                <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-6">Contracts That Protect Your Interests</h2>

                                <p className="mb-6">
                                    We draft, review, and negotiate contracts that reflect commercial realities while managing risk, ensuring your business relationships are built on clear, enforceable agreements.
                                </p>

                                <p>
                                    Every business relationship deserves a well-crafted contract. Whether you're entering into service agreements, partnership deals, or complex commercial transactions, we ensure your contracts are comprehensive, balanced, and aligned with your business objectives.
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
                                        src="/assets/hero-1.png"
                                        alt="Contract Services"
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
                                            <span><strong>Service Agreements, Client Contracts, and Vendor Agreements:</strong> Drafting comprehensive agreements that clearly define deliverables, timelines, payment terms, and performance standards for all your business relationships.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-rose-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span><strong>Advertising, Marketing, and Endorsement Contracts:</strong> Structuring agreements for brand partnerships, influencer collaborations, and marketing campaigns that protect your interests and comply with advertising regulations.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-rose-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span><strong>Indemnity Agreements, Guarantees, and Risk-Allocation Clauses:</strong> Crafting provisions that appropriately allocate risk between parties and protect your business from unforeseen liabilities.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-rose-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span><strong>Confidentiality, Non-Compete, and Non-Disclosure Agreements:</strong> Protecting sensitive business information, trade secrets, and competitive advantages through carefully crafted restrictive covenants.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-rose-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span><strong>Bespoke Commercial Contracts Tailored to Your Business Model:</strong> Creating customized agreements for unique business arrangements that reflect your specific needs and commercial objectives.</span>
                                        </li>
                                    </ul>

                                    <div className="pt-8">
                                        <a href="#contact" className="btn-primary inline-block">
                                            Schedule a Consultation
                                        </a>
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
                                <h2 className="text-4xl font-bold text-rose-800 mb-8">Why Choose Providence Legal Co. for Contract Services?</h2>
                                <p className="mb-8">
                                    We believe that great contracts are more than legal documents—they're tools for building successful business relationships. Our approach balances legal protection with commercial practicality, creating agreements that work in the real world.
                                </p>
                                <p>
                                    Whether you need a simple NDA or a complex multi-party agreement, we deliver clear, enforceable contracts that protect your interests while facilitating smooth business operations.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-r from-rose-700 to-rose-600">
                    <div className="section-container text-center">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ivory-50">Ready to Secure Your Business Agreements?</h2>
                            <p className="text-blush-100 mb-10 max-w-2xl mx-auto">
                                Contact us today to discuss your contract needs and protect your business relationships.
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
        </>
    )
}
