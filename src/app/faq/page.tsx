import { FAQ } from '@/types/FAQ'
import Link from 'next/link'

async function getFAQ(): Promise<FAQ[]> {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'

    const response = await fetch(FAQ_API_URL)
    const FaqData: FAQ[] = await response.json()

    return FaqData
}

export default async function FAQPage() {
    const faq = await getFAQ()

    return (
        <div>
            <h1>Alura Cases - Página de Perguntas FAQ</h1>
            <Link href="/">Ir para a home</Link>
            <ul>
                {faq.map(({ question, answer }, index) => (
                    <li key={index}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}
