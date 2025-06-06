import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
//import openai from "../utils/openai"; // Assuming you have an OpenAI instance set up`
import { API_OPTIONS } from "../utils/constant";
//import js from "@eslint/js";
import { addGPTMovieResults } from "../utils/gptSlice"; 
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const dispath = useDispatch();
  const langKey = useSelector((store)=> store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='
      +movie+
      '&include_adult=false&language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      return json.results;
      
  }

  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);
    // make an API call to OpenAI with the search text
    // You can use the OpenAI API to search for movies, shows, or genres
     ///const gptQuery = "Act as a movie recommendation system and suggest some movies for query:" 
     //+ searchText.current.value 
     //+ "Only give me names of 5 movies,comma seperated. Like the example result given ahead : Gaddar, sholey, Golmal, Don, Koi mil gaya";
   {/* let gptSearchResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      store: true,
      messages: [
        {"role": "user", "content": gptQuery},
      ],
    });

    console.log(gptSearchResults.choices);
    */}
   const  gptSearchResults = ['Razz', 'Chupke Chupke', 'Gol Maal', 'Chhichhore', 'Andaz Apna Apna', '3 Idiots', 'Munna Bhai M.B.B.S.',];
   console.log(gptSearchResults);
   const promiseArray = gptSearchResults.map((movie) => searchMovieTMDB(movie));
     
    const tmdbResults = await Promise.all(promiseArray); // it will wait for all promises to resolve
    // Now tmdbResults will contain the results of all the movie searches
    console.log(tmdbResults);
     dispath(addGPTMovieResults({movieNames:gptSearchResults, movieResults:tmdbResults})); 

  }
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-6/12 bg-black grid grid-cols-8 rounded-lg shadow-lg" 
      onSubmit={(e) => {
        e.preventDefault();}}>
     
        <input
          type="text"
          className="col-span-6 p-4 m-4 bg-gray-600 rounded-md text-white border-amber-50"
          ref={searchText}
          placeholder={lang[langKey].gptSearchPlaceholder}
          name="search"
        />
        <button className="col-span-2 my-4 mx-4 bg-red-700 text-white rounded-lg"
        onClick={handleGPTSearchClick}>
            {lang[langKey].search}</button>
      
      </form>
    </div>
  );
};
export default GptSearchBar;
