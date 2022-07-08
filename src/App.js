import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "./contexts/UserContext";
import ShoppingCartContext from "./contexts/ShoppingCartContext";


import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import InitialPage from "./components/InitialPage";
import ShoppingCartPage from "./components/ShoppingCartPage";
import CheckOutPage from "./components/CheckOutPage";



function App() {

      const [user, setUser] = useState({
        name: "",
        token: "",
        qtyCartItems: 0,   
      })
    
    return (
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
              <Route path="/" element={<InitialPage />} />
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