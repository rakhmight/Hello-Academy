import { FC } from 'react'
import AttackLayout from '@/components/layouts/attack-layout/AttackLayout'
import Console from '@/components/structures/console/Console'
import BFParams from '@/components/structures/bf/bf-params/BFParams'

interface BFProps {
    
}

const BF : FC<BFProps> = () => {
    return(
        <AttackLayout>
            <BFParams />
            <Console />
        </AttackLayout>
    )
}

export default BF