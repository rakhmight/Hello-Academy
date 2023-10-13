import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { reducer as attackSwitchReducer } from './attackSwitch/attackSwitch.slice'
import { reducer as logsReducer } from './logs/logs.slice'

const reducers = combineReducers({
  attackSwitch: attackSwitchReducer,
  logs: logsReducer
})

export const store = configureStore({
  reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>