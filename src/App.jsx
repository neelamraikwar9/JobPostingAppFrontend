import './App.css'
import {Routes, Route} from 'react-router-dom'
import PostAJob from './pages/PostAJob'
import DisplayJobs from './pages/DisplayJobs'
import JobDetailsPage from './pages/JobDetailsPage'


function App() {
  

  return (
    <>
      <Routes>
      <Route path="/" element={<DisplayJobs/>}></Route>
      <Route path="/postJob-Page" element={<PostAJob/>}></Route>
      <Route path="/postJob-Page" element={<PostAJob/>}></Route>
      </Routes>
    </>
  )
}

export default App;
