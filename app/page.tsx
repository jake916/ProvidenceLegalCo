import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSlider from '@/components/HeroSlider'
import BackToTop from '@/components/BackToTop'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Navigation />

            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
                    {/* Background Image Slider with Rose Gold Overlay */}
                    <HeroSlider />

                    <div className="section-container relative z-10 text-center py-32">
                        <h1 className="flex flex-col gap-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-none text-ivory-50 animate-fade-in">
                            <span>Protecting What You Create</span>
                            <span>Structuring What You Build</span>
                        </h1>
                        <div className="transform translate-y-36">
                            <p className="text-[30px] md:text-30px lg:text-30px font-serif italic text-blush-100 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                                Faith, Foresight, Excellence
                            </p>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <svg className="w-6 h-6 text-ivory-200" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-24 bg-ivory-300">
                    <div className="section-container">
                        <ScrollReveal>
                            <div className="max-w-4xl mx-auto text-center">
                                <h2 className="text-5xl font-bold mb-8 text-rose-800">Our Story</h2>
                                <div className="space-y-6 text-lg">
                                    <p>
                                        Providence Legal Co. is a modern legal and business advisory firm built on the belief that every great enterprise begins with divine guidance, strategic structure, and unwavering integrity.
                                    </p>
                                    <p>
                                        We serve as trusted partners to innovators, creatives, and businesses providing legal clarity, protecting intellectual property, and helping them structure for sustainable growth and investor readiness.
                                    </p>
                                    <div className="pt-6">
                                        <Link href="/about" className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700 transition-colors duration-200">
                                            Learn More About Us
                                            <svg className="w-5 h-5 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Practice Areas Section */}
                <section id="practice" className="py-24 bg-gradient-to-br from-rose-50 to-blush-50">
                    <div className="section-container">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <h2 className="text-5xl font-bold mb-4 text-rose-800">Our Practice Areas</h2>
                                <p className="text-gray-600 max-w-3xl mx-auto">
                                    Comprehensive legal services tailored to protect your innovations and structure your growth
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Intellectual Property Protection */}
                            <ScrollReveal delay={100}>
                                <div className="bg-gradient-to-br from-rose-50 to-blush-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 h-full">
                                    <h3 className="text-2xl font-bold mb-4 text-rose-700">Intellectual Property Protection & Brand Assets</h3>
                                    <p>
                                        We help clients secure, manage, and enforce the value embedded in their ideas and brands through trademark registration, copyright protection, and IP licensing.
                                    </p>
                                </div>
                            </ScrollReveal>

                            {/* Business Structuring */}
                            <ScrollReveal delay={200}>
                                <div className="bg-gradient-to-br from-rose-50 to-blush-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 h-full">
                                    <h3 className="text-2xl font-bold mb-4 text-rose-700">Business Structuring & Corporate Advisory</h3>
                                    <p>
                                        We support businesses from formation through growth, restructuring, and maturity with company incorporation, shareholder agreements, and investor readiness support.
                                    </p>
                                </div>
                            </ScrollReveal>

                            {/* Contracts & Commercial Agreements */}
                            <ScrollReveal delay={300}>
                                <div className="bg-gradient-to-br from-rose-50 to-blush-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 h-full">
                                    <h3 className="text-2xl font-bold mb-4 text-rose-700">Contracts & Commercial Agreements</h3>
                                    <p>
                                        We draft, review, and negotiate contracts that reflect commercial realities while managing risk, including service agreements, NDAs, and bespoke commercial contracts.
                                    </p>
                                </div>
                            </ScrollReveal>

                            {/* Creative & Media Industry */}
                            <ScrollReveal delay={400}>
                                <div className="bg-gradient-to-br from-rose-50 to-blush-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 h-full">
                                    <h3 className="text-2xl font-bold mb-4 text-rose-700">Creative & Media Industry Legal Support</h3>
                                    <p>
                                        We work closely with creatives, studios, and brands to protect creative rights through production agreements, licensing, and IP ownership structuring.
                                    </p>
                                </div>
                            </ScrollReveal>

                            {/* Regulatory & Compliance */}
                            <ScrollReveal delay={500}>
                                <div className="bg-gradient-to-br from-rose-50 to-blush-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 h-full">
                                    <h3 className="text-2xl font-bold mb-4 text-rose-700">Regulatory & Compliance Advisory</h3>
                                    <p>
                                        We help clients navigate regulatory requirements with clarity and efficiency, covering corporate compliance, advertising regulations, and risk mitigation strategies.
                                    </p>
                                </div>
                            </ScrollReveal>

                            {/* Legal Strategy for Growth */}
                            <ScrollReveal delay={600}>
                                <div className="bg-gradient-to-br from-rose-50 to-blush-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 h-full">
                                    <h3 className="text-2xl font-bold mb-4 text-rose-700">Legal Strategy for Growth & Expansion</h3>
                                    <p>
                                        We act as long-term legal partners with strategic services including legal frameworks for scaling, funding structures, and retainer-based general counsel services.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* View All Practice Areas Button */}
                        <div className="text-center mt-12">
                            <ScrollReveal delay={700}>
                                <a href="/practice" className="btn-primary inline-block">
                                    View All Practice Areas
                                </a>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-24 bg-gradient-to-br from-rose-600 to-rose-700 text-white">
                    <div className="section-container text-center">
                        <ScrollReveal>
                            <h2 className="text-5xl font-bold mb-6 text-ivory-50">Connect with us now</h2>
                            <p className="text-blush-100 mb-10 max-w-2xl mx-auto">
                                Ready to discuss your legal needs? Our team is here to provide expert guidance and representation.
                            </p>

                            {/* Social Media Icons */}
                            <div className="flex gap-6 justify-center">
                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/company/providence-legal-co/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-16 h-16 bg-ivory-200 rounded-full flex items-center justify-center hover:bg-ivory-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="w-8 h-8 text-rose-700" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/providencelegal?igsh=YjlkbDhnaWpod3oz&utm_source=qr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-16 h-16 bg-ivory-200 rounded-full flex items-center justify-center hover:bg-ivory-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-8 h-8 text-rose-700" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>

                                {/* TikTok */}
                                <a
                                    href="https://www.tiktok.com/@providence.legal?_r=1&_t=ZS-93E85V68oWC"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-16 h-16 bg-ivory-200 rounded-full flex items-center justify-center hover:bg-ivory-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                                    aria-label="TikTok"
                                >
                                    <svg className="w-8 h-8 text-rose-700" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                    </svg>
                                </a>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>

            <Footer />
            <BackToTop />
        </>
    )
}
