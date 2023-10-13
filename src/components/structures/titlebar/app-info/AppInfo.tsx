import { FC } from 'react'
import { Text, Image } from '@chakra-ui/react'

const AppInfo : FC = () => {
    return (
        <div className='px-1.5 flex flex-row gap-2'>
            <div className='flex items-center'>
                <Image src='./media/app.png' alt='HA' h='18px' w='15px' />
            </div>
            <div>
                <Text className='pt-1' fontSize='14px' color='#fff'>Hello Academy</Text>
            </div>
        </div>
    )
}

export default AppInfo