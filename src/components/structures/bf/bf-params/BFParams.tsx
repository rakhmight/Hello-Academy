import { FC, useState, useEffect } from 'react'
import AttackParamsWrapper from '@/hoc/attack-params-wrapper/AttackParamsWrapper'
import AttackTrigger from '@/components/ui/triggers/attack-trigger/AttackTrigger'
import { Input, Textarea, Icon, Text } from '@chakra-ui/react'
import IconTooltipBtn from '@/components/ui/buttons/icon-tooltip-btn/IconTooltipBtn'
import { BiSolidRightArrow } from 'react-icons/bi'
import { IoStop } from 'react-icons/io5'
import { GoPaperclip } from 'react-icons/go'
import { useNavigate } from "react-router-dom"
import { useActions } from '@/hooks/useActions/useActions'

const BFParams : FC = () => {
    const [isAttacks, setIsAttacks] = useState(false)

    const navigate = useNavigate();
    const { resetLogs, setAttackSwitcher } = useActions()

    const exit = () => {
        resetLogs()
        navigate('/')
    }

    useEffect(() => {
        setAttackSwitcher()
    }, [isAttacks])
    return(
        <AttackParamsWrapper handleClick={exit}>
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

                <div className='flex gap-2'>
                    <Input
                    placeholder='Pwd length'
                    backgroundColor='var(--form-color)'
                    border='hidden'
                    size='sm'
                    color='#fff'
                    width='120px'
                    type='number'
                    />

                    <div className='relative'>
                        <Text className='absolute z-10 top-[6px] left-[12px] hover:cursor-pointer' fontSize='small' color='#9ca3af'>Upload JSON file with req body</Text>
                        <Icon className='absolute z-10 top-[7px] right-[8px] hover:cursor-pointer' as={GoPaperclip} fontSize='18px' color='#9ca3af' />
                        <Input
                        backgroundColor='var(--form-color)'
                        border='hidden'
                        size='sm'
                        color='#fff'
                        type='file'
                        className='file:mt-[50px] hover:cursor-pointer'
                        />
                    </div>
                </div>

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