import { createSlice } from '@reduxjs/toolkit'
import { API_CONFIG } from '../api';
import axiosConfig from '../api/axiosConfig';
import authService from '../service/auth/authService';
const slice = createSlice({
    name: 'news',
    initialState: {
        listAll: [],
        detail: null,
        listTop: []

    },
    reducers: {

        setAll(state, actions) {
            state.listAll = actions.payload
        },
        setTop(state, actions) {
            state.listTop = actions.payload
        },
        setDetail(state, actions) {
            let data = [...state.listAll];


            let index = data.findIndex((item: any) => item.id === actions.payload)



            state.detail = data[index];
        },

    },
})
export const newsReducers = slice.reducer;
export const newsActions = slice.actions;

