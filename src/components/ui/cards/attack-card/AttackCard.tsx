import { FC } from 'react'
import { Img, useToast, Alert, AlertIcon } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import GlowTitle from '../../titles/glow-title/GlowTitle'
import styles from './AttackCard.module.scss'

interface AttackCardProps {
    img: string,
    title: string,
    route: string
}

const AttackCard : FC<AttackCardProps> = ({ img, title, route }) => {
    const toast = useToast()

    return(
        <>
        {
            route !=='bf' && (
                <Link to={`/${route}`}>
                    <div
                    className={`py-2.5 px-5 bg-[var(--block-color)] flex flex-col items-center justify-center rounded-[5px] gap-1.5 hover:bg-[#304357e1] hover:cursor-pointer ${styles.shine}`}
                    >
                        <Img src={`./media/${img}.png`} boxSize='60px' />
                        <GlowTitle title={title} isGlowing={true} />
                    </div>
                </Link>
            ) || (
                <div
                className={`py-2.5 px-5 bg-[var(--block-color)] flex flex-col items-center justify-center rounded-[5px] gap-1.5 hover:bg-[#304357e1] hover:cursor-pointer ${styles.shine}`}
                onClick={() => {
                    toast({
                    position: 'bottom-left',
                    render: () => (
                        <Alert status='info' variant='top-accent' height='35px'>
                            <AlertIcon />
                            Coming soon! (in v. 1.1)
                        </Alert>
                    ),
                    })
                }}
                >
                    <Img src={`./media/${img}.png`} boxSize='60px' />
                    <GlowTitle title={title} isGlowing={true} />
                </div>
            )
        }
        </>
    )
}

export default AttackCard