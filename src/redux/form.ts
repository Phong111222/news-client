import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'form',
    initialState: {
        show: false,
        register: false,
        loadData: false,

    },
    reducers: {
        showForm(state) {
            state.show = true;
        },
        closeForm(state) {
            state.show = false
        },
        toggleRegister(state, actions) {
            state.register = actions.payload
        }


    }
})
export const formReducer = slice.reducer;
export const formActions = slice.actions