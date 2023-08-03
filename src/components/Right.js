import styled from "styled-components";
const Right = (props) => {
  return (
    <div className="mx-14 md:mx-2">
      <div className="text-center overflow-hidden mb-2 bg-slate-50 rounded relative shadow-xl p-3">
        <div className="items-center flex justify-between text-sm font-semibold text-gray-400">
          <h2>Add to your feed</h2>
          <img src="feed-icon.svg" alt="" />
        </div>
        <div className="mt-4">
          <li className="flex items-center my-3 relative text-sm">
            <a></a>
            <div className=" flex flex-col ">
              <span>#Linkedin</span>
              <button className="bg-gray-300 rounded-sm p-1 hover:bg-slate-200 shadow-l">
                Follow
              </button>
            </div>
          </li>
          <li className="flex items-center my-3 relative text-sm">
            <a></a>
            <div className=" flex flex-col ">
              <span>#Video</span>
              <button className="bg-gray-300 rounded-sm p-1 px-2 hover:bg-slate-200 shadow-l">
                Follow
              </button>
            </div>
          </li>
        </div>
        <div className="items-center flex text-sky-600 text-sm">
          View all recommendations
          <img src="right-icon.svg" alt=""/>
        </div>
        <div></div>
        <div>
          <img src=""/>
        </div>
      </div>
    </div>
  );
};
const Rightside = styled.div``;
export default Right;
