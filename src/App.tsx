import { useState } from 'react';
import {  BrowserRouter as Router,  Route,  Link,   Routes } from "react-router-dom";
import { Footer, Header } from './components';
import { Home, Stories, Signup } from './pages';

function App() {

  return (
      <>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer/>
        </Router>
      </>
  )
}

export default App
