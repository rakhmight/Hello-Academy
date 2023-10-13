import { FC } from 'react'
import { Icon } from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa'

interface FooterProps {
    
}

const Footer : FC<FooterProps> = () => {
    return(
        <div className='bg-[#192027] text-[#767676] flex items-center justify-between text-sm h-[25px] px-2'>
            <div>
                <p>made with <Icon as={FaHeart} fontSize='sm' /> by <u>rambledore</u> X.23 for MIA Academy<Icon as={FaHeart} fontSize='sm' /><Icon as={FaHeart} fontSize='sm' /><Icon as={FaHeart} fontSize='sm' /> (for educational purposes)</p>
            </div>

            <div>
                <p>v. 1.0</p>
            </div>
        </div>
    )
}

export default Footer