const LeftJ = () => {
  return (
    <div className="ml-40 md:mx-1">
      <div className="text-left overflow-hidden mb-8 mx-1 bg-slate-50 rounded-lg relative shadow-xl border-solid  border border-gray-300">
        <div className="py-4  leading-10">
          <p className="text-gray-700 mb-3 ml-4">Manage my network</p>
          <div className="flex flex-col">
            <div className="pb-4">
              <a className="pt-1 pb-1 pr-3 pl-3 text-gray-500 text-base hover:bg-gray-200 flex items-center">
                <img src="item-icon.svg" alt="" className="mr-2 w-6 h-6" />
                <span>My Jobs</span>
              </a>
            </div>
            <div className="pb-4">
              <a className="pt-1 pb-1 pr-3 pl-3 text-gray-500 text-base hover:bg-gray-200 flex items-center">
                <img
                  src="nav-notifications.svg"
                  alt=""
                  className="mr-2 w-6 h-6"
                />
                <span>Job alerts</span>
              </a>
            </div>
            <div className="pb-4">
              <a className="pt-1 pb-1 pr-3 pl-3 text-gray-500 text-base hover:bg-gray-200 flex items-center">
                <img src="qualification.png" alt="" className="mr-2 w-5.5 h-6" />
                <span>Skill Assessments</span>
              </a>
            </div>
            <div className="pb-4">
              <a className="pt-1 pb-1 pr-3 pl-3 text-gray-500 text-base hover:bg-gray-200 flex item-center ">
                <img src="assessment.png" alt="" className="mr-2 w-7 h-7" />
                <span>Interview prep</span>
              </a>
            </div>
            <div className="pb-4">
              <a className="pt-1 pb-1 pr-3 pl-3 text-gray-500 text-base hover:bg-gray-200 flex item-center">
                <img src="curriculum.png" alt="" className="mr-2 w-6 h-6" />
                <span>Resume Builder</span>
              </a>
            </div>
            <div className="pb-4">
              <a className="pt-1 pb-1 pr-3 pl-3 text-gray-500 text-base hover:bg-gray-200 flex item-center">
                <img src="youtube.png" alt="" className="mr-2 w-6 h-6" />
                <span>Job seeker giudance</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftJ