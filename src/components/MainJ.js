import Jobs from "./Jobs";
import Jobslist from "./jobsPage/Jobslist";

const MainJ = () => {
  return (
    <div className="mr-40 md:mr-1 md:-mt-10">
      <div className="overflow-hidden mb-8 mx-2 bg-slate-50 rounded relative shadow-xl border-solid  border border-gray-300 p-3">
        <span className="text-gray-600">Suggested job searches </span>
        <div className="flex justify-between">
          <button className="text-sky-600 mt-1 text-xs border-solid border p-1 px-4 rounded-3xl hover:bg-sky-100 font-semibold flex items-center ">
            <img src="search-icon.svg" alt="" className="pr-2" />
            marketing
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
      <Jobslist/>
    </div>
  );
};
export default MainJ;
