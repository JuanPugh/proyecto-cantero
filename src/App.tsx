import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

import Register from './views/register';
import Login from './views/login';
import Home from './views/home';
import Products from './views/products';
import { AuthProvider, useAuth } from './components/AuthContext';
import { useContext } from 'react';

function App() {


  return (




    <AuthProvider>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />


        </Routes>
      </Router>
    </AuthProvider>

  )
}

export default App
