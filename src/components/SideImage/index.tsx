import { Box } from '@/components/Box'
import Image from 'next/image'
import styles from './SideImage.module.css'

const SIDE_IMAGE_URL = 'https://fakeimg.pl/2878x1640'

export default function SideImage() {
    return (
        <Box className={styles.container}>
            <Box className={styles.wrapper}>
                <Box className={styles.imagemContainer}>
                    <Image
                        className={styles.imagem}
                        src={SIDE_IMAGE_URL}
                        alt="Treinamento com a roberta arcoverde no alura cases, falando sobre o stackoverflow"
                    />
                </Box>
            </Box>
        </Box>
    )
}
