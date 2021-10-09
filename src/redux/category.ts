import { createSlice } from '@reduxjs/toolkit'
import { API_CONFIG } from '../api';
import axiosConfig from '../api/axiosConfig';
import authService from '../service/auth/authService';
const slice = createSlice({
    name: 'category',
    initialState: {
        listAll: [],

    },
    reducers: {

        setAll(state, actions) {
            state.listAll = actions.payload
        },


    },
})
export const categoryReducers = slice.reducer;
export const categoryActions = slice.actions;

