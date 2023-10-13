import { FC, PropsWithChildren } from 'react'

const AttackLayout : FC<PropsWithChildren<unknown>>  = ({ children }) => {
    return(
        <div className='w-full h-full grid grid-rows-[auto_180px]'>
            { children }
        </div>
    )
}

export default AttackLayout