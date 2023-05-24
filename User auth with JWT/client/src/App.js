import React, { useEffect } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Dashboard from './component/Dashboard';
import Login from './component/Pages/Login';
import Register from './component/Pages/Register';


const App = () => {
  

  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
