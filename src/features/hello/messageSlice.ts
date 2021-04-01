import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import bookVenueService from "../../app/http/bookVenueService";

interface MessageState {
    loading: boolean;
    error: string | undefined;
    data: string | undefined;
}

export const initialState = {
    loading: false,
    error: undefined,
    data: undefined
} as MessageState

const fetchMessage = createAsyncThunk("message/fetchMessage", async () => {
    const {data} = await bookVenueService.hello()
    return data
});

export const messageActionCreators = {fetchMessage};

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMessage.pending, (state) => {
                state.loading = true
                state.error = undefined
                state.data = undefined
            })
            .addCase(fetchMessage.fulfilled, (state, action) => {
                state.loading = false
                state.error = undefined
                state.data = action.payload
            })
            .addCase(fetchMessage.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
                state.data = undefined
            });
    },
});

export const selectMessage = (state: RootState) => state.message;

export default messageSlice.reducer;


