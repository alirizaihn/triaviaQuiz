import React, { useState } from 'react'
import '../questionDisplay/questionDisplay.css'
const Landing = ({ setStep, fetchQuestions }) => {
  const [filter, setFilter] = useState({ difficulty:null, type:null});

  return (
    <div className="vh-100 align-items-lg-center d-flex justify-content-center p-3">
      <div className="custom-card justify-content-center w-25" style={{ height: "70vh" }}>
        <div className="text-center">
          <img src={'./image.png'} className="shadow-lg w-75" style={{ borderRadius: "10px" }}></img>
        </div>
        <p>A TRIVIAL GAME</p>

        <div>
          <div className="mb-2">
            <label>Select Difficulty</label>
            <select className="form-select" aria-label="Select Type" onChange={(e) => setFilter(p => ({...p, difficulty:e.target.value}))}>
              <option value={''} >Any Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div>
            <label>Select Type:</label>
            <select className="form-select" aria-label="Select Type" onChange={(e) => setFilter(p => ({ ...p, type:e.target.value}))}>
              <option value={''} >Any Type</option>
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True/False</option>

            </select>
          </div>
          </div>
        <button type="button" className="mt-5 btn btn-success" onClick={(e) => {
          fetchQuestions(filter);
          //setStep(1)
        }}>
          GET STARTED
        </button>
      </div>
    </div>
  )
}

export default Landing
