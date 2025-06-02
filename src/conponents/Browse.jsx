

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovie from "../hooks/usePopularMovie";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
const Browse = () => { 

    const toggleGptSearch = useSelector((store)=>store.gpt.showGptSearchView)

    
 useNowPlayingMovies();
 usePopularMovie();
    return (
        <div>
            <Header/>
            {toggleGptSearch  ? (<GptSearch/>) : (
            <>
            <MainContainer/>
            <SecondaryContainer/>
            </>)}
            
            
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