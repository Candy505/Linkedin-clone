import styled from "styled-components";
import { useState } from "react";
import { collection,addDoc } from "firebase/firestore";
import { auth,db } from "../firebase";
import Posts from "./Posts";

const Main = (props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [input,setInput] =useState("")
  
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handlePost= async (e)=>{
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        userId: auth?.currentUser?.uid,
        input:input,
        timestamp: new Date(),
      });
      console.log("Post added with ID: ", docRef.id);
      setInput(""); // Clear the input field
    } catch (error) {
      console.error("Error adding post: ", error);
    }
  }
  return (
    <div className="">
      <div className="text-center overflow-hidden mb-2 bg-slate-50 rounded relative border-none shadow-xl mx-2 pb-4">
        <div className="p-4 flex ">
          <img src="user.svg" alt="" className="rounded-full w-14 h-14" />
          <button onClick={handleOpenPopup} className="bg-gray-100 rounded-full p-3 m-2 border-solid border text-sm text-gray-500 flex-grow text-left">
           <p className="font-semibold text-gray-500">Start a post</p>
          </button>

          {isPopupOpen && (
            <form onSubmit={handlePost}>
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
    <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-2/3 h-4/5 flex flex-col">
      <button onClick={handleClosePopup} className="self-end">
        ❌
      </button>
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold self-start">Medha Bisht</h2>
        <h3 className="text-sm self-start">Post to anyone</h3>
      </div>
      <div className="bg-slate-100 p-4 mt-4 overflow-y-auto">
      <textarea value={input} onChange= {(e) => setInput(e.target.value)}  style={{resize:'none'}} className="h-64 w-full border rounded" placeholder="Enter your message" />
      </div>
      <div className="flex flex-col">
       
       <button type="submit" className="mt-5 font-semibold bg-gray-200 px-3 py-1 rounded-full text-gray-400 self-end">Post</button>
       </div>
    </div>
  </div>
  </form>
)}



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

      <Posts/>
     
    </div>

  );
};

const Mainside = styled.div``;
export default Main;
