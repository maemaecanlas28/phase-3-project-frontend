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
import Header from './Components/Header';

function App() {

  return (
    <>
      <Header />
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/animals' element={
              <RequireAuth>
                <Animals />
              </RequireAuth>
            } />
            <Route path="/animals/:id" element={<AnimalDetails />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  )

}

export default App;
