import { ComponentPropsWithoutRef, ElementType } from 'react'

export type PolymorphicProps<T extends ElementType, P extends object> = P & {
    as?: T
} & ComponentPropsWithoutRef<T>
