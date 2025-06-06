
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import {BANNER_URL} from '../utils/constant';
const GptSearch = () => {
    return(
        <div className="">
            <div className='fixed -z-10'>
                <img 
                className='h-screen object-cover md:h-full w-full'
                src={BANNER_URL}
                alt="logo"/>
            </div>
            <div className=''>
            <GptSearchBar/>
            <GptMovieSuggestion/>
           </div>
        </div>
    );
}
export default GptSearch;