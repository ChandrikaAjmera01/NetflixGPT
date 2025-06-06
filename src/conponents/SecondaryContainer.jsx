import { useSelector } from "react-redux";
import MovieList from "./MovieList";



const SecondaryContainer = () => {
    const movies= useSelector((store)=> store.movies);
    console.log(movies?.nowPlayingMovies);
    console.log(movies?.popularMovies);
    
    return(
        <div className="bg-black">
            {/* 
            Movie list -popular, top rated, upcoming
            Card - title, poster, rating, overview
            */}
        <div className="relative md:-mt-4 pd-4 md:pl-12 z-20 bg-transparent">
            <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
            <MovieList title={"Trending"} movies={movies?.popularMovies}/>
            <MovieList title={"Popular"} movies={movies?.popularMovies}/>
            <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        </div> 
        </div>
    );
}
export default SecondaryContainer;