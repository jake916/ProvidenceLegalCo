import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'

export default function JoinUsPage() {
    return (
        <>
            <Navigation />

            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
                    <Image
                        src="/assets/hero-1.png"
                        alt="Join Our Team"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-700/80 via-rose-600/75 to-rose-500/70" />

                    <div className="section-container relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory-50 animate-fade-in">
                            Join Us
                        </h1>
                        <p className="text-xl md:text-2xl text-blush-100 mt-6 max-w-3xl mx-auto">
                            Build a career defined by purpose, precision, and perspective
                        </p>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="py-16 bg-ivory-300">
                    <div className="section-container">
                        <ScrollReveal>
                            <div className="max-w-4xl mx-auto">
                                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                    At Providence Legal Co., we are building more than a law firm, we are building a practice grounded in clarity, integrity, and long-term thinking. Our work supports businesses, brands, and creative ventures that value structure, foresight, and purposeful growth.
                                </p>
                                <p className="text-xl text-gray-700 leading-relaxed">
                                    We are looking for lawyers and professionals who approach the law with both rigor and perspective, people who understand that good legal work goes beyond technical accuracy to include judgment, commercial awareness, and responsibility.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-24 bg-gradient-to-br from-rose-50 to-blush-50">
                    <div className="section-container">
                        <ScrollReveal>
                            <div className="max-w-4xl mx-auto text-center">
                                <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-8">Our Mission</h2>
                                <p className="text-xl text-gray-700 leading-relaxed">
                                    Our mission is to provide strategic legal counsel that protects ideas, strengthens businesses, and enables sustainable growth. We believe the law should be practical, forward-looking, and used as a tool to create lasting value.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Working at Providence Section */}
                <section className="py-24 bg-ivory-300">
                    <div className="section-container">
                        <div className="max-w-4xl mx-auto">
                            <ScrollReveal>
                                <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-12 text-center">
                                    Working at Providence
                                </h2>
                            </ScrollReveal>

                            <ScrollReveal delay={200}>
                                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                    At Providence Legal Co., you will:
                                </p>

                                <ul className="space-y-6 mb-12">
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-rose-600 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-lg text-gray-700 leading-relaxed">
                                            Work on meaningful matters across corporate, intellectual property, and creative industries
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-rose-600 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-lg text-gray-700 leading-relaxed">
                                            Engage closely with clients and take ownership of your work
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-rose-600 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-lg text-gray-700 leading-relaxed">
                                            Be encouraged to think critically, act ethically, and advise with intention
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-rose-600 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-lg text-gray-700 leading-relaxed">
                                            Grow within a firm that values excellence, clarity, and professional development
                                        </span>
                                    </li>
                                </ul>

                                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                    We value people who are disciplined, thoughtful, and committed to doing the work well without noise or excess.
                                </p>

                                <p className="text-xl text-gray-700 leading-relaxed">
                                    If you are interested in building a career defined by purpose, precision, and perspective, we would be glad to hear from you.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-r from-rose-700 to-rose-600">
                    <div className="section-container text-center">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ivory-50">Ready to Join Our Team?</h2>
                            <p className="text-xl text-blush-100 mb-10 max-w-2xl mx-auto">
                                We're always looking for talented professionals who share our values and commitment to excellence.
                            </p>
                            <a href="/contact" className="btn-secondary inline-block">
                                Get in Touch
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
