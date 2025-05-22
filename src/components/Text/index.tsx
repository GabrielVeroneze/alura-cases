import { ElementType } from 'react'
import { PolymorphicProps } from '@/types/Polymorphic'
import Box from '@/components/Box'
import styles from './Text.module.css'

interface TextProps {
    className?: string
}

export default function Text<T extends ElementType = 'span'>({
    as,
    className = '',
    ...props
}: PolymorphicProps<T, TextProps>) {
    const Tag = as || 'span'

    return (
        <Box
            as={Tag}
            className={`${styles.text} ${className}`}
            {...props}
        />
    )
}
