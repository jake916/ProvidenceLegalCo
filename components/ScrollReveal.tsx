'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollRevealProps {
    children: ReactNode
    delay?: number
    direction?: 'up' | 'left' | 'right'
}

export default function ScrollReveal({ children, delay = 0, direction = 'up' }: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('revealed')
                        }, delay)
                    }
                })
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [delay])

    const className = direction === 'left'
        ? 'scroll-reveal-left'
        : direction === 'right'
            ? 'scroll-reveal-right'
            : 'scroll-reveal'

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    )
}
