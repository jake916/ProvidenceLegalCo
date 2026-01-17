'use client'

import { useState } from 'react'

interface AccordionItemProps {
    question: string
    answer: string
    isOpen: boolean
    onClick: () => void
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
    return (
        <div className="border border-rose-200 rounded-lg mb-4 overflow-hidden transition-all duration-300 hover:shadow-md">
            <button
                onClick={onClick}
                className="w-full px-6 py-5 text-left bg-gradient-to-r from-rose-50 to-blush-50 hover:from-rose-100 hover:to-blush-100 transition-all duration-300 flex justify-between items-center"
            >
                <span className="text-lg font-semibold text-rose-800 pr-8">{question}</span>
                <svg
                    className={`w-6 h-6 text-rose-600 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="px-6 py-5 bg-white text-gray-700 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    )
}

interface FAQAccordionProps {
    faqs: Array<{ question: string; answer: string }>
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
                <AccordionItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    )
}
