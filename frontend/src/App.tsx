import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Navbar from './components/navbar';
import { AnimatePresence } from 'framer-motion';
import AnimatedPage from './animations/pageTransition';

import Home from './pages/home';
import Work from './pages/work';
import Contact from './pages/contact';
import About from './pages/about';

{/*
const Home = lazy(() => import('./pages/home'));
const Work = lazy(() => import('./pages/work'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
*/}

function App() {
  return (
    <Router>
      <Navbar />

        <AnimatePresence mode="wait">
          <Routes >
            <Route path="/" element={<Home/>} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>

    </Router>

  );
}

export default App;
