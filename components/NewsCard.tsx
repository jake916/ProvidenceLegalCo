import Link from 'next/link'

interface NewsCardProps {
    category: string
    title: string
    date: string
    href: string
}

export default function NewsCard({ category, title, date, href }: NewsCardProps) {
    return (
        <Link href={href}>
            <div className="bg-white rounded-lg p-6 shadow-md card-hover border border-blush-200">
                <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-rose-700 bg-blush-200 rounded-full">
                        {category}
                    </span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-rose-800 mb-3 line-clamp-2">
                    {title}
                </h3>
                <p className="text-sm text-gray-500">{date}</p>
            </div>
        </Link>
    )
}
