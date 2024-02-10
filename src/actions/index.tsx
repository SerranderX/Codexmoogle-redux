import { SET_CHARACTERS, SET_FAVORITE, SET_LOADING } from './types'
import { getCharacters } from '../api/base'
import { Character } from '../shared/types/character.type'

export const setLoadingAction = (payload: boolean) => ({
  type: SET_LOADING,
  payload,
})

export const setCharactersAction = (payload: Array<any>) => ({
  type: SET_CHARACTERS,
  payload,
})

export const getCharactersAction = () => async (dispatch: any) => {
  const characters = await getCharacters()
  dispatch(setCharactersAction(characters))
  dispatch(setLoadingAction(false))
}

export const setFavoriteAction = (payload: string) => ({
  type: SET_FAVORITE,
  payload,
})
