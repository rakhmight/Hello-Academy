import { FC, PropsWithChildren } from 'react'
import IconTooltipBtn from '@/components/ui/buttons/icon-tooltip-btn/IconTooltipBtn'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { useActions } from '@/hooks/useActions/useActions'

const AttackParamsWrapper : FC<PropsWithChildren<unknown>> = ({ children }) => {
    const navigate = useNavigate();
    const { resetLogs } = useActions()

    const handleClick = () => {
        resetLogs()
        navigate('/')
    }

    return(
        <div className='w-full h-full flex flex-row gap-5 items-center justify-center relative'>
            <div className='absolute top-[10px] left-[10px]'>
                <IconTooltipBtn label='Go to main' icon={BsArrowLeft} clickHandler={handleClick} />
            </div>

            { children }
        </div>
    )
}

export default AttackParamsWrapper