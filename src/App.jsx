
import './App.css'
import Navbar from "/src/components/Navbar.jsx"
import Home from "/src/pages/Home/Home.jsx"
import Products from  "/src/pages/Products/Products.jsx"
import Location from "/src/pages/Location/Location.jsx"
import Footer from './Components/Footer'



function App() {


  return (
    <>
      <Navbar/>
      <Home/>
      <Products/>
      <Location/>
      <Footer/>
    </>
  )
}

export default App
