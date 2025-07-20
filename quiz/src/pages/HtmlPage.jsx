import { useState, useMemo } from 'react';
import {html} from '../data/htmlQuestions'

function HtmlPage() {
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);

    // Shuffle options only once
    const shuffledQuestions = useMemo(() => {
        return html.map(q => {
            const options = [...q.incorrect_answers, q.correct_answer];
            options.sort(() => Math.random() - 0.5);
            return { ...q, options };
        });
    }, []);

    const handleAnswerChange = (i, option) => {
        const updatedAnswers = [...answers];
        updatedAnswers[i] = option;
        setAnswers(updatedAnswers);
    };

    const totalScore = () => {
        let correct = 0;
        shuffledQuestions.forEach((question, index) => {
            if (answers[index] === question.correct_answer) {
                correct++;
            }
        });
        setScore(correct);
    };

    return (
        <>
            <div className="html-quiz-container ">
                <div className="options">
                    {shuffledQuestions.map((question, index) => (
                        <div key={index}>
                            <p>{question.question}</p>
                            {question.options.map((option, i) => (
                                <label key={i}>
                                    <input
                                        type="radio"
                                        value={option}
                                        name={`question${index}`}
                                        checked={answers[index] === option}
                                        onChange={() => handleAnswerChange(index, option)}
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    ))}
                </div>
                <button className="start-button" onClick={totalScore}>Check</button>
                {score !== null && <p>Your score is {score}</p>}
            </div>
        </>
    );
}

export default HtmlPage;