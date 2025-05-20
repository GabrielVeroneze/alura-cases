import { ElementType } from 'react'
import { PolymorphicProps } from '@/types/Polymorphic'
import styles from './Box.module.css'

interface BoxProps {
    className?: string
    srOnly?: boolean
}

export function Box<T extends ElementType = 'div'>({
    as,
    className,
    srOnly,
    ...props
}: PolymorphicProps<T, BoxProps>) {
    const Tag = as || 'div'

    return (
        <Tag
            className={`
                ${styles.box}
                ${srOnly ? styles.srOnly : ''}
                ${className}
            `}
            {...props}
        />
    )
}
