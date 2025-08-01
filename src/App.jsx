import React from 'react'
import { BrowserRouter as Router, Routes, Route }from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './pages/Home';
import Header from './components/Header';
import Collection from './pages/Collection';
import About from './pages/About';
import CardDetail from './pages/CardDetail';


const App = () => {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />

          <Routes>
            <Routes path='/' element={<Home />} />
            <Routes path='/collection' element={<Collection/>} />
            <Routes path='/About' element={<About />} />
            <Routes path='/Card_Detail/:id' element={<CardDetail/>} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App