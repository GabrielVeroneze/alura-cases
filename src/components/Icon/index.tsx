import * as iconSet from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box } from '@/components/Box'
import styles from './Icon.module.css'

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

interface IconProps {
    iconVariant: string
    className?: string
}

export default function Icon({ iconVariant, className = '', ...props }: IconProps) {
    const iconName = `fa${capitalize(iconVariant)}` as keyof typeof iconSet
    const icon = iconSet[iconName] as iconSet.IconDefinition

    return (
        <Box
            as={FontAwesomeIcon}
            icon={icon}
            crossOrigin="anonymous"
            className={`${styles.icon} ${className}`}
            {...props}
        />
    )
}
