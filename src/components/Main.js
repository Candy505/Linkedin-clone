import styled from "styled-components";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import Posts from "./Posts";

const Main = (props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        userId: auth?.currentUser?.uid,
        input: input,
        timestamp: new Date(),
      });
      console.log("Post added with ID: ", docRef.id);
      setInput(""); // Clear the input field
    } catch (error) {
      console.error("Error adding post: ", error);
    }
  };
  return (
    <div>
      <div className="text-center overflow-hidden mb-2 bg-slate-50 rounded relative border-none shadow-xl mx-2 pb-4">
        <div className="p-4 flex ">
          <img src="user.svg" alt="" className="rounded-full w-14 h-14" />
          {/* 
          <button className="bg-gray-100 rounded-full p-3 m-2 border-solid border text-sm text-gray-700 flex-grow text-left">
            Start a post
          </button> */}

          <button
            onClick={handleOpenPopup}
            className="bg-gray-100 rounded-full p-3 m-2 border-solid border text-sm text-gray-500 flex-grow text-left"
          >
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
                    <h2 className="text-lg font-semibold self-start">
                      Medha Bisht
                    </h2>
                    <h3 className="text-sm self-start">Post to anyone</h3>
                  </div>
                  <div className="bg-slate-100 p-4 mt-4 overflow-y-auto">
                    <textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      style={{ resize: "none" }}
                      className="h-64 w-full border rounded"
                      placeholder="Enter your message"
                    />
                  </div>
                  <div className="flex justify-between items-center border-solid  border-b border-b-gray-300">
                    <div className="mb-4 mt-1">
                      <button className="mr-4 bg-gray-200 rounded-full p-4 hover:shadow-md  hover:shadow-gray-500">
                        <img src="post-poto.png" alt="" className="w-6" />
                      </button>
                      <button className="mr-4 bg-gray-200 rounded-full p-4 hover:shadow-md  hover:shadow-gray-500">
                        <img src="video-camera.png" alt="" className="w-6" />
                      </button>
                      <button className="mr-4 bg-gray-200 rounded-full p-4 hover:shadow-md  hover:shadow-gray-500">
                        <img src="post-calender.png" alt="" className="w-6" />
                      </button>
                      <button className="mr-4 bg-gray-200 rounded-full p-4 hover:shadow-md  hover:shadow-gray-500">
                        <img src="ellipsis.png" alt="" className="w-6" />
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-5 font-semibold bg-gray-200 px-3 py-1 rounded-full text-gray-400 self-end"
                  >
                    Post
                  </button>
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

      <div>
        <div className="text-center mb-2 bg-slate-50 rounded relative border-none shadow-xl mx-2 p-0 overflow-visible">
          <div className="flex-nowrap pt-3 px-4 pb-0 mb-2 items-center flex">
            <a className="mr-3 flex-grow flex " href="/">
              <img src="user.svg" alt="" className="w-12 h-12" />
              <div className="flex flex-col flex-grow ml-3 overflow-hidden">
                <span className="text-left text-sm font-bold">Title</span>
                <span className="text-left text-xs text-gray-500 font-semibold">
                  Info
                </span>
                <span className="text-left text-xs text-gray-500 font-semibold">
                  Date
                </span>
              </div>
            </a>
            <button className="w-8 h-8 p-2 absolute right-3 top-0">
              <img src="ellipsis.png" alt="" />
            </button>
          </div>
          <div className="text-left px-4 py-0 text-base font-semibold">
            Description
          </div>
          <div className="mt-3 relative block">
            <a>
              <img src="shared_post.jpg" alt="" className="" />
            </a>
          </div>
          <div className=" flex overflow-auto items-center py-2 border-solid  border-b border-b-gray-300 ">
            <li className=" flex flex-row ml-4">
              <button className="w-3 h-3">
                <img src="like.png" alt="" />
              </button>
              <button className="w-3 h-3">
                <img src="clapping.png" alt="" />
              </button>
              <button className="w-3 h-3">
                <img src="heart.png" alt="" />
              </button>
            </li>
            <li className=" flex mr-1 text-sm ">
              <p>Comments</p>
            </li>
          </div>
          <div className="flex items-center justify-evenly  py-3">
            <button className="flex items-center w-4 h-4">
              <img src="likepost.png" alt="" />
              <span className="ml-1">Like</span>
            </button>

            <button className="flex items-center w-4 h-4 mr-8">
              <img src="comment.png" alt="" />
              <span className="ml-1">Comment</span>
            </button>
            <button className="flex items-center w-4 h-4">
              <img src="repost.png" alt="" />
              <span className="ml-1">Repost</span>
            </button>
            <button className="flex items-center w-4 h-4">
              <img src="send.png" alt="" />
              <span className="ml-1">Send</span>
            </button>
          </div>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Main;
