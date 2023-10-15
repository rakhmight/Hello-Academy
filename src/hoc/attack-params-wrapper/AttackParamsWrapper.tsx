import { FC, PropsWithChildren } from 'react'
import IconTooltipBtn from '@/components/ui/buttons/icon-tooltip-btn/IconTooltipBtn'
import { BsArrowLeft } from 'react-icons/bs'

interface AttackParamsWrapperProps {
    handleClick: () => void;
}

const AttackParamsWrapper : FC<PropsWithChildren<AttackParamsWrapperProps>> = ({ children, handleClick }) => {
    return(
        <div className='w-full h-full flex flex-row gap-5 items-center justify-center relative'>
            <div className='absolute top-[10px] left-[10px] z-[12]'>
                <IconTooltipBtn label='Go to main' icon={BsArrowLeft} clickHandler={handleClick} />
            </div>

            { children }
        </div>
    )
}

export default AttackParamsWrapper