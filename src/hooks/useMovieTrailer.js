import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailer = (movieId) => {
    const dispath = useDispatch();
    const getMovieVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === "Trailer" && video.site === "YouTube");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispath(addTrailerVideo(trailer));
      
    }

    useEffect(() => {
        getMovieVideo();
    }, [])
}
export default useMovieTrailer;