import { useEffect, useState } from "react"

const FailedCard = () => {
  const [src, setSrc] = useState({ image: './xImage.png', label:'Incorrect !', showButton:false});
  setTimeout(() => {
    setSrc({image:'./gameOver.png', label:'Game Over !', showButton:true})
  }, 1000);
  return (
    <div className="custom-card justify-content-center w-25" style={{ height: "70vh" }}>
      <div className="text-center mb-4">
        <img src={src.image} className="shadow-lg w-50" style={{ borderRadius: "10px" }}></img>
      </div>
      <p className="mb-4">{src.label}</p>
      <div>
      </div>
     {src.showButton && <button type="button" className="btn btn-success" onClick={() => window.location.reload()}>Try Again</button>}
    </div>
  )
}

export default FailedCard;
