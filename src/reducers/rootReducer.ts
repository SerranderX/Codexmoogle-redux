import { combineReducers } from 'redux-immutable'
import { uiReducer } from './ui'
import { charactersReducer } from './characters'

const rootReducer = combineReducers({
  characters: charactersReducer,
  ui: uiReducer,
})

export default rootReducer
