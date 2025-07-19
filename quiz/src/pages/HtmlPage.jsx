function HtmlPage() {
    return (

        <>
            <div className="quiz-container">
                <p className="welcome-text">Best of Luck </p>
                <p className="instruction-text">Choose your today's topic</p>

                <div className="options">
                    <label>
                        <input type="radio" value="question1" name="question1 " />ques
                    </label>
                    <label>
                        <input type="radio" value="question2" name="question1 " />ques
                    </label>
                    <label>
                        <input type="radio" value="question3" name="question1 " />ques
                    </label>


                </div>

                <button className="start-button">Check</button>
                <p></p>
            </div>
        </>


    );
}

export default HtmlPage

