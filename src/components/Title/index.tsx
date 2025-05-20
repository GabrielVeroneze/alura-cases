'use client'

import { JSX } from 'react'

interface TitleProps {
    children: React.ReactNode
    as: keyof JSX.IntrinsicElements
}

export default function Title({ children, as }: TitleProps) {
    const Tag = as as React.ElementType

    return (
        <>
            <Tag>{children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: red;
                    font-family: sans-serif;
                }
            `}</style>
        </>
    )
}
