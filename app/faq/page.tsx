import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'
import Image from 'next/image'

const faqs = [
    {
        question: "Who do you work with?",
        answer: "We advise founders, creatives, brands, and growing businesses across various industries at different stages of growth."
    },
    {
        question: "What areas of law do you focus on?",
        answer: "Our work centres on intellectual property, contracts, commercial advisory, and regulatory compliance."
    },
    {
        question: "Do you work with startups and creatives?",
        answer: "Yes. We regularly support startups, content creators, studios, and brand-led businesses navigating growth and risk."
    },
    {
        question: "Do I need to be registered before engaging you?",
        answer: "Not necessarily. We advise clients both pre- and post-incorporation."
    },
    {
        question: "How do you charge for your services?",
        answer: "Fees are structured based on the scope of work. We offer fixed-fee engagements, retainers, and project-based billing where appropriate."
    },
    {
        question: "Can you help protect my brand or IP?",
        answer: "Yes. We assist with IP protection, licensing, enforcement, and strategic use of intellectual property."
    },
    {
        question: "Do you review or draft contracts?",
        answer: "Absolutely. We draft, review, and negotiate commercial agreements tailored to your business needs."
    },
    {
        question: "Do you work with clients outside Nigeria?",
        answer: "Yes. We work with local and international clients and collaborate across jurisdictions when required."
    },
    {
        question: "How do I get started?",
        answer: "Book a consultation to discuss your business, goals, and legal priorities."
    }
]

export default function FAQPage() {
    return (
        <>
            <Navigation />

            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden">
                    <Image
                        src="/assets/research-literature-information-dictionary-background.jpg"
                        alt="Frequently Asked Questions"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-700/80 via-rose-600/75 to-rose-500/70" />

                    <div className="section-container relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory-50 animate-fade-in">
                            Frequently Asked Questions
                        </h1>
                        <p className=" text-blush-100 mt-6 max-w-3xl mx-auto">
                            Find answers to common questions about our services and how we can help your business
                        </p>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-ivory-300">
                    <div className="section-container">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-6">
                                    Common Questions
                                </h2>
                                <p className=" text-gray-600 max-w-3xl mx-auto">
                                    Have a question that's not answered here? Feel free to reach out to us directly.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <FAQAccordion faqs={faqs} />
                        </ScrollReveal>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-r from-rose-700 to-rose-600">
                    <div className="section-container text-center">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ivory-50">Still Have Questions?</h2>
                            <p className="text-blush-100 mb-10 max-w-2xl mx-auto">
                                We're here to help. Contact us today to discuss your specific legal needs.
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
