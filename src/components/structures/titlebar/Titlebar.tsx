import { FC } from 'react'
import AppInfo from './app-info/AppInfo'
import ActionsBtn from './action-btn/ActionsBtn'

const Titlebar : FC = () => {

    return (
        <div data-tauri-drag-region className='w-full z-[99] flex flex-row justify-between bg-[var(--block-color)] fixed select-none'>
            <AppInfo/>

            <div className='flex flex-row'>
                <ActionsBtn />
            </div>
        </div>
    )
}

export default Titlebar