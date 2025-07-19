import { useState } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';


import HomePage from './pages/HomePage.jsx'
import HtmlPage from './pages/HtmlPage.jsx'

function App() {
  const [option, setOption] = useState('');

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage option={option} setOption={setOption} />} />
        <Route path='/Htmlpage' element={<HtmlPage />} />

      </Routes>
    </>
  )
}

export default App
