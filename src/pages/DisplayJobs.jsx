import axios from 'axios';
import { useState, useEffect } from 'react';

const DisplayJobs = () => {
    const [jobs, setJobs] = useState([])

    async function fetchJobs(){
        try{
            const allJobs = await axios.get("https://job-posting-app-backend-zeta.vercel.app/jobs")
            console.log(allJobs.data);
            setJobs(allJobs.data);
        } catch(error){
            console.log(error, "error");
        }
    }

    useEffect(() => {
        fetchJobs();
    }, [])



    
  return (
    <main>
    <h1>All Jobs</h1>
        <div className="allJobsCon">
        {jobs.map((job) => (
            <div className="JobCard">
                <h2>{job.title}</h2> 
                <p><strong>Company name: </strong>{job.companyName}</p>
                <p><strong>Location: </strong>{job.location}</p>
                <p><strong>Job Type: </strong>{job.jobType}</p>
                <div className="btns">
                    <button>See Details</button>
                    <button>Delete</button>
                </div>
            </div>
        ))}
           
        </div>
    </main>
  )
}

export default DisplayJobs