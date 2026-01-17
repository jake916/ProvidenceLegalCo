import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'

export default function AboutPage() {
    return (
        <>
            <Navigation />

            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
                    {/* Background Image with Rose Gold Overlay */}
                    <Image
                        src="/assets/about-hero.png"
                        alt="About Providence Legal Co"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-700/80 via-rose-600/75 to-rose-500/70" />

                    <div className="section-container relative z-10 text-center">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ivory-50 animate-fade-in">
                            About Us
                        </h1>
                    </div>
                </section>

                {/* About Providence Legal Co Section */}
                <section className="py-24 bg-ivory-300">
                    <div className="section-container">
                        <ScrollReveal>
                            <div className="max-w-5xl mx-auto">
                                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-rose-800 text-center">About Providence Legal Co.</h2>

                                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                    <p>
                                        Providence Legal Co. was founded on a simple but powerful conviction: that every vision flourishes best when guided with intention, wisdom, and sound counsel. The name Providence reflects our belief in direction beyond chance, where foresight, structure, and purpose work together to create lasting impact.
                                    </p>

                                    <p>
                                        We are a modern law firm providing strategic legal support to businesses, brands, and creative ventures at every stage of growth. Our work sits at the intersection of legal expertise and practical insight, helping our clients navigate complexity while building with confidence.
                                    </p>

                                    <p>
                                        At Providence, we look beyond surface-level compliance. We focus on stewardship, ensuring that ideas, intellectual property, relationships, and resources are protected, structured, and positioned for sustainability. Whether advising startups, established companies, or creative projects, we take a forward-looking approach that anticipates risk, supports growth, and enables scale.
                                    </p>

                                    <p>
                                        Our practice is rooted in clarity, integrity, and precision. We believe the law should be an enabler, not an obstacle. That is why we translate legal frameworks into practical solutions, offering guidance that is both commercially aware and tailored to the realities of our clients' industries and environments.
                                    </p>

                                    <p>
                                        Above all, Providence Legal Co. exists to partner with visionaries, founders, creatives, and business leaders who are building with purpose and thinking long-term. We do not merely protect what exists; we help prepare what is coming.
                                    </p>

                                    <p className="text-xl font-semibold text-rose-700 pt-6 text-center">
                                        At Providence Legal Co., the law is more than compliance.<br />
                                        It is structure with intention, protection with foresight, and purpose put into action.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-24 bg-gradient-to-br from-rose-50 to-blush-50">
                    <div className="section-container">
                        <ScrollReveal>
                            <div className="max-w-5xl mx-auto">
                                <h3 className="text-4xl md:text-5xl font-bold mb-12 text-rose-800 text-center">Brand Story</h3>

                                <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                                    <p>
                                        Providence Legal Co. is a modern legal and business advisory firm built on the belief that every great enterprise begins with divine guidance, strategic structure, and unwavering integrity.
                                    </p>

                                    <p>
                                        We serve as trusted partners to innovators, creatives, and businesses — providing legal clarity, protecting intellectual property, and helping them structure for sustainable growth and investor readiness.
                                    </p>


                                    <div className="space-y-6">
                                        <p>
                                            We combine sound legal expertise with foresight — ensuring that businesses, brands, and creative projects are not only protected today but also prepared for tomorrow.
                                        </p>

                                        <p className="text-xl font-semibold text-rose-700 pt-4">
                                            At Providence Legal Co., we see law as more than compliance — it's stewardship, structure, and purpose in action.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* About Our Founder Section */}
                <section className="py-24 bg-ivory-300">
                    <div className="section-container">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-rose-800 text-center">About Our Founder</h2>
                        </ScrollReveal>

                        <div className="max-w-6xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                {/* Text Content - Left */}
                                <ScrollReveal delay={100}>
                                    <div className="space-y-6">
                                        <h3 className="text-3xl font-bold text-rose-700">Leading with Vision & Integrity</h3>

                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            Our founder brings a unique blend of legal expertise, business acumen, and a deep commitment to serving clients with excellence. With years of experience navigating complex legal landscapes, they established Providence Legal Co. to provide more than just legal services — to offer true partnership and strategic guidance.
                                        </p>

                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            Driven by a passion for empowering businesses and creatives, our founder believes in the transformative power of sound legal counsel combined with forward-thinking strategy. Their approach is rooted in understanding each client's unique vision and helping them build sustainable, legally sound foundations for growth.
                                        </p>

                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            Beyond legal practice, they are committed to mentorship, community development, and creating opportunities for the next generation of legal professionals and entrepreneurs.
                                        </p>

                                        <div className="pt-4">
                                            <p className="text-xl font-semibold text-rose-700">
                                                "Every great vision deserves protection, structure, and purpose."
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Image - Right */}
                                <ScrollReveal delay={200}>
                                    <div className="relative h-[800px] rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            src="/assets/WhatsApp Image 2026-01-12 at 14.05.40.jpeg"
                                            alt="Founder of Providence Legal Co"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <BackToTop />
        </>
    )
}
