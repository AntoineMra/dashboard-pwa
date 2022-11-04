import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Page1 from './components/quizz-pages/Page1'
import Page2 from './components/quizz-pages/Page2'
import Page3 from './components/quizz-pages/Page3'
import Rules from './pages/Rules'
import EndingPage from './pages/EndingPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index={true} element={<Home />} />
          <Route path='/p1' element={<Page1 />} />
          <Route path='/p2' element={<Page2 />} />
          <Route path='/p3' element={<Page3 />} />
          <Route path='/rules' element={<Rules />} />
          <Route path='/ending' element={<EndingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
