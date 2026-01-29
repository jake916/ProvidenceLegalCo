'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const heroImages = [
    '/assets/Logo mockup.jpg',
    '/assets/lady-justice-statue-front-courthouse.jpg',
    '/assets/hero-2.png',
    '/assets/gavel-scales-justice-law-books.jpg',
    '/assets/hero-4.png',
]

export default function HeroSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
        }, 5000) // Change image every 5 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden">
            {heroImages.map((image, index) => (
                <div
                    key={image}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={image}
                        alt={`Hero background ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Rose gold gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-700/80 via-rose-600/75 to-rose-500/70" />
        </div>
    )
}
