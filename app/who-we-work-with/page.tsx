import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'

export default function WhoWeWorkWithPage() {
    const clients = [
        {
            title: "Founders & Startups",
            description: "shaping new ideas into viable businesses"
        },
        {
            title: "Growing Businesses & SMEs",
            description: "ready to scale with clarity and structure"
        },
        {
            title: "Creatives & Creative Entrepreneurs",
            description: "protecting ideas, rights, and value"
        },
        {
            title: "Studios, Media & Production Companies",
            description: "managing content, talent, and IP"
        },
        {
            title: "Brands & Marketing-Led Businesses",
            description: "navigating contracts and compliance"
        },
        {
            title: "Investors & Business Partners",
            description: "structuring deals and managing risk"
        }
    ]

    return (
        <>
            <Navigation />

            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
                    <Image
                        src="/assets/hero-3.png"
                        alt="Who We Work With"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-700/80 via-rose-600/75 to-rose-500/70" />

                    <div className="section-container relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory-50 animate-fade-in">
                            Who We Work With
                        </h1>
                        <p className="text-xl md:text-2xl text-blush-100 mt-6 max-w-3xl mx-auto">
                            We partner with people and organisations building with vision and intent
                        </p>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="py-16 bg-ivory-300">
                    <div className="section-container">
                        <ScrollReveal>
                            <div className="max-w-4xl mx-auto text-center">
                                <p>
                                    We partner with people and organisations building with vision and intent.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Client Types Grid */}
                <section className="py-24 bg-gradient-to-br from-rose-50 to-blush-50">
                    <div className="section-container">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {clients.map((client, index) => (
                                <ScrollReveal key={index} delay={index * 100}>
                                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 h-full">
                                        <div className="flex items-start mb-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-600 to-rose-700 rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-rose-800 mb-3">
                                            {client.title}
                                        </h3>
                                        <p>
                                            {client.description}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-r from-rose-700 to-rose-600">
                    <div className="section-container text-center">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ivory-50">Ready to Work Together?</h2>
                            <p className="text-xl text-blush-100 mb-10 max-w-2xl mx-auto">
                                If you're building something meaningful and need strategic legal support, we'd love to hear from you.
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
