import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Cart from "./Cart";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
const App = () => {


  return(
    <Router>
      <GlobalStyle>
        <Routes>
           <Route path="/" element={<Home />} />  
           <Route path="/about" element={<About />} />  
           <Route path="/cart" element={<Cart />} />  
           <Route path="/products" element={<Products />} /> 
           <Route path="/contact"  element-={<Contact />} />
           <Route path="/singleproduct/:id"  element={<SingleProduct/>} />
           <Route  path="*"   element={<ErrorPage/>} />

           
         </Routes>
      </GlobalStyle>
    </Router>


  );
};

export default App;
