import {useState} from 'react';
import './App.css';


import HomePage from './components/HomePage.jsx'

function App() {
  const [option, setOption]= useState('');

  return (
    <>
      <HomePage option={option} setOption={setOption} />
    </>
  )
}

export default App
