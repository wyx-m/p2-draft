import React from "react";
import Navbar from "../components/Navbar";
import Navbar2 from '../components/Navbar2';
import "../components/Navbar.css";
import Cards from '../components/Cards';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function ProductList(){
    return(
        <div>
            <div><Navbar/></div>
            <div><Navbar2/></div>
            <div className="ctn">
                <h2>Trending</h2>
                <div>
                <DropdownButton id="dropdown-basic-button" title="Sort By: " variant="text-white" > 
                    <Dropdown.Item href="/">Best Seller</Dropdown.Item>
                    <Dropdown.Item href="/">A-Z</Dropdown.Item>
                    <Dropdown.Item href="/">Price,high to low</Dropdown.Item>
                    <Dropdown.Item href="/">Price,low to high</Dropdown.Item>
                    <Dropdown.Item href="/">Date,new to old</Dropdown.Item>
                </DropdownButton>
           
                </div>
                

            </div>
            <div className="container-fluid">
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
            </div>
        </div>
    )
}

export default ProductList;