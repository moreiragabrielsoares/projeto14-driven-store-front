import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "./contexts/UserContext";
import ShoppingCartContext from "./contexts/ShoppingCartContext";


import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import InitialPage from "./components/InitialPage";
import ProductsPage from "./components/ProductsPage";
import ShoppingCartPage from "./components/ShoppingCartPage";
import CheckOutPage from "./components/CheckOutPage";



function App() {
  
    const [token, setToken] = useState("");
    const [userName, setUserName] = useState("");
    
    return (
      <BrowserRouter>
        <UserContext.Provider value = {{token, setToken, userName, setUserName}}>
          <Routes>
              <Route path="/" element={token === "" ? <InitialPage /> : <ProductsPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/shoppingcart" element={<ShoppingCartPage />} />
              <Route path="/checkout" element={<CheckOutPage />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    );
  }
  
  export default App;