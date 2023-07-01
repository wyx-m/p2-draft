import React, { useState } from 'react';
import "./Navbar.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link  } from "react-router-dom";

const Navbar2=()=> {
 
  
  return(
  <div className="con">
  <div className="row"  >
    
    <div className="col-2"></div>
    
    
    <div className="col-1 ms-5 mt-1">
    <Link to='/products' className='nav-links'>New In</Link>
 
    </div>
    <div className="col-1 col-sm-1 ms-5 mt-1">
      <Link to='/products' className='nav-links'>Trending</Link>
 
    </div>
    <div className="col-1 col-sm-1 ms-5 mt-1 ">
      <Link to='/design' className='nav-links'>Design</Link>
 
    </div>
    <div className="col-1 col-sm-1 ms-5 mt-1">
    <DropdownButton id="dropdown-basic-button" title="Products" variant="btn-outline-light text-white" className="nbt2"> 
      <Dropdown.Item href="/">Album</Dropdown.Item>
      <Dropdown.Item href="/">LightStick</Dropdown.Item>
      <Dropdown.Item href="/">Photobook</Dropdown.Item>
    </DropdownButton>

    </div>
    
    <div className="col-1 col-sm-1 ms-5 mt-1">
    <DropdownButton id="dropdown-basic-button" title="Artists" variant="btn-outline-primary text-white" className="nbt2">
      <Dropdown.Item href="/">Female group</Dropdown.Item>
      <Dropdown.Item href="/">Female solo</Dropdown.Item>
      <Dropdown.Item href="/">Male group</Dropdown.Item>
      <Dropdown.Item href="/">Male solo</Dropdown.Item>
    </DropdownButton>
   
    </div>

    
       
  </div>
  </div>
  )
}
export default Navbar2;
  