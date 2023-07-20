import {IGet} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchShows} from "./searchThunk";

interface IShowsState {
    shows: IGet[];
    getLoading: boolean;
}

const initialState: IShowsState = {
    shows: [],
    getLoading: false,
};

const getShows = createSlice({
    name: "shows",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchShows.pending, state => {
            state.getLoading = true;
        });

        builder.addCase(fetchShows.fulfilled, (state, action) => {
            state.getLoading = false;
            state.shows = action.payload;
        });

        builder.addCase(fetchShows.rejected, state => {
            state.getLoading = false;
        });
    },
});

export const showsReducers = getShows.reducer;