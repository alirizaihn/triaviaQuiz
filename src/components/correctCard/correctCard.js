import { Button } from "bootstrap"

const CorrectCard = ({setStep, total, score}) => {
  console.log("ddsaasda",total, score)
  return (
    <div className="custom-card justify-content-center w-25" style={{height:"70vh"}}>
      <div className="text-center mb-4">
        <img src={'./check.jpeg'} className="shadow-lg w-50" style={{ borderRadius: "10px" }}></img>
      </div>
      <p className="mb-4">Correct</p>
      <div>
        <p>You have earned {score ?? "-"} points</p>
        <p>Total:{total ?? "-"} point</p>
      </div>
      <button type="button" className="btn btn-success" onClick={() => setStep(1)}>Next Question</button>
    </div>
  )
}

export default CorrectCard
