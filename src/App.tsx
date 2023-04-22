import { useState } from 'react';
import {  BrowserRouter as Router,  Route,  Link,   Routes } from "react-router-dom";
import { About, Footer, Header, Product } from './components';
import { Home, Stories, Events, Updates } from './pages';
import { WaitingList } from './pages/auth/WaitingList';
import { Error404 } from './404error';

function App() {

  const [isReleased, setisReleased] = useState(false)

  return (
      <>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            {
              isReleased ?
                <>
                  <Route path="/about" element={<About />} />
                  <Route path="/stories" element={<Stories />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/updates" element={<Updates />} />
                  <Route path="/downloads" element={<Product />} />
                </>
              : <>
                  <Route path="/waiting-list" element={<WaitingList />} />
                  <Route path="/*" element={<Error404 />} />
                </>
            }
          </Routes>
          <Footer/>
        </Router>
      </>
  )
}

export default App
