

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => { 

    
 useNowPlayingMovies();
    return (
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
           {/*
            MainContainer 
             - Video Background
             - Video title
             SecondaryContainer
             - Movie List * n
             - Card * n
            */}
        </div>
    );
 }
export default Browse;