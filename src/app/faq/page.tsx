import type { Metadata } from 'next'
import { FAQ } from '@/types/FAQ'
import Box from '@/components/Box'
import Text from '@/components/Text'
import Link from 'next/link'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
    title: 'FAQ - Alura Cases',
}

async function getFAQ(): Promise<FAQ[]> {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'

    const response = await fetch(FAQ_API_URL)
    const FaqData: FAQ[] = await response.json()

    return FaqData
}

export default async function FAQPage() {
    const faq = await getFAQ()

    return (
        <Box className={styles.container}>
            <Box className={styles.principal} as="main">
                <Box className={styles.conteudo}>
                    <Box>
                        <Text className={styles.titulo} as="h2">
                            FAQ: Perguntas Frequentes
                        </Text>
                        <Text className={styles.descricao} as="p">
                            Não consegue encontrar a resposta que procura? entre
                            em contato com nosso{' '}
                            <Link
                                className={styles.linkSuporte}
                                href="mailto:contato@alura.com.br"
                            >
                                time de suporte ao consumidor
                            </Link>
                        </Text>
                        <Text className={styles.textoVoltar} as="p">
                            <Link className={styles.linkVoltar} href="/">
                                Voltar para home
                            </Link>
                        </Text>
                    </Box>
                    <Box className={styles.listaContainer}>
                        {faq.length === 0 && (
                            <Box className={styles.listaVazia}>
                                <Text className={styles.tituloVazio} as="h1">
                                    Nada por aqui
                                </Text>
                                <Text className={styles.textoVazio} as="p">
                                    Talvez ainda não existam dúvidas frequentes.
                                </Text>
                            </Box>
                        )}
                        <Box className={styles.lista} as="dl">
                            {faq.map((faq, index) => (
                                <Box className={styles.item} key={index}>
                                    <Text className={styles.pergunta} as="dt">
                                        {faq.question}
                                    </Text>
                                    <Text className={styles.resposta} as="dd">
                                        {faq.answer}
                                    </Text>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}
