import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Register from './views/register';
import Login from './views/login';
import Home from './views/home';

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/"  element={ <Home/>}/>
        <Route path="/register" element={ <Register/>}/>
        <Route path="/login" element={ <Login/> }/>
      </Routes>
    </Router>

  )
}

export default App
