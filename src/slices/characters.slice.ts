import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Character } from '../shared/types/character.type'
import { getCharacters } from '../api/base'
import { setLoading } from './ui.slice'

export type InitialStateType = {
  characters: Array<Character>
  charactersFiltered: Array<Character>
  search: string
}

const initialState: InitialStateType = {
  characters: [],
  charactersFiltered: [],
  search: '',
}

// ACTIONS
export const fetchCharacters = createAsyncThunk('data/fetchCharactersWithDetails', async (_, thunkAPI) => {
  const { dispatch } = thunkAPI
  const characters = await getCharacters()
  dispatch(setCharacters(characters))
  dispatch(setLoading(false))
})

// SLICE
export const dataSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload
    },
    setFavorite: (state, action) => {
      const currentCharacterIndex = state.characters.findIndex((character) => character.id === action.payload)

      if (currentCharacterIndex > 0) {
        state.characters[currentCharacterIndex].favorite = !state.characters[currentCharacterIndex].favorite
      }
    },
    setFilter: (state, action) => {
      const charactersFiltered = state.characters.filter((character) => character.name.includes(action.payload))
      state.search = action.payload
      state.charactersFiltered = charactersFiltered
    },
  },
})

export const { setCharacters, setFavorite, setFilter } = dataSlice.actions
export default dataSlice.reducer
