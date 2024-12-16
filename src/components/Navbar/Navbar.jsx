import { Link, useNavigate,useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { NavLink } from "react-router-dom";

import "./Navbar.css";


function Navbar({ onSearch }) {
  const [selectedTab, setSelectedTab] = useState("home");
  const [searchInput, setSearchInput] = useState("");
 
  const navigate = useNavigate();
  const location =useLocation();

  useEffect(() =>{
    setSelectedTab(location.pathname);
  }, [location.pathname]);
   
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput); 
    
  };
  return (
    <nav className="Navbar">
     
      <Tabs
        defaultValue={"home"}
        value={selectedTab}
        onChange={(e, v) => {navigate(v)}}
        sx={{height:"100%"}}
        classes={{ indicator: 'indicator'}}
      >
        
        <Tab classes={{ root: 'tab' }} value={"/"} label="Home">
          Home
        </Tab>
        <Tab classes={{ root: 'tab' }} value={"/about"} label="About">
          About
        </Tab>
        <Tab classes={{ root: 'tab' }} value={"/education"} label="Education">
          Education
        </Tab>
        <Tab classes={{ root: 'tab' }} value={"/experience"} label="Experience">
         Experience
        </Tab>
        <Tab classes={{ root: 'tab' }} value={"/projects"} label="Projects">
          Projects
        </Tab>
        <Tab classes={{ root: 'tab' }} value={"/skills"} label="Skills">
          Skills
        </Tab>
        <Tab classes={{ root: 'tab' }} value={"/contact"} label="contact">
         contact
        </Tab>
      </Tabs>
      
     
    </nav>
  );
}

export default Navbar;