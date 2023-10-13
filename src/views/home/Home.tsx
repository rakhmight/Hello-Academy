import { FC } from 'react'
import AttackCard from '@/components/ui/cards/attack-card/AttackCard'

const attacksType = [
    { title: 'DoS', img: 'dos', route: 'dos' },
    { title: 'BF', img: 'bf', route: 'bf' }
]

const Home : FC = () => {
    return(
        <div className='w-full h-full flex flex-row items-center justify-center gap-5'>
            {
                attacksType.map((attack, i) => (
                    <AttackCard {...attack} key={i} />
                ))
            }
        </div>
    )
}

export default Home