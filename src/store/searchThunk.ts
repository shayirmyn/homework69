import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {IGet, IShow} from "../types";

export const fetchShows = createAsyncThunk<IGet[], string>(
    "get/fetch",
    async (value) => {
        const request = await axiosApi.get<IGet[] | []>(`${value}`);
        const showsData = request.data;

        if (showsData) {
            return showsData;
        }

        return [];
    },
);

// export const oneShow = createAsyncThunk<IShow, number>(
//     "getOne/fetch",
//     async (id) => {
//         const request = await axiosApi.get<IShow | null>(`${value}`);
//         const showsData = request.data;
//
//         if (showsData) {
//             return showsData;
//         }
//
//         return {};
//     },
// );