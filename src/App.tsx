import { useState } from 'react';
import {  BrowserRouter as Router,  Route,  Link,   Routes } from "react-router-dom";
import { Footer, Header } from './components';
import { Home, Stories, Signup, Events, Updates } from './pages';

function App() {

  return (
      <>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/events" element={<Events />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer/>
        </Router>
      </>
  )
}

export default App
