import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState:{
        showGptSearchView : false,
        movieResults: null,
        movieNames: null


    },
    reducers: {
        toggleGptSearchView : (state)=>{
            state.showGptSearchView = !state.showGptSearchView;
        },
        addGPTMovieResults: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames; // Assuming you want to store GPT movie names
            state.movieResults = movieResults; // Assuming you want to store GPT movie results
        }

    }
})
export const { toggleGptSearchView, addGPTMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
