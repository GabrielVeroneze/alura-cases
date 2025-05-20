'use client'

import { JSX } from 'react'
import styles from './Title.module.css'

interface TitleProps {
    children: React.ReactNode
    as: keyof JSX.IntrinsicElements
}

export default function Title({ children, as }: TitleProps) {
    const Tag = as as React.ElementType

    return (
        <Tag className={styles.titulo}>{children}</Tag>
    )
}
