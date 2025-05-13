import './App.css'
import Navbar from "/src/components/Navbar.jsx"
import Home from "/src/pages/Home/Home.jsx"
import Section from "/src/pages/Section/Section.jsx"
import Location from "/src/pages/Location/Location.jsx"
import Footer from './Components/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom"

function LandingPage() {
  return (
    <>
      <Navbar />
      <Home />
      <Section />
      <Location />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/productos" element={<h1>hola mundo</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
