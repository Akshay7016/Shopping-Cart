import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <div className='bg-slate-900 py-3'>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App