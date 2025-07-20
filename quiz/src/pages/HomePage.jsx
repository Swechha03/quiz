import './HomePage.css'
import {useNavigate} from 'react-router'

function HomePage({setOption}) {

  const Navigate= useNavigate();
  return (
    
      <>
  <div className="quiz-container">
    <p className="welcome-text">Welcome to the quiz app</p>
    <p className="instruction-text">Choose your today's topic</p>
    <p> trail </p>

    <div className="topic-buttons">
      <button className="topic-button" onClick={()=>{setOption('HTML')}}>HTML</button>
      <button className="topic-button"onClick={()=>{setOption('CSS')}}>CSS</button>
      <button className="topic-button" onClick={()=>{setOption('JavaScript')}}>JavaScript</button>
    </div>

    <button className="start-button" onClick={()=>{Navigate('./HtmlPage')}}> Start the Quiz</button>
    <p></p>
  </div>
</>


  );
}

export default HomePage;