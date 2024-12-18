import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import AboutPage from './Pages/AboutPage/AboutPage';
import Education from './Pages/Education/Education';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience/Experience';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';


function App() {
  const [count, setCount] = useState(0)
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
