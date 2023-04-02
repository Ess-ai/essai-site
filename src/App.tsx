import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Signin, Signup } from './pages';

function App() {

  return (
    <BrowserRouter>
      <main id="main_root" className="main-root">
        <Header/>      
        <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
