import './HomePage.css'

function HomePage({option, setOption}) {
  return (
    
      <>
  <div className="quiz-container">
    <p className="welcome-text">Welcome to the quiz app</p>
    <p className="instruction-text">Choose your today's topic</p>

    <div className="topic-buttons">
      <button className="topic-button" onClick={setOption('HTML')}>HTML</button>
      <button className="topic-button" onClick={setOption('CSS')}>CSS</button>
      <button className="topic-button" onClick={setOption('JavaScript')}>JavaScript</button>
    </div>

    <button className="start-button"> Start the Quiz</button>
    <p></p>
  </div>
</>


  );
}

export default HomePage;