import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import AboutPage from './Pages/AboutPage/AboutPage'

function App() {
  const [count, setCount] = useState(0)
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Routes>
       
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
