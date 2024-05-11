import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {


  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
     <Footer /> 
    </BrowserRouter>
  )
}

export default App
