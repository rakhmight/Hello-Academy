import { FC } from 'react'
import { Text, Image } from '@chakra-ui/react'

const AppInfo : FC = () => {
    return (
        <div data-tauri-drag-region className='px-1.5 flex flex-row gap-2'>
            <div data-tauri-drag-region className='flex items-center'>
                <Image data-tauri-drag-region src='./media/app.png' alt='HA' h='18px' w='15px' />
            </div>
            <div data-tauri-drag-region>
                <Text data-tauri-drag-region className='pt-1' fontSize='14px' color='#fff'>Hello Academy</Text>
            </div>
        </div>
    )
}

export default AppInfo