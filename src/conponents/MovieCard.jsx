import {TMDB_IMG_BASE_URL} from '../utils/constant';
const MovieCard = ({posterPath}) => {
    if(!posterPath) return null; // Return null if posterPath is not provided
    return(
        <div className=' w-36 md:w-48 pr-4'> 
            <img src={TMDB_IMG_BASE_URL+ posterPath} alt="Movie Poster" />
        </div>
    )
}
export default MovieCard;