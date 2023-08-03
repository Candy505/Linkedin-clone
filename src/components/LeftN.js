const LeftN = () => {
  return (
    <div className="ml-40 md:mx-1">
      <div className="text-left overflow-hidden mb-8 mx-1 bg-slate-50 rounded-lg relative shadow-xl border-solid  border border-gray-300">
        <div className="py-4  leading-10">
          <p className="text-gray-700 mb-3 ml-4">Manage my network</p>
          <div className="flex flex-col">
            <div className="pb-4">
              <a className="pt-1 pb-1 pr-3 pl-3 text-gray-500 text-base hover:bg-gray-200 flex items-center">
                <img src="nav-network.svg" alt="" className="mr-2 w-6 h-6" />
                <span>Connections</span>
              </a>
            </div>
            <div className="pb-4">
              <a className="pt-1 pb-1 pr-3 pl-3 text-gray-500 text-base hover:bg-gray-200 flex items-center">
                <img
                  src="appointment-book.png"
                  alt=""
                  className="mr-2 w-6 h-6"
                />
                <span> Contacts</span>
              </a>
            </div>
            <div className="pb-4">
              <a className="pt-1 pb-1 pr-3 pl-3 text-gray-500 text-base hover:bg-gray-200 flex items-center">
                <img src="following.png" alt="" className="mr-2 w-6 h-6" />
                <span>Followings & followers</span>
              </a>
            </div>
            <div className="pb-4">
              <a className="pt-1 pb-1 pr-3 pl-3 text-gray-500 text-base hover:bg-gray-200 flex item-center ">
                <img src="group.png" alt="" className="mr-2 w-6 h-6" />
                <span>Groups</span>
              </a>
            </div>
            <div className="pb-4">
              <a className="pt-1 pb-1 pr-3 pl-3 text-gray-500 text-base hover:bg-gray-200 flex item-center">
                <img src="calendar.png" alt="" className="mr-2 w-6 h-6" />
                <span>Events</span>
              </a>
            </div>
            <div className="pb-4">
              <a className="pt-1 pb-1 pr-3 pl-3 text-gray-500 text-base hover:bg-gray-200 flex item-center">
                <img src="hashtag.png" alt="" className="mr-2 w-6 h-6" />
                <span>Hashtags</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftN;
