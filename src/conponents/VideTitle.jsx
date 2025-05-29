import { MORE_INFO_BTN_URL, PLAY_BTN_URL } from "../utils/constant";

const VideTitle = ({ title, overview }) => {
  return (
    <div className="relative w-screen h-screen 
      text-white pt-[30%] px-12">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="w-1/4 text-lg py-6">{overview}</p>
      <div className="">
        <button className="bg-white text-black px-12 p-2 text-lg rounded-md mr-2 hover:opacity-80 transition-opacity duration-300">
          Play
        </button>
        <button className="bg-gray-500 text-white px-12 p-2 text-lg rounded-md hover:opacity-80 transition-opacity duration-300">
          More info
        </button>
      </div>
    </div>
  );
};
export default VideTitle;
