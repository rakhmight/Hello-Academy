import { FC } from 'react'
import AttackLayout from '@/components/layouts/attack-layout/AttackLayout'
import Console from '@/components/structures/console/Console'
import DOSParams from '@/components/structures/dos/dos-params/DOSParams'

const DOS : FC = () => {
    return(
        <AttackLayout>
            <DOSParams />
            <Console />
        </AttackLayout>
    )
}

export default DOS