import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Shoes from "./components/Shoes.js";
import Men from "./components/Men.js";
import Women from "./components/Women.js";
import Kids from "./components/Kids.js";
import Sales from "./components/Sales.js";
import { Admin } from "./components/Admin";
import ProductDescription from "./pages/ProductDescription";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "./components/Navbar";
import Signup from "./Signup";
import Footer from "./components/Footer";
import { data } from "./JsonData/data";
import Search from "./components/Search";
import ScrollToTop from "./ScrollToTop";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { login, logout } from "./features/userSlice";
import Profile from "./components/Profile";

import SmoothScroll from './components/SmoothScroll'
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./components/Cart";
import Bag from "./Wishlist.js";
import Wishlist from "./Wishlist.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "./404-page.js";



function App() {
  const [searchfield, setsearchfield] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [usermail, setUsermail] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [wishItems,setWishItems]=useState([]);
  const [wish,setWish]=useState(false);
  const onSearchChange = (e) => {
    setsearchfield(e.target.value);
  };

  const [products, setproducts] = useState([]);

  const finaldata = data.concat(products);
  const newData = finaldata.map((el, index) => {
    const oldPrice = el.price.substring(1);
    const newPrice = parseInt(oldPrice.replace(/,/g, ""));
    const newObject = { ...el, price: newPrice, id: index };
    return newObject;
  });

  const filtereditems = newData.filter((data) => {
    return searchfield
      ? data.title.toLowerCase().includes(searchfield.toLowerCase())
      : {};
  });

// console.log(wishItems);
  return (
    <BrowserRouter>
      <SmoothScroll />
      <ScrollToTop />
      <Navbar searchChange={onSearchChange} />
      {/* <Sort setSortValue={setSortValue} /> */}
      <Routes>
        {!searchfield ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Search data={filtereditems} />} />
        )}
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/marketplace"
          element={
            <Women
              data={filtereditems}
              sortValue={sortValue}
              setSortValue={setSortValue}
              cartItems={cartItems}
              setCartItems={setCartItems}
              wishItems={wishItems}
             setWishItems={setWishItems}
            />
          }
        />
        <Route
          path="/fertilizer"
          element={
            <Men
              data={filtereditems}
              sortValue={sortValue}
              setSortValue={setSortValue}
              cartItems={cartItems}
              setCartItems={setCartItems}
             wishItems={wishItems}
             setWishItems={setWishItems}
             
            />
          }
        />
        <Route path="/product/:id" element={<ProductDescription data={filtereditems} cartItems={cartItems} setCartItems={setCartItems} wishItems={wishItems} setWishItems={setWishItems} wish={wish} setWish={setWish} />} />
        <Route path="/cart" element={<Cart data={filtereditems} items={cartItems} />} />
          <Route element={<Admin />} path="/admin" />
        <Route path='/list' element={<Wishlist data={filtereditems} items={wishItems} wishItems={wishItems} setWishItems={setWishItems} cartItems={cartItems} setCartItems={setCartItems}/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
