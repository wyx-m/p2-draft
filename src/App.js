
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home"
import ProductList from './pages/ProductList';

import Product from "./pages/Product"
import Design from "./pages/Design"

function App() {
  return (
        <Router>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path='/products' element = {<ProductList />} />
              <Route path='/eachproduct' element = {<Product />} />
              <Route path='/design' element = {<Design/>} />
             
            </Routes>

      
      

      </Router>
      
    
  );
}

export default App;
