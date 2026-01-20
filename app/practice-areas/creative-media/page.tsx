import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'

export default function CreativeMediaPage() {
    return (
        <>
            <Navigation />

            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden">
                    <Image
                        src="/assets/hero-2.png"
                        alt="Creative & Media Industry Legal Support"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-700/80 via-rose-600/75 to-rose-500/70" />

                    <div className="section-container relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory-50 animate-fade-in">
                            Creative & Media Industry Legal Support
                        </h1>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="py-16 bg-ivory-300">
                    <div className="section-container">
                        <ScrollReveal>
                            <div className="max-w-4xl mx-auto text-center">
                                <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-6">Legal Support for Creative Excellence</h2>

                                <p className="mb-6">
                                    We work closely with creatives, studios, and brands to protect creative rights and structure successful projects through production agreements, licensing, and IP ownership frameworks.
                                </p>

                                <p>
                                    The creative and media industries require specialized legal expertise that understands both the artistic vision and commercial realities. From content creators to production companies, we provide comprehensive legal support that protects your creative work while enabling successful collaborations.
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
                                        alt="Creative & Media Services"
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
                                            <span><strong>Production, Talent, and Collaboration Agreements:</strong> Drafting comprehensive agreements for film, television, digital content, and creative collaborations that protect all parties' interests and define clear working relationships.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-rose-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span><strong>Licensing, Distribution, and Content Exploitation Agreements:</strong> Structuring deals that maximize the commercial value of your creative content across multiple platforms and territories.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-rose-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span><strong>Brand Partnerships and Sponsorship Contracts:</strong> Negotiating and structuring brand collaborations, endorsement deals, and sponsorship agreements that align with your creative vision and commercial goals.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-rose-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span><strong>IP Ownership Structuring for Films, Animation, and Digital Projects:</strong> Clarifying ownership rights, managing rights transfers, and protecting intellectual property in complex creative collaborations.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-rose-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span><strong>Advisory for Creators, Studios, and Entertainment Businesses:</strong> Providing ongoing legal counsel and strategic guidance to navigate the unique challenges of the creative and entertainment industries.</span>
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
                                <h2 className="text-4xl font-bold text-rose-800 mb-8">Why Choose Providence Legal Co. for Creative & Media Legal Support?</h2>
                                <p className="mb-8">
                                    We understand the unique challenges of the creative and media industries. Our approach combines legal expertise with an appreciation for creative vision, ensuring your projects are legally protected without stifling innovation.
                                </p>
                                <p>
                                    Whether you're an independent creator, a production company, or a media brand, we provide practical legal solutions that protect your creative rights and enable successful collaborations in an evolving digital landscape.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-r from-rose-700 to-rose-600">
                    <div className="section-container text-center">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ivory-50">Ready to Protect Your Creative Work?</h2>
                            <p className="text-xl text-blush-100 mb-10 max-w-2xl mx-auto">
                                Contact us today to discuss how we can support your creative projects and media ventures.
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
