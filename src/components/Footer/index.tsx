import Box from '@/components/Box'
import Text from '@/components/Text'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <Box className={styles.rodape} as="footer">
            <Box className={styles.conteudo}>
                <Text className={styles.texto} as="p">
                    © {new Date().getFullYear()} Gabriel Veroneze. Todos os direitos
                    reservados.
                </Text>
            </Box>
        </Box>
    )
}
