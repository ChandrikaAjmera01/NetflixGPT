import {TMDB_IMG_BASE_URL} from '../utils/constant';
const MovieCard = ({posterPath}) => {
    return(
        <div className='w-48 pr-4'> 
            <img src={TMDB_IMG_BASE_URL+ posterPath} alt="Movie Poster" />
        </div>
    )
}
export default MovieCard;