import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

const JobDetailsPage = () => {
  const { jobId } = useParams();
  console.log(jobId, "checkign jonId");

  const [jobs, setJobs] = useState([]);

  async function fetchJobs() {
    try {
      const allJobs = await axios.get(
        `https://job-posting-app-backend-zeta.vercel.app/jobs/${jobId}`
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

  return (
    <main className="detailMainCon">
      <h1>{jobs.title}</h1>
      <div className="detailBox">
        <p>
          <strong>Company Name:</strong> {jobs.companyName}
        </p>
        <p>
          <strong>Location:</strong> {jobs.location}
        </p>
        <p>
          <strong>Salary:</strong> {jobs.salary}
        </p>
        <p>
          <strong>Job Type:</strong>
          {jobs.jobType}
        </p>
        <p>
          <strong>Description:</strong> {jobs.jobDescription}
        </p>
        <p>
          <strong>Qualifications:</strong>
          {jobs.qualifications}
        </p>
      </div>
    </main>
  );
};

export default JobDetailsPage;
