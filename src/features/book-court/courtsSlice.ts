import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import courtsService, { CourtType, QueryTimeType } from './service';
import { RootState } from '../../app/store';

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
  searchedCourts: CourtsStateDataType | undefined;
  selectedSubCourtIds: string[]
}

export const initialState: CourtsState = {
  loading: false,
  error: undefined,
  searchedCourts: undefined,
  selectedSubCourtIds: [],
};

const queryCourts = createAsyncThunk('courts/queryCourts', async (query: QueryTimeType) => courtsService.queryCourts(query));

export const courtsSlice = createSlice({
  name: 'courts',
  initialState,
  reducers: {
    changeSubCourtSelect: (state, action: PayloadAction<string>) => {
      if (state.selectedSubCourtIds.includes(action.payload)) {
        state.selectedSubCourtIds = state.selectedSubCourtIds
          .filter((item) => item !== action.payload);
      } else {
        state.selectedSubCourtIds.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(queryCourts.pending, (state) => {
        state.loading = true;
        state.error = undefined;
        state.searchedCourts = undefined;
      })
      .addCase(queryCourts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        const { courts } = action.payload;
        const data: any = {};
        courts.forEach((court) => {
          if (!data[court.court]) {
            data[court.court] = [];
          }
          data[court.court].push(court);
        });

        state.searchedCourts = { ...action.payload, courts: data };
      })
      .addCase(queryCourts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.searchedCourts = undefined;
      });
  },
});

export const courtsActionCreators = {
  queryCourts,
  changeSubCourtSelect: courtsSlice.actions.changeSubCourtSelect,
};

export const selectCourts = (state: RootState) => state.courts;

export default courtsSlice.reducer;
