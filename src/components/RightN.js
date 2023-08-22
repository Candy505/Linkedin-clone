import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db, storage } from "../firebase";
import { getDownloadURL, ref } from "firebase/storage";

const RightN = () => {
  const [usernames, setUsernames] = useState([]);
  const [status, setStatus] = useState([]);
  const [uid, setUID] = useState([]);
  let [img, setImg] = useState([]);

  useEffect(() => {
    const fetchUsernames = async () => {
      try {
        const usersCollectionRef = collection(db, "users"); // Replace 'users' with your collection name

        const querySnapshot = await getDocs(usersCollectionRef);

        const fetchedUsernames = querySnapshot.docs.map(
          (doc) => doc.data().name
        );
        const fetchedstatus = querySnapshot.docs.map(
          (doc) => doc.data().status
        );
        const fetchedUID = querySnapshot.docs.map((doc) => doc.data().userId);
        setUsernames(fetchedUsernames);
        setStatus(fetchedstatus);
        setUID(fetchedUID);
        //console.log(fetchedUID);
      } catch (error) {
        console.error("Error fetching usernames:", error);
      }
    };

    fetchUsernames();
  }, []);

  return (
    <div className="mr-40 md:mr-1 md:-mt-10">
      <div className="overflow-hidden mb-8 mx-2 bg-slate-50 rounded relative shadow-xl border-solid  border border-gray-300 flex justify-between p-3">
        <span className="text-gray-600">No pending Invitations </span>
        <span className="text-gray-400 font-semibold">Manage</span>
      </div>
      <div className="text-center overflow-hidden mb-8 mx-2 bg-slate-50 rounded relative shadow-l border-solid  border border-gray-300 ">
        <p className="pt-3 text-left pl-3 sm:text-center">
          People You may Know
        </p>

        <div className="grid sm:grid-cols sm:ml-20 sm:items-center pt-6 grid-cols-3 ">
          {usernames.map((username, index) => (
            <div
              key={index}
              className="text-center overflow-hidden mb-8 bg-slate-50 rounded relative shadow-lg border-solid  border border-gray-300 w-60 h-80 mx-2 "
            >
              <div className="py-12 ">
                <div className="bg-gradient-to-r from-neutral-500 to-gray-400 bg-center h-20 -mt-12 "></div>
                <a href="/">
                  <img
                    src="https://img.freepik.com/free-icon/user_318-644324.jpg?t=st=1692651279~exp=1692651879~hmac=6ee016f1b42d20a4ad3c559a30198d9cd26ba01bd9ead5d3a05c3f0e62261c01"
                    alt=""
                    className=" box-border h-16 w-16 bg-clip-content bg-white border-2 rounded-full -mt-10 mx-auto mb-12 "
                  />
                  <div className="text-base font-semibold -mt-10">
                    {username}
                    <p className="text-sm font-thin p-2">{status[index]}</p>
                  </div>
                </a>
                <div className="pl-2 mt-10">
                  <button className="text-sky-800 mt-1 text-base border-solid border p-2 px-16 rounded-3xl hover:bg-sky-100 font-semibold flex items-center">
                    <img src="widget-icon.svg" alt="" className="pr-2 " />
                    Connect
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RightN;
