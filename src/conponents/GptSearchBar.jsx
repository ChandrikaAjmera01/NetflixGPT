import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
  const langKey = useSelector((store)=> store.config.lang);
  return (
    <div className=" pt-[10%] flex justify-center">
      <form className="w-6/12 bg-black grid grid-cols-8 rounded-lg shadow-lg">
      {/* */}
      {/* */}
        <input
          type="text"
          className="col-span-6 p-4 m-4 bg-gray-600 rounded-md text-white border-amber-50"
      
          placeholder={lang[langKey].gptSearchPlaceholder}
          name="search"
        />
        <button className="col-span-2 my-4 mx-4 bg-red-700 text-white rounded-lg">
            {lang[langKey].search}</button>
      
      </form>
    </div>
  );
};
export default GptSearchBar;
