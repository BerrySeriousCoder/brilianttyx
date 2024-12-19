import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import AboutUsPage from './pages/aboutus'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/aboutus' element={<AboutUsPage></AboutUsPage>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App