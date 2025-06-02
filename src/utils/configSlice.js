import { createSlice } from "@reduxjs/toolkit";


const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en", // default language
    },
    reducers:{
        changeLanguage: (state, action) => {
            state.lang = action.payload; // update the language
        },

    }
});

export const {changeLanguage} = configSlice.actions;
export default configSlice.reducer;