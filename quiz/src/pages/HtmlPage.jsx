import { useState, useMemo } from 'react';
import { html } from '../data/htmlQuestions'
import './quizPage.css'

function HtmlPage() {
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);

    //this shuffle the answers and adds it to the each question and answers object
    const shuffledQuestions = useMemo(() => {
        return (
            html.map((question) => {
                const options = [...question.incorrect_answers, question.correct_answer];
                options.sort(() => Math.random() - 0.5);
                return { ...question, options };
            })
        )
    }, []);

    //if we change the answer, it updates the answer
    const handleAnswerChange = (index, option) => {
        const updatedAnswer = [...answers];
        updatedAnswer[index] = option;
        setAnswers(updatedAnswer);
    }



    //this function gives the total score once the quiz is submitted 
    const totalScore = () => {
        let correct = 0;
        shuffledQuestions.forEach((question, index) => {
            if (answers[index] === question.correct_answer) {
                correct++;
            }
        })

        setScore(correct);
    }

    return (
        <>
            <div className="quiz-container ">
                <p> For timer </p>
                <p className="instruction-text">Choose your today's topic</p>

                {shuffledQuestions.map((question, index) => {
                    return (
                        <div  className="question-box" key={index}>

                            <p> {question.question}</p>
                            {question.options.map((option, i) => {
                                return (

                                    <label key={i}>
                                        <input type="radio"
                                            value={option}
                                            name={`question${index}`}
                                            checked={answers[index] === option}
                                            onChange={() => {
                                                handleAnswerChange(index, option)
                                            }}
                                        />
                                        {option}

                                    </label>
                                )
                            })}

                        </div>
                    )
                })}
                <div>

                </div>
                <button className="start-button" onClick={totalScore}>Check</button>
                <p> Your score is {score}</p>
            </div>
        </>


    );
}
export default HtmlPage;