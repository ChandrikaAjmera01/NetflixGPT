
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {

    const trailer_key = useSelector((store) => store?.movies?.trailerVideo?.key);
    useMovieTrailer(movieId)
    return (
        <div className="w-screen h-screen">
            <iframe 
            className="w-screen aspect-video"
                src={"https://www.youtube.com/embed/VWqJifMMgZE?si=" + trailer_key+"?&autoplay=1&mute=1"}
                title="YouTube video player"
            ></iframe>
        </div>
    );
}
export default VideoBackground;