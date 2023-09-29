import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Company from './components/Company';
import Contact from './components/Contact';
import NewProject from './components/NewProject'
import Projects from './components/projects'
import './index.css'
import Project from './components/project';

import Navbar from './components/Navbar'
import Footer from './components/Footer'




const App = () => {
  return (
    <div >
      <div>
        <Router>
          <Navbar />
          <div className='cabeçalho' >
            <Routes> 
                <Route path=''  element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/company" element={<Company />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/newproject" element={<NewProject />} />
                <Route path="/project" element ={<Projects />} />
                <Route path="/project/:id" element={<Project />} />
            </Routes>
            </div>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;