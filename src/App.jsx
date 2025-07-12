import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlogList from './components/BlogList'
import Header from './components/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Paginate from './components/Paginate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogs' element={<Paginate/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
