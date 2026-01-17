import type { Metadata } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'
import './globals.css'
import ScheduleButton from '@/components/ScheduleButton'

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
})

const lora = Lora({
    subsets: ['latin'],
    variable: '--font-lora',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Providence Legal Co. | Professional Legal Services',
    description: 'Expert legal representation and counsel for individuals and businesses. Trusted law firm providing comprehensive legal solutions.',
    keywords: 'law firm, legal services, attorney, lawyer, legal counsel',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${playfairDisplay.variable} ${lora.variable}`}>
            <body className="font-sans">
                {children}
                <ScheduleButton />
            </body>
        </html>
    )
}
