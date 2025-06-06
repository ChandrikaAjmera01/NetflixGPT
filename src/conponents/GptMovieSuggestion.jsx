import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = ()=>{

    const { movieResults,movieNames} = useSelector((store) => store.gpt);
    if(!movieResults || !movieNames) {
        return <div>No movie suggestions available.</div>;
    }
    return(
        <div className="p-4 m-4 bg-black bg-opacity-100 text-white">
            {movieNames.map((movieName, index) => (
                <MovieList
                    key={movieName}
                    title={movieName}
                    movies={movieResults[index]}
                />
            ))}
            
        </div>
    )
}
export default GptMovieSuggestion;