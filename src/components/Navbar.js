import React,{ useState } from "react";
import { Link  } from "react-router-dom";
//import {Button} from "./Button";

import "./Navbar.css";
import "./Sidebar.css";






const Navbar = () => {
    const [click, setClick] = useState(false);
    


    const handleClick=() => setClick(true);
    const closeMobileMenu =() =>setClick(false);
  

    return ( 
         
         <nav className="navbar">
        
           <div className="me-5" onClick={handleClick}  onMouseLeave={() => setClick(false)}>
            <Link to="#" style={{color:"white"}} >
             <i className={click ? "sidebar":"fa-solid fa-list" } ></i>
            </Link>

             
          </div>
          <input type="text" className="search" placeholder="Search" />
          <div className="navbar-container">
              <h2 className="title"><Link to="/" style={{color:"rgb(238, 237, 178)",textDecoration: 'none' }}>Seesaw Music</Link></h2>
              {/* <div className="menu-icon" onClick={handleClick}>
                 <i className={click ? "fas fa-times" : "fas fa-bars"}/>
              </div> */}
              <ul className= 'nav-menu'>
                  <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      <i class="fa-solid fa-user"></i>
                  </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/shoppingcart'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <i class="fa-solid fa-cart-shopping"></i>
            
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/wishlist'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             <i class="fa-solid fa-heart"/> 
            </Link>
          </li>
       
          
        </ul> 
       </div>

      
      </nav>
      

        

     );
}
 
export default Navbar;