import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';

const DisplayJobs = () => {
  const [jobs, setJobs] = useState([]);

  async function fetchJobs() {
    try {
      const allJobs = await axios.get(
        "https://job-posting-app-backend-zeta.vercel.app/jobs"
      );
      console.log(allJobs.data);
      setJobs(allJobs.data);
    } catch (error) {
      console.log(error, "error");
    }
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  function handleDelete(e) {
    const jobId = e.target.value;
    console.log(jobId, "checking deleteId");
    try {
      const delJob = axios.delete(
        `https://job-posting-app-backend-zeta.vercel.app/jobs/delete/${jobId}`
      );
      console.log(delJob);

      setJobs((prvJob) => prvJob.filter((job) => job._id !== jobId));
      toast.success("Job deleted successfully!", {
        autoClose: 3000,
      });
    } catch (error) {
      throw error;
    }
  }

  return (
    <main className="mainCon">
      <h1  className="tex" >All Jobs</h1>
      <div className="allJobsCon">
        {jobs.map((job) => (
          <div key={job._id} className="JobCard">
            <h2>{job.title}</h2>
            <p>
              <strong>Company name: </strong>
              {job.companyName}
            </p>
            <p>
              <strong>Location: </strong>
              {job.location}
            </p>
            <p>
              <strong>Job Type: </strong>
              {job.jobType}
            </p>
            <div className="btns">
            <Link to={`/jobs/${job?._id}`}>
              <button className="seeDetail">See Details</button>
              </Link>
              <button className="delete" value={job._id} onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default DisplayJobs;
