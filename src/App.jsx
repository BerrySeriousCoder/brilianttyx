import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import AboutUsPage from './pages/aboutus'
import Navbar from './component/navbar/navbar'
import { FooterMain } from './component/footer/footerMain'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/aboutus' element={<AboutUsPage></AboutUsPage>} />
      </Routes>
        <FooterMain></FooterMain>
      </BrowserRouter>
    </div>
  )
}

export default App