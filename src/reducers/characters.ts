import { fromJS } from 'immutable'
import { SET_CHARACTERS, SET_FAVORITE, SET_LOADING } from '../actions/types'
import { Character } from '../shared/types/character.type'

export type InitialStateType = {
  characters: Array<Character>
}

export interface ActionSetCharacters {
  type: typeof SET_CHARACTERS
  payload: Array<Character>
}

export interface ActionSetFavorite {
  type: typeof SET_FAVORITE
  payload: string
}

export type ActionType = ActionSetCharacters | ActionSetFavorite
const initialState = fromJS<InitialStateType>({
  characters: [],
})

export const charactersReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return state.setIn(['characters'], fromJS(action.payload))
    case SET_FAVORITE: {
      const currentCharacterIndex = state
        .get('characters')
        ?.toList()
        .findIndex((character) => {
          return character.get('id') === action.payload
        })

      if (!currentCharacterIndex || currentCharacterIndex < 0) {
        return state
      }

      const isFavorite = state.getIn(['characters', currentCharacterIndex, 'favorite'])

      return state.setIn(['characters', currentCharacterIndex, 'favorite'], !isFavorite)
    }
    default:
      return state
  }
}
