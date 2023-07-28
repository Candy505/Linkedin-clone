const RightN = () => {
  return (
    <div className="mr-40 md:mr-1 md:-mt-10">
      <div className="overflow-hidden mb-8 mx-2 bg-slate-50 rounded relative shadow-xl border-solid  border border-gray-300 flex justify-between p-3">
        <span className="text-gray-600">No pending Invitations </span>
        <span className="text-gray-400 font-semibold">Manage</span>
      </div>
      <div className="text-center overflow-hidden mb-8 mx-2 bg-slate-50 rounded relative shadow-l border-solid  border border-gray-300 ">
        <p className="pt-3 text-left pl-3 sm:text-center">People You may Know</p>
        <div className="flex sm:flex-col sm:items-center pt-6">
          <div className="text-center overflow-hidden mb-8 mx-2 bg-slate-50 rounded relative shadow-xl border-solid  border border-gray-300 w-60 h-80">
            <div className="py-12 ">
              <div className="bg-gradient-to-r from-neutral-500 to-gray-400 bg-center h-20 -mt-12"></div>
              <a href="/">
                <img
                  src="medha.jpeg"
                  alt=""
                  className=" box-border h-16 w-16 bg-clip-content bg-white border-2 rounded-full -mt-10 mx-auto mb-12 "
                />
                <div className="text-base font-semibold -mt-10">
                  Medha Bisht
                  <p className="text-sm font-thin p-2">
                    Student at Graphic Era Deemed to be University
                  </p>
                </div>
              </a>
              <div className="pl-2 mt-10 ">
                <button className="text-sky-800 mt-1 text-base border-solid border p-2 px-16 rounded-3xl hover:bg-sky-100 font-semibold flex items-center ">
                  <img src="widget-icon.svg" alt="" className="pr-2 " />
                  Connect
                </button>
              </div>
            </div>
          </div>
          <div className="text-center overflow-hidden mb-8 mx-2 bg-slate-50 rounded relative shadow-xl border-solid  border border-gray-300 w-60 h-80">
            <div className="py-12 ">
              <div className="bg-gradient-to-r from-neutral-500 to-gray-400 bg-center h-20 -mt-12"></div>
              <a href="/">
                <img
                  src="riya.jpeg"
                  alt=""
                  className=" box-border h-16 w-16 bg-clip-content bg-white border-2 rounded-full -mt-10 mx-auto mb-12 "
                />
                <div className="text-base font-semibold -mt-10">
                  Riya Sharma
                  <p className="text-sm font-thin p-2">
                    Student at Graphic Era Deemed to be University
                  </p>
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
          <div className="text-center overflow-hidden mb-8 mx-2 bg-slate-50 rounded relative shadow-xl border-solid  border border-gray-300 w-60 h-80">
            <div className="py-12 ">
              <div className="bg-gradient-to-r from-neutral-500 to-gray-400 bg-center h-20 -mt-12"></div>
              <a href="/">
                <img
                  src="dheeraj.jpeg"
                  alt=""
                  className=" box-border h-16 w-16 bg-clip-content bg-white border-2 rounded-full -mt-10 mx-auto mb-12 "
                />
                <div className="text-base font-semibold -mt-10">
                  Dheerah Soni
                  <p className="text-sm font-thin p-2">
                    Student at Graphic Era Deemed to be University
                  </p>
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
        </div>
      </div>
    </div>
  );
};
export default RightN;
