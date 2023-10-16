import { FC } from 'react'
import { Tooltip, IconButton, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface IconTooltipBtnProps {
    label: string,
    icon: IconType,
    size?: string,
    iColor?: string,
    clickHandler?: () => void,
    isDisabled?: boolean
}

const IconTooltipBtn : FC<IconTooltipBtnProps> = ({ label, icon, clickHandler, size='sm', iColor='#fff', isDisabled=false }) => {
    return(
        <Tooltip label={ label } fontSize='sm'>
            <IconButton
            isRound={true}
            variant='solid'
            colorScheme='blackAlpha'
            aria-label='Action'
            fontSize='0.9rem'
            icon={<Icon color={iColor} as={ icon } />}
            size={size}
            onClick={clickHandler ? clickHandler : () => false}
            isDisabled={isDisabled}
            />
        </Tooltip>
    )
}

export default IconTooltipBtn