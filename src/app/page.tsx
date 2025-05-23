import Box from '@/components/Box'
import Image from '@/components/Image'
import Button from '@/components/Button'
import Text from '@/components/Text'
import Icon from '@/components/Icon'
import Input from '@/components/Input'
import Link from 'next/link'
import SideImage from '@/components/SideImage'
import Footer from '@/components/Footer'
import styles from './page.module.css'

const LOGO_ALURA_URL = 'https://fakeimg.pl/94x44'

export default function HomeScreen() {
    return (
        <Box>
            <Box className={styles.main} as="main">
                <Box className={styles.secao}>
                    <Box className={styles.conteudo}>
                        <Box>
                            <Box>
                                <Image
                                    className={styles.logo}
                                    src={LOGO_ALURA_URL}
                                    alt="Logo Alura"
                                />
                            </Box>
                            <Box className={styles.novidadesWrapper}>
                                <Box>
                                    <Link
                                        className={styles.linkNovidades}
                                        href="/faq"
                                    >
                                        <Text
                                            className={styles.destaqueNovidades}
                                        >
                                            O que tem de novo?
                                        </Text>
                                        <Text className={styles.textoNovidades}>
                                            <Text>
                                                Confira as principais dúvidas
                                            </Text>
                                            <Icon
                                                className={styles.icone}
                                                iconVariant="chevronRight"
                                                aria-hidden="true"
                                            />
                                        </Text>
                                    </Link>
                                </Box>
                                <Box className={styles.tituloWrapper}>
                                    <Text className={styles.titulo} as="h1">
                                        Alura Cases
                                    </Text>
                                    <Text className={styles.paragrafo} as="p">
                                        Aqui você vai ter acesso a discussões
                                        avançadas: as principais decisões sobre
                                        arquitetura e design de sistemas.
                                        Aprenda através das descobertas que as
                                        principais empresas de tecnologia
                                        enfrentam!
                                    </Text>
                                    <Text className={styles.paragrafo} as="p">
                                        Quer testar antes de todo mundo?
                                    </Text>
                                </Box>
                                <Box
                                    className={styles.formulario}
                                    as="form"
                                    action="#"
                                >
                                    <Box className={styles.inputWrapper}>
                                        <Text
                                            as="label"
                                            htmlFor="email"
                                            srOnly
                                        >
                                            Email address
                                        </Text>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Coloque seu email aqui"
                                        />
                                    </Box>
                                    <Box className={styles.botaoWrapper}>
                                        <Button type="submit">Cadastrar</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <SideImage />
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}
