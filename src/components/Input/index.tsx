import { ElementType } from 'react'
import { Text } from '@/components/Text'
import { PolymorphicProps } from '@/types/Polymorphic'
import styles from './Input.module.css'

interface InputProps {
    className?: string
}

export function Input<T extends ElementType = 'input'>({
    as,
    className = '',
    ...props
}: PolymorphicProps<T, InputProps>) {
    const Tag = as || 'input'

    return (
        <Text
            as={Tag}
            className={`${styles.input} ${className}`}
            {...props}
        />
    )
}
