import styled from "styled-components";
const Main = (props) => {
  return (
    <div className="">
      <div className="text-center overflow-hidden mb-2 bg-slate-50 rounded relative border-none shadow-xl mx-2 pb-4">
      <div className="p-4 flex ">
        <img src="user.svg" alt="" className="rounded-full w-14 h-14"/>
        <button className="bg-gray-100 rounded-full p-3 m-2 border-solid border text-sm text-gray-500 flex-grow text-left">
          Start a post
        </button>
        </div>
        <div className="flex justify-evenly">
          <div className="hover:underline hover:text-sky-500 hover:duration-100 ">
            <button className="w-10 h-6 flex items-center pl-2">
              <img src="photo.png" alt="" className="w-6" />
              <span className="text-sm text-sky-500 pl-1">Photo</span>
            </button>
          </div>
          <div className="hover:underline hover:text-sky-500 hover:duration-100 ">
            <button className="w-10 h-6 flex items-center pl-2 ">
              <img src="video.png" alt="" className="w-6" />
              <span className="text-sm text-sky-500 pl-1">Video</span>
            </button>
          </div>
          <div className="hover:underline hover:text-sky-500 hover:duration-100 ">
            <button className="w-10 h-6 flex items-center pl-2">
              <img src="event.png" alt="" className="w-6" />
              <span className="text-sm text-sky-500 pl-1">Event</span>
            </button>
          </div>
          <div className="hover:underline hover:text-sky-500 hover:duration-100 ">
            <button className="w-10 h-6 flex items-center pl-2">
              <img src="article.png" alt="" className="w-6" />
              <span className="text-sm text-sky-500 pl-1">Article</span>
            </button>
          </div>
        </div>
      </div>
    </div>
   
  );
};

const Mainside = styled.div``;
export default Main;
