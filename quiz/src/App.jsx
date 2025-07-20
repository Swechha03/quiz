import { useState } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage.jsx'
import HtmlPage from './pages/HtmlPage.jsx'
import JavaScriptPage from './pages/JavaScriptPage.jsx'
import CssPage from './pages/CssPage.jsx';

function App() {
  const [option, setOption] = useState('');

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage option={option} setOption={setOption} />} />
        <Route path='/Htmlpage' element={<HtmlPage />} />
        <Route path='/CssPage' element={<CssPage />} />
        <Route path='/JavaScriptPage' element={<JavaScriptPage />} />

      </Routes>
    </>
  )
}

export default App
