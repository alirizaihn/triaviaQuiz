import React from 'react'
import { useEffect } from 'react';
import Timer from '../timer/timer';
import './header.css';
const Header = ({ ref, questionCount, index, score, timerReset, getTime, step }) => {
    const { timer: remainingTime,onReset, stop } = Timer();

    useEffect(() => {
        onReset()
    }, [timerReset])

    useEffect(() => {
       if(step === 2 || step === 3){
           stop()
       }
    }, [step])

    useEffect(() => {
        getTime(remainingTime)
    }, [remainingTime])

    return (
        <div className="header mb-5">
            <span>Question {index + 1 ?? "-"} / {questionCount ?? "-"}</span>
            <div className="col">
                <div className="row">
                   {step === 1 && <span>{score ?? "-"}</span>}
                </div>
                <div className="row">
                    {step === 1 &&   <span>Point</span>}
                </div>
            </div>
            {step === 1 &&  <span>Remaining Time:{remainingTime}</span>}
        </div>
    )
}

export default Header;
