import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {IGet} from "../types";

export const fetchShows = createAsyncThunk<IGet[], string>(
    "get/fetch",
    async (value) => {
        const request = await axiosApi.get<IGet[] | []>(`${value}`);
        const showsData = request.data;
        console.log(showsData);
        if (showsData) {
            return showsData;
        }
        return [];
    },
);