import './App.css'
import {Routes, Route} from 'react-router-dom'
import PostAJob from './pages/PostAJob'
import DisplayJobs from './pages/DisplayJobs'
import JobDetailsPage from './pages/JobDetailsPage'
import { ToastContainer, toast } from "react-toastify";
import Navbar from './components/Navbar';


function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<DisplayJobs/>}></Route>
      <Route path="/postJob-Page" element={<PostAJob/>}></Route>
      <Route path="/jobs/:jobId" element={<JobDetailsPage/>}></Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  )
}

export default App;
