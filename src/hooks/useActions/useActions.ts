import { actions as attackSwitchActions } from "@/store/attackSwitch/attackSwitch.slice"
import { actions as logsActions } from "@/store/logs/logs.slice"
import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"

const rootActions = {
    ...attackSwitchActions,
    ...logsActions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => 
        bindActionCreators(rootActions, dispatch), [dispatch]
    )
}