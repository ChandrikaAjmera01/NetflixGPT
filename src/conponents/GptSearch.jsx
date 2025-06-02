
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import {BANNER_URL} from '../utils/constant';
const GptSearch = () => {
    return(
        <div>
            <div className='absolute -z-10'>
                <img 
                src={BANNER_URL}
                alt="logo"/>
            </div>
           <GptSearchBar/>
           <GptMovieSuggestion/>
        </div>
    );
}
export default GptSearch;