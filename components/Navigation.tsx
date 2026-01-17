'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    const navLinks = [
        { name: 'Home', href: '/' },
        {
            name: 'About',
            href: '/about',
            submenu: [
                { name: 'Who We Work With', href: '/who-we-work-with' }
            ]
        },
        { name: 'Our Practice Areas', href: '/practice' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Join Us', href: '/join-us' },
        { name: 'Contact Us', href: '/contact' },
    ]

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-ivory-200/95 backdrop-blur-md shadow-md'
                    : 'bg-transparent'
                    }`}
            >
                <div className="section-container">
                    <div className="flex items-center justify-between h-24">
                        {/* Logo - Bigger size */}
                        <Link href="/" className="flex items-center relative z-50">
                            <Image
                                src="/assets/logo.png"
                                alt="Providence Legal Co."
                                width={100}
                                height={50}
                                className="h-50 w-auto"
                                priority
                            />
                        </Link>

                        {/* Hamburger Menu Button - Blush Pink Circle with Ivory Icon */}
                        <button
                            className="w-12 h-12 rounded-full bg-blush-200 hover:bg-blush-300 flex items-center justify-center transition-all duration-200 relative z-50 shadow-md"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6 text-ivory-50"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Backdrop overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isMobileMenuOpen
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Side Menu Panel - Slides in from right with blush pink background */}
            <div
                className={`fixed top-0 right-0 h-full w-full max-w-md bg-gradient-to-br from-blush-300 via-blush-200 to-blush-100 z-50 shadow-2xl transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Close button */}
                <button
                    className="absolute top-6 right-6 p-2 text-rose-700 hover:text-rose-800 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Menu Items - No logo */}
                <div className="flex flex-col px-8 pt-20 space-y-1">
                    {navLinks.map((link, index) => {
                        const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                        const hasSubmenu = 'submenu' in link && link.submenu && link.submenu.length > 0
                        const isSubmenuOpen = openSubmenu === link.name

                        return (
                            <div key={link.name}>
                                {hasSubmenu ? (
                                    <>
                                        <button
                                            onClick={() => setOpenSubmenu(isSubmenuOpen ? null : link.name)}
                                            className={`w-full text-left py-4 text-2xl font-serif transition-all duration-300 border-b border-rose-300/30 flex items-center justify-between ${isActive
                                                    ? 'text-rose-700 font-bold'
                                                    : 'text-rose-800 hover:text-rose-600'
                                                } ${isMobileMenuOpen
                                                    ? 'translate-x-0 opacity-100'
                                                    : 'translate-x-10 opacity-0'
                                                }`}
                                            style={{
                                                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                                            }}
                                        >
                                            {link.name}
                                            <svg
                                                className={`w-5 h-5 transition-transform duration-300 ${isSubmenuOpen ? 'rotate-180' : ''}`}
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </button>
                                        {/* Submenu */}
                                        <div className={`overflow-hidden transition-all duration-300 ${isSubmenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                                            <div className="pl-6 space-y-1">
                                                <Link
                                                    href={link.href}
                                                    className="block py-3 text-lg text-rose-700 hover:text-rose-600 transition-colors duration-200"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    About Us
                                                </Link>
                                                {link.submenu?.map((sublink) => (
                                                    <Link
                                                        key={sublink.name}
                                                        href={sublink.href}
                                                        className="block py-3 text-lg text-rose-700 hover:text-rose-600 transition-colors duration-200"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {sublink.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`py-4 text-2xl font-serif transition-all duration-300 border-b border-rose-300/30 block ${isActive
                                                ? 'text-rose-700 font-bold'
                                                : 'text-rose-800 hover:text-rose-600'
                                            } ${isMobileMenuOpen
                                                ? 'translate-x-0 opacity-100'
                                                : 'translate-x-10 opacity-0'
                                            }`}
                                        style={{
                                            transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                                        }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        )
                    })}
                </div>

                {/* Footer in menu */}
                <div className="absolute bottom-8 left-8 text-rose-700 text-sm">
                    <p>&copy; 2026 Providence Legal Co.</p>
                </div>
            </div>
        </>
    )
}
