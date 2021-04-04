import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import courtsService, {QueryTimeType, SearchedCourtsType} from "./service";

export interface CourtsState {
    loading: boolean;
    error: string | undefined;
    data: SearchedCourtsType | undefined;
}

export const initialState: CourtsState = {
    loading: false,
    error: undefined,
    data: undefined
}

const queryCourts = createAsyncThunk("courts/fetchCourts", async (query:QueryTimeType) => {
    return await courtsService.queryCourts(query)
});

export const courtsActionCreators = {queryCourts};

export const courtsSlice = createSlice({
    name: 'courts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryCourts.pending, (state) => {
                state.loading = true
                state.error = undefined
                state.data = undefined
            })
            .addCase(queryCourts.fulfilled, (state, action) => {
                state.loading = false
                state.error = undefined
                state.data = action.payload
            })
            .addCase(queryCourts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
                state.data = undefined
            });
    },
});

export const selectCourts = (state: RootState) => state.courts;

export default courtsSlice.reducer;