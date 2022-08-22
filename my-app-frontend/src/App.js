import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Animals from './Components/Animals';
import Donate from './Components/Donate';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom"

function App() {

  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/animals' element={<Animals />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </>
  )

}

export default App;
