import React, { useEffect, useState } from 'react'
import QuestionCard from '../../components/questionCard/questionCard';
import './questionDisplay.css'
const QuestionDisplay = ({ questions, index, setSelectedOptions, onReset  }) => {
useEffect(() => {
    onReset(p => (!p))
}, [])
    const mixArray = (array) => {
        let currentIndex = array.length, randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    const selectedQuestion = questions[index];
    const options = mixArray([...selectedQuestion.incorrect_answers.map(item => ({ label: item, value: 'incorrect' })), { label: selectedQuestion.correct_answer, value:'correct'}])
    return (
        <div className="custom-card">
            <QuestionCard  question={selectedQuestion.question} options={options} setSelectedOptions={setSelectedOptions} ></QuestionCard>
        </div>
    )
}

export default QuestionDisplay;
