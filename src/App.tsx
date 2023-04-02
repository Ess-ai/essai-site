import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home, Signin, Signup } from './pages';

function App() {

  return (
      <>
          <Header/>      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
      </>
  )
}

export default App
