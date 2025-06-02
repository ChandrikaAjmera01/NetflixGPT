import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";

const usePopularMovie = () => {
    const dispath= useDispatch();
    const getPopularPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispath(addPopularMovies(json.results));
    }
    useEffect(() => {
        getPopularPlayingMovies();
    }, []);

}
export default usePopularMovie;