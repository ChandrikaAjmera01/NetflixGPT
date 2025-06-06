import { MORE_INFO_BTN_URL, PLAY_BTN_URL } from "../utils/constant";

const VideTitle = ({ title, overview }) => {
  return (
    <div className="relative
      text-white pt-0 md:pt-[3%] px-12">
      <h1 className=" text-2xl md:text-3xl font-bold">{title}</h1>
      <p className="hidden md:inline-block w-full md:w-1/4 text-lg py-0 md:py-6">{overview}</p>
      <div className="my-2 md:my-0">
        <button className="bg-white text-black px-6 md:px-12 py-1 md:py-2 my-2  text-lg rounded-md mr-2 hover:opacity-80 transition-opacity duration-300">
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white px-12 p-2 text-lg rounded-md hover:opacity-80 transition-opacity duration-300">
          More info
        </button>
      </div>
    </div>
  );
};
export default VideTitle;
