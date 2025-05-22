import { ElementType } from 'react'
import { PolymorphicProps } from '@/types/Polymorphic'
import Text from '@/components/Text'
import styles from './Button.module.css'

interface ButtonProps {
    buttonVariant?: 'primary' | 'secondary' | 'tertiary'
    className?: string
}

export default function Button<T extends ElementType = 'button'>({
    as,
    buttonVariant = 'primary',
    className = '',
    ...props
}: PolymorphicProps<T, ButtonProps>) {
    const Tag = as || 'button'

    return (
        <Text
            as={Tag}
            className={`
                ${styles.button}
                ${styles[`button--${buttonVariant}`]}
                ${className}
            `}
            {...props}
        />
    )
}
