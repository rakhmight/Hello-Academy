import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { reducer as attackSwitcherReducer } from './attackSwitch/attackSwitch.slice'
import { reducer as logsReducer } from './logs/logs.slice'

const reducers = combineReducers({
  attackSwitcher: attackSwitcherReducer,
  logs: logsReducer
})

export const store = configureStore({
  reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>