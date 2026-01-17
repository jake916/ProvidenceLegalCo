import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-rose-800 text-ivory-100">
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
                        <p className="text-ivory-200 mb-4 leading-relaxed">
                            Expert legal representation you can trust. Serving individuals and businesses with dedication and excellence.
                        </p>
                        <p className="text-ivory-200 text-sm">
                            Faith, Foresight, Excellence
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-ivory-50 mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#about" className="text-ivory-200 hover:text-blush-300 transition-colors duration-200">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#practice" className="text-ivory-200 hover:text-blush-300 transition-colors duration-200">
                                    Practice Areas
                                </Link>
                            </li>
                            <li>
                                <Link href="#faq" className="text-ivory-200 hover:text-blush-300 transition-colors duration-200">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="#join" className="text-ivory-200 hover:text-blush-300 transition-colors duration-200">
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
                                <Link href="#contact" className="btn-secondary inline-block">
                                    Get in Touch
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-rose-700 mt-8 pt-8 text-center text-sm">
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
