import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Animals from './Components/Animals';
import React from 'react';
import Login from "./Components/Login"
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom"
import AuthProvider from './Components/AuthProvider';
import RequireAuth from './Components/RequireAuth';
import Signup from './Components/Signup';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/animals' element={
            <RequireAuth>
              <Animals />
            </RequireAuth>
            }/>
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </AuthProvider>
  )

}

export default App;
