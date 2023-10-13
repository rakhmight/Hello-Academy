import { FC, PropsWithChildren } from 'react'

const GeneralLayout : FC<PropsWithChildren<unknown>> = ({ children }) => {
    return(
        <div className='w-full relative h-[100vh] flex flex-rows-[35px_auto] bg-[var(--bg-color)]'>
            { children }
        </div>
    )
}

export default GeneralLayout