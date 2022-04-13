import React from 'react'

const TimesUpCard = () => {
  return (

      <div className="custom-card justify-content-center w-25" style={{ height: "70vh" }}>
        <div className="text-center">
          <img src={'./timesUp.png'} className="shadow-lg w-75" style={{ borderRadius: "10px" }}></img>
        </div>
        <p>Time's Up !</p>
        <button type="button" className="mt-5 btn btn-danger" onClick={() => {
         window.location.reload();
        }}>
          Try Again
        </button>
      </div>

  )
}
export default TimesUpCard
