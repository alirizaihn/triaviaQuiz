import React, { useState, useEffect, useMemo, useRef } from 'react';
import { connect } from 'react-redux';
import CorrectCard from '../components/correctCard/correctCard';
import FailedCard from '../components/failedCard/failedCard';
import Header from '../components/header/header'
import Landing from './landing/landing';
import QuestionDisplay from './questionDisplay/questionDisplay';
import { setIndex, setSelectedOptions, clearStore, fetchQuestions, setScore } from '../store/action'
import TimesUpCard from '../components/timesUpCard/timesUpCard';
const STEP_LANDING = 0;
const STEP_START = 1;
const STEP_CORRECT = 2;
const STEP_WRONG = 3;
const TIMES_UP = 4;

const MainContainer = ({ index, questions, selectedOptions, score, setIndex, setSelectedOptions, fetchQuestions, setScore }) => {
    const [step, setStep] = useState(STEP_LANDING);
    const [remainingTime, setRemainingTime] = useState(15);
    const [timerReset, setTimerReset] = useState(false);
    const prevScoreRef = useRef();

    useEffect(() => {

        if (selectedOptions?.value === 'correct') {
            setStep(STEP_CORRECT);
            setScore(score + (2 * remainingTime))
            setIndex(index + 1)
        }
        else if (selectedOptions?.value === 'incorrect') {
            setStep(STEP_WRONG)
        }
    }, [selectedOptions])

    useEffect(() => {
        if (remainingTime == "00") {
            setStep(TIMES_UP)
        }
    }, [remainingTime])

    useEffect(() => {
        if (questions.length > 0) {
            setStep(1)
        }
    }, [questions?.length])


    useEffect(() => {
        prevScoreRef.current = score
    }, [score])

    const renderPages = useMemo(() => {
        if (step === STEP_START) {
            return (
                <div className="p-3">
                    {questions.length > 0 && <QuestionDisplay questions={questions} index={index} setIndex={setIndex} setSelectedOptions={setSelectedOptions} onReset={setTimerReset} />}
                </div>
            )
        }
        if (step === STEP_WRONG) {
            return (
                <div className="d-flex justify-content-center p-3">
                    {<FailedCard onReset={setTimerReset} />}
                </div>
            )
        }
        if (step === STEP_CORRECT) {
            return (
                <div className="d-flex justify-content-center p-3">
                    {questions.length > 0 && <CorrectCard setStep={setStep} total={score} score={score - prevScoreRef.current} />}
                </div>
            )
        }
        if (step === TIMES_UP) {
            return (
                <div className="d-flex justify-content-center p-3">
                    {questions.length > 0 && <TimesUpCard setStep={setStep} total={score} score={score - prevScoreRef.current} />}
                </div>
            )
        }
    }, [step])

    if (step === STEP_LANDING) {
        return (
            <Landing setStep={setStep} fetchQuestions={fetchQuestions}></Landing>
        )
    }
    return (
        <>
            <Header index={index} questionCount={questions?.length} score={score} timerReset={timerReset} getTime={setRemainingTime} step={step} />
            {renderPages}
        </>
    )
}

const mapStateToProps = store => {
    return {
        index: store.index,
        questions: store.questions,
        selectedOptions: store.selectedOptions,
        score: store.score
    }
};
const dispatchToProps = { setIndex, setSelectedOptions, clearStore, fetchQuestions, setScore }

export default connect(mapStateToProps, dispatchToProps)(MainContainer);