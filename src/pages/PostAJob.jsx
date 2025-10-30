// import React from 'react'

const PostAJob = () => {
  return (
    <main>
    <h1>Post a Job</h1>
    
    <form>
    <div>
    <label htmlFor="tit">Job Title: </label>
    <input type="text" id="tit"/>
    </div>

    <div>
    <label htmlFor="com">Company Name: </label>
    <input type="text" id="com"/>
    </div>

    <div>
    <label htmlFor="loc">Location: </label>
    <input type="text" id="loc"/>
    </div>

    <div>
    <label htmlFor="sal">Salary: </label>
    <input type="number" id="sal"/>
    </div>

    <div>
    <label htmlFor="typ">Job Type: </label>
    <input type="text" id="typ"/>
    </div>

    <div>
    <label htmlFor="des">Job Description: </label>
    <input type="text" id="des"/>
    </div>

    <div>
    <label htmlFor="des">Job Qualifications: </label>
    <input type="text" id="des"/>
    </div>
    <br/>

    <button>Post Job</button>
    </form>
   

    </main>
  )
}

export default PostAJob;