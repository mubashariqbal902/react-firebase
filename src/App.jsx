import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import Home from "./Home"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>

  )
}

export default App