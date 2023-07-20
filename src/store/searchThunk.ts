import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {IGet, IShow} from "../types";

export const fetchShows = createAsyncThunk<IGet[], string>(
    "get/fetch",
    async (value) => {
        const request = await axiosApi.get<IGet[] | []>(`search/shows/?q=${value}`);
        const showsData = request.data;

        if (showsData) {
            return showsData;
        }

        return [];
    },
);

export const oneShow = createAsyncThunk(
    "getOne/fetch",
    async (id: number) => {
        const request = await axiosApi.get<IShow | null>(`shows/${id}`);
        const showsData = request.data;

        if (showsData) {
            return showsData;
        }

        return null;
    },
);