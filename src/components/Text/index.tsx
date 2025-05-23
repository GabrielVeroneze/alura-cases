import { ElementType } from 'react'
import { PolymorphicProps } from '@/types/Polymorphic'
import Box from '@/components/Box'
import styles from './Text.module.css'

interface TextProps {
    className?: string
    srOnly?: boolean
}

export default function Text<T extends ElementType = 'span'>({
    as,
    className = '',
    srOnly,
    ...props
}: PolymorphicProps<T, TextProps>) {
    const Tag = as || 'span'

    return (
        <Box
            as={Tag}
            className={`${styles.text} ${className}`}
            srOnly={srOnly}
            {...props}
        />
    )
}
