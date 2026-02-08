'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ScrollReveal from '@/components/ScrollReveal'
import ScheduleButton from '@/components/ScheduleButton'
import Image from 'next/image'

export default function ContactPage() {
    return (
        <>
            <Navigation />

            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden">
                    <Image
                        src="/assets/hero-2.png"
                        alt="Contact Us"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-700/80 via-rose-600/75 to-rose-500/70" />

                    <div className="section-container relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory-50 animate-fade-in">
                            Contact Us
                        </h1>
                        <p className="text-xl md:text-2xl text-blush-100 mt-6 max-w-3xl mx-auto">
                            Let's discuss how we can support your legal needs
                        </p>
                    </div>
                </section>

                {/* Contact Information Section */}
                <section className="py-24 bg-ivory-300">
                    <div className="section-container">
                        <ScrollReveal>
                            <div className="max-w-4xl mx-auto text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-6">
                                    Get in Touch
                                </h2>
                                <p className="text-gray-600">
                                    We're here to answer your questions and discuss how we can help your business thrive.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                            {/* Contact Details */}
                            <ScrollReveal delay={200}>
                                <div className="space-y-8">
                                    {/* Email */}
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-600 to-rose-700 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-semibold text-rose-800 mb-2">Email</h3>
                                            <a href="mailto:info@providencelegal.co" className="text-gray-700 hover:text-rose-600 transition-colors duration-200">
                                                info@providencelegal.co
                                            </a>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-600 to-rose-700 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-semibold text-rose-800 mb-2">Phone</h3>
                                            <a href="tel:+2348023774018" className="text-gray-700 hover:text-rose-600 transition-colors duration-200">
                                                +234 802 377 4018
                                            </a>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-600 to-rose-700 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-semibold text-rose-800 mb-2">Office Address</h3>
                                            <p className="text-gray-700">
                                                A7, South Lake Homes - Phase 1<br />
                                                Ugochukwu Orji Street, Lekki<br />
                                                Lagos, Nigeria
                                            </p>
                                        </div>
                                    </div>

                                    {/* Business Hours */}
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-600 to-rose-700 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-semibold text-rose-800 mb-2">Business Hours</h3>
                                            <p className="text-gray-700">
                                                Monday - Friday: 9:00 AM - 5:00 PM<br />
                                                Saturday - Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Social Media & Additional Info */}
                            <ScrollReveal delay={400}>
                                <div className="bg-gradient-to-br from-rose-50 to-blush-50 rounded-2xl p-8 shadow-lg">
                                    <h3 className="text-2xl font-bold text-rose-800 mb-6">Connect With Us</h3>

                                    <p className="text-gray-700 mb-8 leading-relaxed">
                                        Follow us on social media for legal insights, industry updates, and firm news.
                                    </p>

                                    {/* Social Media Links */}
                                    <div className="space-y-4 mb-8">
                                        <a href="https://www.linkedin.com/company/providence-legal-co/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-rose-600 transition-colors duration-200">
                                            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                            LinkedIn
                                        </a>
                                        <a href="https://www.instagram.com/providencelegal?igsh=YjlkbDhnaWpod3oz&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-rose-600 transition-colors duration-200">
                                            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                            Instagram
                                        </a>
                                        <a href="https://www.tiktok.com/@providence.legal?_r=1&_t=ZS-93E85V68oWC" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-rose-600 transition-colors duration-200">
                                            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                            </svg>
                                            TikTok
                                        </a>
                                    </div>

                                    <div className="pt-6 border-t border-rose-200">
                                        <p className="text-sm text-gray-600">
                                            For urgent matters, please call our office directly during business hours.
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-r from-rose-700 to-rose-600">
                    <div className="section-container text-center">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ivory-50">Schedule a Consultation</h2>
                            <p className="text-xl text-blush-100 mb-10 max-w-2xl mx-auto">
                                Ready to discuss your legal needs? Reach out to us today and let's start the conversation.
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
