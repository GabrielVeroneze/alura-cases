import Title from '@/components/Title'
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <Title as="h1">Alura Cases - Home Page</Title>
            <Link href="/faq">Ir para o FAQ</Link>
        </div>
    )
}
