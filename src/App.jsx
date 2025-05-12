import './App.css'
import Navbar from "/src/components/Navbar.jsx"
import Home from "/src/pages/Home/Home.jsx"
import Products from "/src/pages/Products/Products.jsx"
import Location from "/src/pages/Location/Location.jsx"
import Footer from './Components/Footer'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function LandingPage() {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
      <Location />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<h1>hola mundo</h1>} />
      </Routes>

    </Router>
  )
}

export default App
