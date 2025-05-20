import { ElementType } from 'react'
import { Box } from '@/components/Box'
import { PolymorphicProps } from '@/types/Polymorphic'
import styles from './Image.module.css'

interface ImageProps {
    className?: string
}

export function Image<T extends ElementType = 'img'>({
    as,
    className,
    ...props
}: PolymorphicProps<T, ImageProps>) {
    const Tag = as || 'img'

    const { children, dangerouslySetInnerHTML, ...imageProps } = props

    return (
        <Box
            as={Tag}
            className={`${styles.image} ${className}`}
            {...imageProps}
        />
    )
}
