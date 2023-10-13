import { FC, useState } from 'react'
import AttackParamsWrapper from '@/hoc/attack-params-wrapper/AttackParamsWrapper'
import AttackTrigger from '@/components/ui/triggers/attack-trigger/AttackTrigger'
import { Input, Textarea } from '@chakra-ui/react'
import IconTooltipBtn from '@/components/ui/buttons/icon-tooltip-btn/IconTooltipBtn'
import { BiSolidRightArrow } from 'react-icons/bi'
import { IoStop } from 'react-icons/io5'

const BFParams : FC = () => {
    const [isAttacks, setIsAttacks] = useState(false)

    return(
        <AttackParamsWrapper>
            <AttackTrigger title='Brute force' img='bf' />

            <div className='w-[400px] flex flex-col gap-3'>
                <div className='flex items-center gap-2'>
                    <Input
                    placeholder='Write down the ip address'
                    backgroundColor='var(--form-color)'
                    border='hidden'
                    size='sm'
                    color='#fff'
                    />

                    {
                        !isAttacks && (
                            <IconTooltipBtn
                            label='Start'
                            icon={BiSolidRightArrow}
                            size='xs'
                            iColor='var(--main-color)'
                            clickHandler={() => setIsAttacks(!isAttacks)}
                            />
                        ) || (
                            <IconTooltipBtn
                            label='Stop'
                            icon={IoStop}
                            size='xs'
                            iColor='var(--red-color)'
                            clickHandler={() => setIsAttacks(!isAttacks)}
                            />
                        )
                    }
                </div>

                <Input
                placeholder='Pwd length'
                backgroundColor='var(--form-color)'
                border='hidden'
                size='sm'
                color='#fff'
                width='120px'
                type='number'
                />

                <Textarea
                placeholder='Specify the characters that should be included in the selected password'
                backgroundColor='var(--form-color)'
                border='hidden'
                size='sm'
                color='#fff'
                resize='none'
                />
            </div>
        </AttackParamsWrapper>
    )
}

export default BFParams