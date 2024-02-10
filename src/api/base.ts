import axios from 'axios'
import { Character } from '../shared/types/character.type'

export const api = axios.create({
  baseURL: process.env.REACT_APP_MOOGLEAPI,
})

export const getCharacters = async (): Promise<Array<Character>> => {
  return await api
    .get<Array<Character>>('characters')
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
}
