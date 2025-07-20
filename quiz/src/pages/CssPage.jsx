import { CSS } from '../data/cssQuestions'

function CssPage() {
    return (
        <>
            <div className="html-quiz-container ">
                <p> For timer </p>
                <p className="instruction-text">Choose your today's topic</p>
                
                <div className="options">
                    {CSS.map((question, index) => {
                        //...is a spread operator which adds correct_answer to the array incorrect_answers
                        const allOptions = [...question.incorrect_answers, question.correct_answer];
                        //to shuffle the answers
                        allOptions.sort(() =>
                            Math.random() - 0.5);

                        return (
                            <div key={index}>
                                <p>{question.question} </p>

                                {allOptions.map((option, i) => {
                                    return (
                                        <>
                                            <label key={i}>
                                                <input type="radio" value={option} name={`question${index}`} />{option}
                                            </label>

                                        </>
                                    )
                                })}
                            </div>
                        )
                    })}


                </div>

                <button className="start-button">Check</button>
                <p></p>
            </div>
        </>


    );
}

export default CssPage

