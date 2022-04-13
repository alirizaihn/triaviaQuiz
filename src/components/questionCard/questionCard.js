import React from 'react'
import './questionCard.css'
const QuestionCard = ({question, options, setSelectedOptions}) => {
  return (
    <div className="card-body">
               <div className="h4 mb-5" dangerouslySetInnerHTML={{ __html: question }}></div> 
                <div className="col">
                    {options?.map((option, index) => (
                        <div key={index} >
                            <button type="button" className="btn btn-dark w-75 m-1" key={index} onClick={()=> setSelectedOptions(option)}>{ <div dangerouslySetInnerHTML={{ __html: option.label }}></div> }</button>
                        </div>
                    ))}
                </div>
            </div>
  )
}

export default QuestionCard
