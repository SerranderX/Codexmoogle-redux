import { SET_CHARACTERS } from '../actions/types'
import { Character } from '../shared/types/character.type'

export const logger = (store: any) => (next: any) => (action: any) => {
  next(action)
}

export const customizePayloadMiddleware = (store: any) => (next: any) => (actionInfo: any) => {
  if (actionInfo.type === SET_CHARACTERS) {
    const charactersModified: any = (actionInfo.payload as Array<Character>).map((character) => ({
      ...character,
      favorite: false,
    }))
    const featuredAction = { ...actionInfo, payload: charactersModified }
    next(featuredAction)
  } else {
    next({ ...actionInfo })
  }
}
