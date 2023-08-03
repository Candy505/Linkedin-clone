const RightJ = () => {
  return (
    <div className=" mr-10 md:mx-2">
      <div className="text-center overflow-hidden mb-2 bg-slate-50 rounded relative shadow-xl px-3 pb-3">
        <div className="mt-2">
          <div className="flex items-center my-3 relative text-sm">
            <div className=" flex flex-col text-left">
              <span className="text-base">Job seeker guidance</span>
              <span className="text-xs text-gray-600">
                Recommended based on your activity
              </span>
            </div>
          </div>
          <div className="flex items-center my-3 relative text-sm border-solid border-b border-b-gray-400 pb-4">
            <div className=" flex flex-row text-left hover:bg-gray-200 hover:p-1">
              <span>I want to improve my resume</span>
              <img alt="" src="resume.gif" className="rounded-sm w-12 h-8 " />
            </div>
          </div>
        </div>
        <p className="text-sm text-left pb-4">
          Explore our curated guide of expert-led courses, such as how to
          improve your resume and grow your network, to help you land your next
          opportunity.
        </p>
        <button className="items-center flex text-sky-600 text-sm hover:underline">
          show more
          <img src="right-icon.svg" alt="" />
        </button>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default RightJ;
