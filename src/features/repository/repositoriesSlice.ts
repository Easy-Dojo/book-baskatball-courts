import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "../../app/store";

interface RepositoriesState {
    loading: boolean;
    error: string | undefined;
    data: string[];
}

export const initialState = {
    loading: false,
    error: undefined,
    data: []
} as RepositoriesState;

const fetchRepositories = createAsyncThunk("repositories/fetchRepositories", async (term: string) => {
    const {data} = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
            text: term
        }
    })
    const names = data.objects.map((results: any) => results.package.name);
    return Promise.resolve(names)
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
                state.error = undefined
                state.data = []
            })
            .addCase(fetchRepositories.fulfilled, (state, action) => {
                state.loading = false
                state.error = undefined
                state.data = action.payload
            })
            .addCase(fetchRepositories.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
                state.data = []
            });
    },
});

export const selectRepositories = (state: RootState) => state.repositories;

export default repositoriesSlice.reducer;


