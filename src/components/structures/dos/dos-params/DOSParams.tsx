import { FC, useState, useEffect } from 'react'
import AttackParamsWrapper from '@/hoc/attack-params-wrapper/AttackParamsWrapper'
import AttackTrigger from '@/components/ui/triggers/attack-trigger/AttackTrigger'
import { Input, Textarea } from '@chakra-ui/react'
import { BiSolidRightArrow } from 'react-icons/bi'
import { IoStop } from 'react-icons/io5'
import IconTooltipBtn from '@/components/ui/buttons/icon-tooltip-btn/IconTooltipBtn'
import { useActions } from '@/hooks/useActions/useActions'
import makeReq from '@/utils/makeReq'

const DOSParams : FC = () => {
    const { updateLogs } = useActions()

    const [isAttacks, setIsAttacks] = useState(false)
    const [ipAdress, setIPAdress] = useState('')
    const [ipAdressError, setIPAdressError] = useState(false)
    const [reqBody, setReqBody] = useState('')

    const [allowWorkers, setAllowWorkers] = useState(false)

    const checkData = async () => {
        setIsAttacks(true)
        updateLogs({ type: 'info', time: Date.now(), ctx: 'Process initialization..' })
        updateLogs({ type: 'info', time: Date.now(), ctx: 'Validation of input data..' })

        if(!ipAdress.length) {
            updateLogs({ type: 'error', time: Date.now(), ctx: 'IP address not specified' })
            setIPAdressError(true)
            setIsAttacks(false)
            return
        }

        updateLogs({ type: 'info', time: Date.now(), ctx: 'Checking ip address..' })
        // check host
        try {
            const adressRes = await makeReq(ipAdress)
            if(adressRes) updateLogs({ type: 'info', time: Date.now(), ctx: 'IP address verification completed, host is accessible' })
        } catch (error) {
            updateLogs({ type: 'error', time: Date.now(), ctx: 'Unable to check IP address' })   
            setIPAdressError(true)
            setIsAttacks(false)  
            return
        }

        // prepare JSON
        // launch attack
        updateLogs({ type: 'info', time: Date.now(), ctx: 'Attack started!' })
        setAllowWorkers(true)
    }

    useEffect(()=>{
        if(ipAdressError){
           if(ipAdress.length){
            setIPAdressError(false)
           } 
        }
    },[ipAdress])

    useEffect(()=>{
        if(!isAttacks) {
            setAllowWorkers(false)
        }
    }, [isAttacks])

    return(
        <AttackParamsWrapper>
            <AttackTrigger title='DoS' img='dos' />

            <div className='w-[400px] flex flex-col gap-3'>
                <div className='flex items-center gap-2'>
                    <Input
                    placeholder='Write down the ip address'
                    backgroundColor='var(--form-color)'
                    border='hidden'
                    size='sm'
                    color='#fff'
                    value={ipAdress}
                    onChange={(event)=> setIPAdress(event.target.value)}
                    isInvalid={ipAdressError}
                    />

                    {
                        !isAttacks && (
                            <IconTooltipBtn
                            label='Start'
                            icon={BiSolidRightArrow}
                            size='xs'
                            iColor='var(--main-color)'
                            clickHandler={() => checkData()}
                            />
                        ) || (
                            <IconTooltipBtn
                            label='Stop'
                            icon={IoStop}
                            size='xs'
                            iColor='var(--red-color)'
                            clickHandler={() => setIsAttacks(!isAttacks)}
                            />
                            )
                    }
                </div>

                <Textarea
                placeholder='Optional request body in JSON format'
                resize='none'
                size='sm'
                color='#fff'
                backgroundColor='var(--form-color)'
                border='hidden'
                rows={6}
                value={reqBody}
                onChange={(event)=> setReqBody(event.target.value)}
                />
            </div>
        </AttackParamsWrapper>
    )
}

export default DOSParams