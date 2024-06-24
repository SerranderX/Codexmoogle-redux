import { Character } from '../shared/types/character.type'

export const logger = (store: any) => (next: any) => (action: any) => {
  console.log(action)
  next(action)
}

export const customizePayloadMiddleware = (store: any) => (next: any) => (actionInfo: any) => {
  if (actionInfo.type === 'characters/setCharacters') {
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
