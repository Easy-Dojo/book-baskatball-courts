import { configureStore } from '@reduxjs/toolkit'
import messageReducer from "../features/hello/messageSlice"
import authorizeReducer from "../features/login/authorizeSlice"

export const store = configureStore({
    reducer: {
        message: messageReducer,
        loginState: authorizeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
