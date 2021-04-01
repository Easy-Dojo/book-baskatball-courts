import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "../../app/store";


interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState = {
    loading: false,
    error: null,
    data: []
} as RepositoriesState;

type PayloadType = string | string[];

const fetchRepositories = createAsyncThunk("repositories/fetchRepositories", async (term: string): Promise<PayloadType> => {
    try {
        const {data} = await axios.get('https://registry.npmjs.org/-/v1/search', {
            params: {
                text: term
            }
        })
        return data.objects.map((results: any) => results.package.name)
    } catch (err) {
        return err.message
    }
});

export const repositoriesActionCreators = {fetchRepositories};

export const repositoriesSlice = createSlice({
    name: 'repositories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepositories.pending, (state) => {
                state.loading = true
                state.error = null
                state.data = []
            })
            .addCase(fetchRepositories.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                // @ts-ignore
                state.data = action.payload
            })
            .addCase(fetchRepositories.rejected, (state, action) => {
                state.loading = false
                // @ts-ignore
                state.error = action.payload
                state.data = []
            });

    },
});

export const selectRepositories = (state: RootState) => state.repositories;

export default repositoriesSlice.reducer;


