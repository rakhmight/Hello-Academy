import { FC } from 'react'
import { Img } from '@chakra-ui/react'
import GlowTitle from '../../titles/glow-title/GlowTitle'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import styles from './AttackTrigger.module.css'

interface AttackTriggerProps {
    img: string,
    title: string
}

const AttackTrigger : FC<AttackTriggerProps> = ({ img, title }) => {
    const { attackSwitcher } = useSelector((state:RootState) => state )

    return(
        <div className='p-5 flex flex-col items-center justify-center gap-1.5 relative'>
            <div className={attackSwitcher.value ? styles['active-circle'] : styles.circle}></div>
            
            <Img src={`./media/${img}.png`} boxSize='100px' className={`z-10 ${attackSwitcher.value ? styles['img-glow'] : ''}`} />
            <GlowTitle title={ title } isGlowing={attackSwitcher.value} />
        </div>
    )
}

export default AttackTrigger