import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
    const dispath = useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    const getMovieVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === "Trailer" && video.site === "YouTube");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispath(addTrailerVideo(trailer));
      
    }

    useEffect(() => {
        !trailerVideo &&  getMovieVideo();
    }, [])
}
export default useMovieTrailer;