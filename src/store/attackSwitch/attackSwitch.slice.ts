import { createSlice } from "@reduxjs/toolkit";

const initialState: StoreSliceBase<boolean> = {
    value: false
}

export const attackSwitchSlice = createSlice({
    name: 'attackSwitch',
    initialState,
    reducers: {
        setAttackSwitch: (state) => {
            state.value = !state.value
        },
    }
})

export const { actions, reducer } = attackSwitchSlice