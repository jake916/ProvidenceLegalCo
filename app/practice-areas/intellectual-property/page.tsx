import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'

export default function IntellectualPropertyPage() {
    return (
        <>
            <Navigation />

            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden">
                    <Image
                        src="/assets/hero-2.png"
                        alt="Intellectual Property Protection"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-700/80 via-rose-600/75 to-rose-500/70" />

                    <div className="section-container relative z-10 text-center">
                        <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-ivory-50 animate-fade-in">
                            Intellectual Property Protection & Brand Assets
                        </h1>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="py-16 bg-ivory-300">
                    <div className="section-container">
                        <ScrollReveal>
                            <div className="max-w-4xl mx-auto text-center">
                                <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-6">Protecting Your Ideas & Brand Value</h2>

                                <p className="mb-6">
                                    We help clients secure, manage, and enforce the value embedded in their ideas and brands through trademark registration, copyright protection, and IP licensing.
                                </p>

                                <p>
                                    Your intellectual property is one of your most valuable assets. Whether you're a startup building a brand, a creative protecting your work, or an established business expanding your portfolio, we provide comprehensive legal support to safeguard your innovations and creative output.
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
                                        src="/assets/still-life-world-intellectual-property-day.jpg"
                                        alt="Intellectual Property Services"
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
                                            <span><strong>Trademark Registration & Protection:</strong> Securing your brand identity through comprehensive trademark searches, applications, and enforcement strategies.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-rose-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span><strong>Copyright & Creative Works:</strong> Protecting original works including literary, artistic, musical, and digital content.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-rose-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span><strong>IP Licensing & Commercialization:</strong> Structuring licensing agreements that maximize the commercial value of your intellectual property.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-rose-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span><strong>Brand Strategy & Portfolio Management:</strong> Developing comprehensive strategies to build and manage your IP portfolio.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-rose-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span><strong>IP Enforcement & Dispute Resolution:</strong> Protecting your rights through cease and desist letters, negotiations, and litigation when necessary.</span>
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
                                <h2 className="text-4xl font-bold text-rose-800 mb-8">Why Choose Providence Legal Co. for IP Protection?</h2>
                                <p className="mb-8">
                                    We understand that your intellectual property represents years of creativity, innovation, and hard work. Our approach combines legal expertise with strategic business insight to ensure your IP assets are not just protected, but positioned for growth.
                                </p>
                                <p>
                                    Whether you're launching a new brand, protecting creative content, or managing a complex IP portfolio, we provide tailored solutions that align with your business objectives and budget.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-r from-rose-700 to-rose-600">
                    <div className="section-container text-center">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ivory-50">Ready to Protect Your Intellectual Property?</h2>
                            <p className="text-blush-100 mb-10 max-w-2xl mx-auto">
                                Contact us today to discuss how we can help safeguard your ideas and brand assets.
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
