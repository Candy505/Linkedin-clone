import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Jobslist() {

  const [jobs, setJobs] = useState([]);

  const fetchJobListings = async () => {
    const options = {
      method: 'GET',
      url: 'https://remote-jobs-api.p.rapidapi.com/jobs',
      params: {
        category: 'engineering'
      },
      headers: {
        'X-RapidAPI-Key': 'c308b3ff5dmsh0bbf423bc38b407p1b9aadjsna8ac61f26f41',
        'X-RapidAPI-Host': 'remote-jobs-api.p.rapidapi.com'
      }
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setJobs(response.data.items)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
  //  fetchJobListings();
  }, []);

  return (
    <> 
    
    <div className="overflow-hidden mb-8 mx-2 bg-slate-50 rounded relative shadow-l border-solid  border border-gray-300 ">
              <p className="pt-3 text-left pl-3  text-xl sm:text-center">
                Still hiring
              </p>
              <p className="text-left text-sm text-gray-500 pl-3 sm:text-center">
                Jobs you may have missed
              </p>
            </div>
      
        {jobs.map(job => (
          <div key={job.id}>
            <div className="overflow-hidden mb-8 mx-2 bg-slate-50 rounded relative shadow-l border-solid  border border-gray-300 ">
            <div className="p-4 flex pt-8 border-solid  border-b border-b-gray-300 hover:bg-gray-200">
          <img src={job.company_logo} alt="" className="w-16 h-16" />
          <div className="flex flex-col pl-3 justify-between ">
            <div className="">
              <span className="text-base text-sky-400 flex">
                {job.title}
                <img
                  src="bookmark.png"
                  className="w-5 h-6 ml-56 md:ml-56"
                  alt=""
                />
              </span>
              <span className="text-base text-black flex">{job.company_name}</span>
            </div>
            <span className="text-sm text-thin text-gray-500 ">
              {job.location}
            </span>
            <span className="text-sm text-thin text-gray-500 ">
              {job.date}
            </span>
           
          </div>
        </div>
           
          </div>
          </div>
  
        ))}
      
    </>
  )
}

export default Jobslist

