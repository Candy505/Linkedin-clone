const MainJ = () => {
  return (
    <div className="mr-40 md:mr-1 md:-mt-10">
      <div className="overflow-hidden mb-8 mx-2 bg-slate-50 rounded relative shadow-xl border-solid  border border-gray-300 p-3">
        <span className="text-gray-600">Suggested job searches </span>
        <div className="flex justify-between">
          <button className="text-sky-600 mt-1 text-xs border-solid border p-1 px-4 rounded-3xl hover:bg-sky-100 font-semibold flex items-center ">
            <img src="search-icon.svg" alt="" className="pr-2" />
            hr
          </button>
          <button className="text-sky-600 mt-1 text-xs border-solid border p-1 px-4 rounded-3xl hover:bg-sky-100 font-semibold flex items-center ">
            <img src="search-icon.svg" alt="" className="pr-2" />
            legal
          </button>
          <button className="text-sky-600 mt-1 text-xs border-solid border p-1 px-4 rounded-3xl hover:bg-sky-100 font-semibold flex items-center ">
            <img src="search-icon.svg" alt="" className="pr-2" />
            sales
          </button>
          <button className="text-sky-600 mt-1 text-xs border-solid border p-1 px-4 rounded-3xl hover:bg-sky-100 font-semibold flex items-center ">
            <img src="search-icon.svg" alt="" className="pr-2" />
            amazon
          </button>
        </div>
        <button className="text-sky-600 mt-1 text-xs border-solid border p-1 px-4 rounded-3xl hover:bg-sky-100 font-semibold flex items-center mt-2 ">
          <img src="search-icon.svg" alt="" className="pr-2" />
          google
        </button>
      </div>
      <div className="overflow-hidden mb-8 mx-2 bg-slate-50 rounded relative shadow-l border-solid  border border-gray-300 ">
        <p className="pt-3 text-left pl-3  text-xl sm:text-center">
          Still hiring
        </p>
        <p className="text-left text-sm text-gray-500 pl-3 sm:text-center">
          Jobs you may have missed
        </p>
        <div className="p-4 flex pt-8 border-solid  border-b border-b-gray-300 hover:bg-gray-200">
          <img src="team.jpeg" alt="" className="w-16 h-16" />
          <div className="flex flex-col pl-3 justify-between ">
            <div className="">
              <span className="text-base text-sky-600 flex">
                TeamHub Developer
                <img
                  src="bookmark.png"
                  className="w-5 h-6 ml-56 md:ml-56"
                  alt=""
                />
              </span>
            </div>
            <span className="text-sm text-normal">Cyclotron, Inc.</span>
            <span className="text-sm text-thin text-gray-500 ">
              India(remote)
            </span>
          </div>
        </div>
        <div className="p-4 flex pt-8 border-solid  border-b border-b-gray-300 hover:bg-gray-200">
          <img src="flutter.jpeg" alt="" className="w-16 h-16" />
          <div className="flex flex-col pl-3 justify-between ">
            <div>
              <span className="text-base text-sky-600 flex">
                Lead flutter engineer
                <img
                  src="bookmark.png"
                  className="w-5 h-6 ml-56 md:ml-56"
                  alt=""
                />
              </span>
            </div>
            <span className="text-sm text-normal">
              being:my mental health friend
            </span>
            <span className="text-sm text-thin text-gray-500 ">
              Bengaluru, Karnantaka, India(Remote)
            </span>
          </div>
        </div>
        <div className="hover:bg-gray-200 text-l hover:underline">
          <button className="p-2 text-sky-800 flex items-center ml-4">
            Show more
            <img src="right-icon.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default MainJ;
