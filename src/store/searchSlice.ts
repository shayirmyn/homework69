import {IGet, IShow} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchShows, oneShow} from "./searchThunk";

interface IShowsState {
    shows: IGet[];
    show: IShow | null;
    getLoading: boolean;
}

const initialState: IShowsState = {
    shows: [],
    show: null,
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

        builder.addCase(fetchShows.fulfilled, (state, {payload}) => {
            state.getLoading = false;
            state.shows = payload;
        });

        builder.addCase(fetchShows.rejected, state => {
            state.getLoading = false;
        });

        builder.addCase(oneShow.pending, (state) => {
            state.getLoading = true;
        });

        builder.addCase(oneShow.fulfilled, (state, {payload}) => {
            state.getLoading = false;
            state.shows = [];
            state.show = payload;
        });

        builder.addCase(oneShow.rejected, (state) => {
            state.getLoading = false;
        });
    },
});

export const showsReducers = getShows.reducer;