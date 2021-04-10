import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import courtsService, { BookCourtsRequestType, CourtType, QueryTimeType } from './service';
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
  queryCourtsError: string | undefined;
  bookCourtsError: string | undefined;
  bookCourtsOrder: { orderId: number } | undefined;
  searchedCourts: CourtsStateDataType | undefined;
  selectedSubCourtIds: string[]
}

export const initialState: CourtsState = {
  loading: false,
  queryCourtsError: undefined,
  bookCourtsError: undefined,
  bookCourtsOrder: undefined,
  searchedCourts: undefined,
  selectedSubCourtIds: [],
};

const queryCourts = createAsyncThunk('courts/queryCourts', async (query: QueryTimeType) => courtsService.queryCourts(query));

const bookCourts = createAsyncThunk('courts/bookCourts', async (bookCourtsRequest: BookCourtsRequestType) => courtsService.bookCourts(bookCourtsRequest));

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
        state.queryCourtsError = undefined;
        state.searchedCourts = undefined;
      })
      .addCase(queryCourts.fulfilled, (state, action) => {
        state.loading = false;
        state.queryCourtsError = undefined;
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
        state.queryCourtsError = action.error.message;
        state.searchedCourts = undefined;
      })
      .addCase(bookCourts.pending, (state) => {
        state.loading = true;
        state.bookCourtsError = undefined;
        state.bookCourtsOrder = undefined;
      })
      .addCase(bookCourts.fulfilled, (state, action) => {
        state.loading = false;
        state.bookCourtsError = undefined;
        state.bookCourtsOrder = action.payload;
      })
      .addCase(bookCourts.rejected, (state, action) => {
        state.loading = false;
        state.bookCourtsError = action.error.message;
        state.bookCourtsOrder = undefined;
      });
  },
});

export const courtsActionCreators = {
  queryCourts,
  bookCourts,
  changeSubCourtSelect: courtsSlice.actions.changeSubCourtSelect,
};

export const selectCourts = (state: RootState) => state.courts;

export default courtsSlice.reducer;
