const Profile = () => {
  return (
    <div className="mt-6 mx-40 md:ml-1 md:mx-1 pt-20">
      <div className="text-center overflow-hidden mb-8 mx-2 bg-slate-50 rounded relative shadow-xl border-solid  border border-gray-300">
        <div className="py-12">
          <div className="bg-gradient-to-r from-neutral-500 to-gray-400 bg-center h-56 md:h-24 -mt-12 block ">
            <div className="flex justify-end p-4">
              <button>
                <img src="photo-camera.png" alt="" className="w-6 " />
              </button>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <img
                src="photo.svg"
                alt=""
                className=" box-border h-20 w-20 bg-clip-content bg-white border-2 rounded-full -mt-10 ml-8 mb-12 "
              />

              <button className="hover:bg-gray-300 hover:rounded-full m-4 ">
                <img src="edit.png" alt="" className="w-6 m-3" />
              </button>
            </div>
            <div className="text-base font-semibold -mt-10 text-left pl-8">
              <a
                href="/profile"
                className="hover:underline hover:text-sky-800 hover:duration-100 "
              >
                XYZ
              </a>
            </div>
          </div>

          <div className="text-gray-600 mt-1 text-sm font-normal text-left pl-8">
            Employee at Amazon
          </div>
          <div className="text-left pl-8 mt-1 text-sky-500 font-semibold">
            <a
              className="hover:underline hover:text-sky-600 hover:duration-100 text-sm "
              href="/"
            >
              100 connections
            </a>
          </div>
        </div>
      </div>
      <div className="text-left overflow-hidden -mt-6 mb-8 mx-2 bg-slate-50 rounded relative shadow-xl border-solid  border border-gray-300 pt-2  flex flex-col ">
        <div>
          <span className="text-lg pl-4 font-semibold">Analytics</span>
          <span className="flex items-center text-sm text-gray-500">
            <img src="eye.png" alt="" className="w-4 h-4 ml-4 mr-2" /> Private
            to you
          </span>
          <span className="flex items-center text-sm pt-1 pb-3">
            <img src="nav-network.svg" alt="" className="ml-4 mr-2" />3 profile
            views
          </span>
          <span className="flex items-center text-sm pt-1 pb-3">
            <img src="search-icon.svg" alt="" className="ml-4 mr-2 w-5" />
            search appearances
          </span>
        </div>
      </div>
      <div className="text-left overflow-hidden -mt-6 mb-8 mx-2 bg-slate-50 rounded relative shadow-xl border-solid  border border-gray-300 pt-2  flex flex-col ">
        <div>
          <span className="text-lg pl-4 font-semibold flex justify-between">
            Activity
            <button className="hover:bg-gray-300 hover:rounded-full mr-2">
              <img src="edit.png" alt="" className="w-6 m-1" />
            </button>
          </span>
          <span className="items-center text-sm text-blue-400 ml-4 ">
            100 followers
          </span>
          <div className="pl-4 pt-2 border-b border-b-gray-300 border-solid pb-5">
            <button className="text-sky-600 mt-1 text-sm border-solid border p-1 px-4 rounded-3xl hover:bg-sky-100 font-semibold flex items-center ">
              create a post
            </button>
          </div>
        </div>
        <div className="items-center flex text-gray-600 text-sm hover:bg-gray-200 p-2">
          View all recommendations
          <img src="right-icon.svg" alt="" />
        </div>
      </div>
      <div className="text-left overflow-hidden -mt-6 mb-8 mx-2 bg-slate-50 rounded relative shadow-xl border-solid  border border-gray-300 pt-2  flex flex-col ">
        <span className="text-lg pl-4 font-semibold">
          Education
          <div className="flex justify-end -mt-6">
            <button className="hover:bg-gray-300 hover:rounded-full mr-3">
              <img src="plus-icon.svg" alt="" className="w-6 m-1" />
            </button>
            <button className="hover:bg-gray-300 hover:rounded-full mr-3">
              <img src="edit.png" alt="" className="w-6 m-1" />
            </button>
          </div>
        </span>
        <div className="items-center flex text-lg  hover:text-sky-600 px-4 pt-4 hover:underline">
          <img src="mit.jpeg" alt="" className="w-14 mr-3" /> MIT University
        </div>
        <div className=" pb-5 ml-20">
          <button className="text-gray-500 mt-1 text-base border-solid border p-1 px-4 rounded-3xl hover:bg-gray-200 font-semibold flex items-center ">
            Following
          </button>
        </div>
      </div>
    </div>
  );
};
export default Profile;
