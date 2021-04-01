import { configureStore } from '@reduxjs/toolkit'
import repositoriesReducer from "../features/repository/repositoriesSlice"
import messageReducer from "../features/hello/messageSlice"

export const store = configureStore({
    reducer: {
        repositories: repositoriesReducer,
        message: messageReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
