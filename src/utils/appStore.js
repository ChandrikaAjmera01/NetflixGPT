import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice"; // Assuming you have a moviesSlice defined
import gptReducer from "./gptSlice"; // Assuming you have a gptSlice defined
import configReducer from "./configSlice"; // Assuming you have a configSlice defined

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer, 
        gpt : gptReducer, // Assuming you have a gptReducer defined
        config: configReducer, // Assuming you have a configReducer defined
    },
});
export default appStore;
export { appStore };    