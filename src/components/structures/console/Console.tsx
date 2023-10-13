import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import Logs from './Logs/Logs'
import { Img, Text } from '@chakra-ui/react'
import ScrollableFeed from 'react-scrollable-feed'

const Console : FC = () => {
    const { logs } = useSelector((state:RootState) => state)

    return(
        <div className='w-full h-[180px] max-h-[180px] px-2.5 mb-2 bg-[var(--block-color)] overflow-y-hidden border-t-2 border-[#777]'>
            <ScrollableFeed>
                {
                    logs.value.length &&
                    logs.value.map((item, i) => (
                        <Logs key={i} { ...item } />
                    ))
                    ||
                    (
                        <div className='w-full h-full flex flex-col items-center justify-center gap-1'>
                            <Img src='./media/empty.png' boxSize='50px' className='opacity-[0.5]' />
                            <Text color='#aaa'>No logs</Text>
                        </div>
                    )
                }
            </ScrollableFeed>
        </div>
    )
}

export default Console