import { FC } from 'react'
import { Img } from '@chakra-ui/react'
import GlowTitle from '../../titles/glow-title/GlowTitle'

interface AttackTriggerProps {
    img: string,
    title: string
}

const AttackTrigger : FC<AttackTriggerProps> = ({ img, title }) => {
    return(
        <div className='p-5 flex flex-col items-center justify-center gap-1.5'>
            <Img src={`./media/${img}.png`} boxSize='100px' />
            <GlowTitle title={ title } isGlowing={false} />
        </div>
    )
}

export default AttackTrigger