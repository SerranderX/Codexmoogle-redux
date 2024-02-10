import { fromJS } from 'immutable'
import { SET_LOADING } from '../actions/types'

export type InitialStateType = {
  loading: boolean
}

export interface ActionSetLoading {
  type: typeof SET_LOADING
  payload: boolean
}

export type ActionType = ActionSetLoading
const initialState = fromJS<InitialStateType>({
  loading: true,
})

export const uiReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_LOADING:
      return state.setIn(['loading'], fromJS(action.payload))
    default:
      return state
  }
}
