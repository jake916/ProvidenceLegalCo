import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-rose-800 text-ivory-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <Image
                    src="/assets/pattt.jpg"
                    alt="Pattern"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="section-container py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Firm Info */}
                    <div className="md:col-span-2">
                        <div className="mb-4">
                            <Image
                                src="/assets/logo.png"
                                alt="Providence Legal Co."
                                width={200}
                                height={67}
                                className="h-14 w-auto"
                            />
                        </div>
                        <p className="text-ivory-200 mb-4">
                            Expert legal representation you can trust. Serving individuals and businesses with dedication and excellence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-ivory-50 mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-ivory-200 hover:text-blush-300 transition-colors duration-200">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/practice" className="text-ivory-200 hover:text-blush-300 transition-colors duration-200">
                                    Practice Areas
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-ivory-200 hover:text-blush-300 transition-colors duration-200">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/join-us" className="text-ivory-200 hover:text-blush-300 transition-colors duration-200">
                                    Join Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold text-ivory-50 mb-4">Contact</h4>
                        <ul className="space-y-2 text-ivory-200">
                            <li>Email: info@providencelegal.co</li>
                            <li>Phone: +234 802 377 4018</li>
                            <li className="pt-4">
                                <Link href="/contact" className="btn-secondary inline-block">
                                    Get in Touch
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Legal Disclaimer */}
                <div className="border-t border-rose-700 mt-12 pt-8 text-center">
                    <p className="text-xs text-ivory-300 max-w-4xl mx-auto leading-relaxed mb-8">
                        "The information found on this website is for general informational and educational purposes only. The information on this website is not intended as legal advice or a solicitation of clients, nor does it create an attorney-client relationship between the reader and our law firm. Professional legal counsel should be sought for specific advice relevant to your circumstances. Do not send any confidential information to our firm until an attorney-client relationship has been established."
                    </p>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-rose-700 pt-8 text-center text-sm">
                    <p className="text-ivory-200">
                        &copy; {currentYear} Providence Legal Co. Built By{' '}
                        <a
                            href="https://khrien.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ivory-200 hover:text-blush-300 transition-colors duration-200 underline"
                        >
                            Khrien
                        </a>
                        . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
