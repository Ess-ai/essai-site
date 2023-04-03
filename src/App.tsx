import { useState } from 'react';
import {  BrowserRouter as Router,  Route,  Link,   Routes } from "react-router-dom";
import { Header } from './components';
import { Home, Signin, Signup } from './pages';

function App() {

  return (
      <>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </>
  )
}

export default App
