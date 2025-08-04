import { JavaScript} from '../data/javaScriptQuestions.js'
import { useState, useMemo } from 'react'
import './quizPage.css'

function JavaScriptPage() {

    
    const [score, setScore] = useState(0);
    const [answers, setAnswers]=useState([]);
    

    //this shuffle the answers and adds it to the each question and answers object
    const shuffledQuestions = useMemo(() => {
        return (
            JavaScript.map((question) => {
                const options = [...question.incorrect_answers, question.correct_answer];
                options.sort(() => Math.random() - 0.5);
                return { ...question, options };
            })
        )
    }, []);

    const handleAnswerChange = (index, option) => {
        const updatedAnswer = [...answers];
        updatedAnswer[index] = option;
        setAnswers(updatedAnswer);
    }

    

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
                        <div key={index}>

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

export default JavaScriptPage;

