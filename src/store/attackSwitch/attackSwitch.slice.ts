import { createSlice } from "@reduxjs/toolkit";

const initialState: StoreSliceBase<boolean> = {
    value: false
}

export const attackSwitcherSlice = createSlice({
    name: 'attackSwitcher',
    initialState,
    reducers: {
        setAttackSwitcher: (state) => {
            state.value = !state.value
        },
    }
})

export const { actions, reducer } = attackSwitcherSlice