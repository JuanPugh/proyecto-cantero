import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Register from './views/register';
import Login from './views/login';
import Home from './views/home';
import Products from './views/products';

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />


      </Routes>
    </Router>

  )
}

export default App
