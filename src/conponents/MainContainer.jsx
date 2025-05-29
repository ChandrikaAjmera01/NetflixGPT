
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideTitle from "./VideTitle.jsx";


const MainContainer=()=>{
    const movies = useSelector((store)=> store?.movies?.nowPlayingMovies);
    if(!movies) return; // Handle loading state or return a placeholder)
    const mainMovie = movies[0];
    console.log(mainMovie);
    const { title, overview, id} = mainMovie;
   return(
        <div>
            <VideoBackground movieId={id}/>
            <VideTitle title={title} overview={overview}/>
        </div>
    );

}
export default MainContainer;
