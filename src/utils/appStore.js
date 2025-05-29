import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice"; // Assuming you have a moviesSlice defined

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer, 
        // Assuming you have a moviesReducer defined
    },
});
export default appStore;
export { appStore };