import { FC } from 'react'
import { Text } from '@chakra-ui/react'
import styles from './GlowTitle.module.css'

interface GlowTitleProps {
    title: string,
    isGlowing: boolean
}

const GlowTitle : FC<GlowTitleProps> = ({ title, isGlowing }) => {
    return(
        <Text fontSize='xl' className={isGlowing ? styles.neon : 'text-[#aaa]'}>{ title }</Text>
    )
}

export default GlowTitle