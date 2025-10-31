import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostAJob = () => {
  const [form, setForm] = useState({
    title: "",
    companyName: "",
    location: "",
    salary: "",
    jobType: "",
    jobDescription: "",
    jobQualification: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value, "checkign");
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://job-posting-app-backend-zeta.vercel.app/jobs",
        JSON.stringify(form),
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Job added successfully", res.data);

      toast.success("Job added successfully!", {
        autoClose: 3000,
      });

      setForm({
        title: "",
        companyName: "",
        location: "",
        salary: "",
        jobType: "",
        jobDescription: "",
        qualifications: "",
      });
    } catch (error) {
      console.log("Error Submitting Jobs", error);

      if (error.response) {
        console.error("Server error:", error.response.data);
        console.error("Status:", error.response.status);
      } else if (error.request) {
        console.error("Network error:", error.request);
        alert("Network error: Please check your internet connection.");
      } else {
        console.error("Error:", error.message);
        alert(` Error: ${error.message}`);
      }
    }
  }

  return (
    <main>
      <h1 style={{ padding: "3rem" }}>Post a Job</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          padding: "3rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <div>
          <label htmlFor="tit" className="lable">
            Job Title:{" "}
          </label>
          <input
            type="text"
            id="tit"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="com" className="lable">
            Company Name:{" "}
          </label>
          <input
            type="text"
            id="com"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="loc" className="lable">
            Location:{" "}
          </label>
          <input
            type="text"
            id="loc"
            name="location"
            value={form.location}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="sal" className="lable">
            Salary:{" "}
          </label>
          <input
            type="number"
            id="sal"
            name="salary"
            value={form.salary}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="typ" className="lable">
            Job Type:{" "}
          </label>
          <select
            type="text"
            id="typ"
            name="jobType"
            value={form.jobType}
            onChange={handleChange}
          >
            <option value="">Full-time (On-site)</option>
            <option value="Full-time (On-site)">Full-time (On-site)</option>
            <option value="Full-time (On-site)">Part-time (On-site)</option>
            <option value="Full-time (On-site)">Full-time (Remote)</option>
            <option value="Part-time (Remote)">Part-time (Remote)</option>
          </select>
        </div>

        <div>
          <label htmlFor="des" className="lable">
            Job Description:{" "}
          </label>
          <input
            type="text"
            id="des"
            name="jobDescription"
            value={form.jobDescription}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="des" className="lable">
            Job Qualifications:{" "}
          </label>
          <input
            type="text"
            id="des"
            name="qualifications"
            value={form.qualifications}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "10rem",
            backgroundColor: "oklch(62.3% 0.214 259.815)",
          }}
        >
          Post Job
        </button>
      </form>
    </main>
  );
};

export default PostAJob;
