import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Nav from "./components/Nav"
import Footer from "./components/Footer"


const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        
      </Routes>
      <Footer />
    </Router>
  )
}

export default App