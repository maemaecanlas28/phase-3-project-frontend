import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Animals from './Components/Animals';
import React from 'react';
import Login from "./Components/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AuthProvider from './Components/AuthProvider';
import RequireAuth from './Components/RequireAuth';
import Signup from './Components/Signup';
import AnimalDetails from "./Components/AnimalDetails"
import { useState, useEffect } from "react"

function App() {

  const [animals, setAnimals] = useState([])

  useEffect(() => {
      fetch("http://localhost:9292/animals")
        .then(data => data.json())
        .then(data => setAnimals(data))
    }, [])

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/animals' element={
            <RequireAuth>
              <Animals animals={animals} setAnimals={setAnimals}/>
            </RequireAuth>
            }/>
          <Route exact path="/animals/:id" element={<AnimalDetails animals={animals}/>} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </AuthProvider>
  )

}

export default App;
