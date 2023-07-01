import React from "react";
import Navbar from "../components/Navbar";
import Navbar2 from '../components/Navbar2';


function Design(){
    return(
        <div>
            <div><Navbar/></div>
            <div><Navbar2/></div>
            <div className="mt-3 text-center"><h4>Creating Your Own Albums!</h4></div>
            <div className="container-fluid text-center" style={{background:"lightgray",height:"100px"}}><h2> Following Instruction Section(ignore the background color)</h2></div>
        </div>
    )
}

export default Design;