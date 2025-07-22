import './HomePage.css'
import {useNavigate} from 'react-router'


function HomePage({option, setOption}) {
const Navigate= useNavigate();

function navigateTo(){
  if (option===''){
    alert("Please select the quiz topic");
  }
  if (option==='HTML'){
    Navigate('./HtmlPage');
  }
  else if (option==='CSS'){
    Navigate('./CssPage');
  }
  else if (option==='JavaScript'){
    Navigate('./JavaScriptPage');
  }
 
}
  
  return (
    
      <>
  <div className="homePage-box">
    <p className="welcome-text">Welcome to the quiz app</p>
    <p className="instruction-text">Choose your today's topic</p>

    <div className="topic-buttons">
      <button className="topic-button" onClick={()=>{setOption('HTML')}}>HTML</button>
      <button className="topic-button"onClick={()=>{setOption('CSS')}}>CSS</button>
      <button className="topic-button" onClick={()=>{setOption('JavaScript')}}>JavaScript</button>
    </div>

    <button className="start-button" onClick={()=>{navigateTo()}}> Start the Quiz</button>
    <p></p>
  </div>
</>


  );
}

export default HomePage;


