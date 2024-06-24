import { logger, customizePayloadMiddleware } from '../middlewares'
import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from '../slices/characters.slice'
import uiReducer from '../slices/ui.slice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    data: charactersReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // customizePayloadMiddleware
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
