import { useState } from 'react';
import {  BrowserRouter as Router,  Route,  Link,   Routes } from "react-router-dom";
import { About, Footer, Header, Product } from './components';
import { Home, Stories, Events, Updates } from './pages';

function App() {

  return (
      <>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/events" element={<Events />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/downloads" element={<Product />} />
          </Routes>
          <Footer/>
        </Router>
      </>
  )
}

export default App
