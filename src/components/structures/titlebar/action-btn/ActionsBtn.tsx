import { FC } from 'react'
import { WindowMethodsAPI } from './types'
import { appWindow } from '@tauri-apps/api/window'
import { IconButton, Icon } from '@chakra-ui/react'
import { VscChromeMinimize } from 'react-icons/vsc'
import { TfiClose } from 'react-icons/tfi'

const ActionBtn : FC = () => {
    
    const minimizeWindow : WindowMethodsAPI = () => {
        appWindow.minimize()
    }
    const closeWindow : WindowMethodsAPI = () => {
        appWindow.close()
    }

    return(
        <>
            <IconButton
            variant='ghost'
            colorScheme='whiteAlpha'
            aria-label='Collapse'
            size="sm"
            fontSize='18px'
            icon={ <Icon as={VscChromeMinimize} /> }
            onClick={ minimizeWindow }
            />
            
            <IconButton
            variant='ghost'
            colorScheme='whiteAlpha'
            aria-label='Close app'
            size="sm"
            fontSize='14px' 
            icon={ <Icon as={TfiClose} color="var(--red-color)" /> }
            onClick={ closeWindow }
            />
        </>
    )

}

export default ActionBtn