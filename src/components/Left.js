const Left = (props) => {
  return (
    <div className="ml-40">
      <div className="text-center overflow-hidden mb-8 mx-2 bg-slate-50 rounded relative shadow-xl border-solid  border border-gray-300">
        <div className="py-12">
          <div className="bg-gradient-to-r from-neutral-500 to-gray-400 bg-center h-20 -mt-12"></div>
          <a href="/">
            <img
              src="photo.svg"
              alt=""
              className=" box-border h-16 w-16 bg-clip-content bg-white border-2 rounded-full -mt-10 mx-auto mb-12 "
            />
            <div className="text-base font-semibold -mt-10">
              Welcome, there!
            </div>
          </a>
          <a href="/">
            <div className="text-sky-500 mt-1 text-sm font-normal border-solid  border-b border-b-gray-300 pb-4">
              Add a photo
            </div>
          </a>
        </div>
        <div className="border-solid  border-b border-b-gray-300 -mt-8 pb-4">
          <a
            className="flex justify-between items-center px-4 py-1 hover:bg-gray-200"
            href="/"
          >
            <div className="flex flex-col text-left">
              <span className="text-sm font-normal text-gray-400">
                Connections
              </span>
              <span className="text-sm font-semibold text-gray-800 ">
                Grow your network
              </span>
            </div>
            <img src="widget-icon.svg" alt="" />
          </a>
        </div>
        <div className="text-left p-3 hover:bg-gray-200">
          <span className="flex text-xs font-semibold">
            <img src="item-icon.svg" alt="" className="" />
            My Items
          </span>
        </div>
      </div>
      <div className="text-left overflow-hidden -mt-6 mb-8 mx-2 bg-slate-50 rounded relative shadow-xl border-solid  border border-gray-300 pt-2  flex flex-col ">
        <div className="pb-2">
        <a className="pt-1 pb-1 pr-3 pl-3 text-sm hover:text-blue-600">
          <span>Groups</span>
        </a>
        </div>
        <a className="pt-1 pb-1 pr-3 pl-3 text-sm hover:text-blue-600 pb-2">
          <span className="flex justify-between">
            Events
            <img src="plus-icon.svg" alt="" />
          </span>
        </a>
        <div className=" border-solid border-b border-b-gray-300 pb-2">
          <a className="pt-1 pb-1 pr-3 pl-3 text-sm hover:text-blue-600 ">
            <span>Follow Hashtags</span>
          </a>
        </div>
        <a className="pt-1 pb-1 pr-3 pl-3 text-sm hover:bg-gray-200 text-gray-500">
          <span>Discover more</span>
        </a>
      </div>
    </div>
  );
};
export default Left;
