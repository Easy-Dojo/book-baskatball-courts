import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import courtsService, {CourtType, QueryTimeType} from "./service";

export type Courts = {
    [key: string]: [CourtType, CourtType]
};

interface CourtsStateDataType {
    date: string,
    startTime: number,
    endTime: number,
    courts: Courts
}

export interface CourtsState {
    loading: boolean;
    error: string | undefined;
    data: CourtsStateDataType | undefined;
}

export const initialState: CourtsState = {
    loading: false,
    error: undefined,
    data: undefined
}

const queryCourts = createAsyncThunk("courts/fetchCourts", async (query: QueryTimeType) => {
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
                const courts = action.payload.courts
                const data: any = {}
                courts.forEach((court) => {
                    if (!data[court.court]) {
                        data[court.court] = []
                    }
                    data[court.court].push(court)
                })

                state.data = {...action.payload, courts: data}
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