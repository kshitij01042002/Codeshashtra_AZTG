import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/men/img6.png";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Login from "../Login";
import bin from "../assets/bin.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

// ...

// ...

const Cart = (props) => {
  const user = useSelector(selectUser);
  const { data, items } = props;
  const navigate = useNavigate();

  const [products, setProducts] = useState(
    data.filter((item) => {
      return items.includes(item.id.toString());
    })
  );
  console.log(products);
  let total = 0;
  let curr_price = 0;

  const increaseCount = (points) => {
    let newCount = 0;
    let msg = "You earned " + points + " points on your purchase!";
    console.log(typeof(points))
    if (points > 0) {
      newCount = count + points;
      toast.success(msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {  
      newCount = count + points;
      toast.error(msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    setCount(newCount);
    setCookie("count", newCount, 30);
  };

  const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";expires=" + expires.toUTCString();
  };

  const getCookie = (name) => {
    const cookie = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return cookie ? cookie[2] : null;
  };
  const [count, setCount] = useState(0);

  useEffect(() => {
    const savedCount = parseInt(getCookie("count")) || 0;
    setCount(savedCount);
  }, []);

  async function handleBuy() {
    try {
      const response = await fetch("http://192.168.189.180:5000/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product_names: products }),
      });
      console.log(products);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      // Redirect to /marketplace
      increaseCount(data["points"]);

      setTimeout(() => {
        navigate("/marketplace");
      }, 2000);
    } catch (error) {
      console.error("An error occurred while making the request:", error);
    }
  }

  const removeItem = (index) => {
    console.log(index);
    console.log(products);
    console.log("clicked");
    const updatedProducts = products.filter((_, i) => i !== index);
    console.log(updatedProducts);
    setProducts(updatedProducts);
  };
  return (
    <div className="flex flex-col mb-12">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row space-x-2 justify-center items-center"
      >
        <h1 className="text-black text-4xl font-bold my-12">Your cart</h1>
      </motion.div>

      {products.length ? (
        <>
          <div className="flex flex-col gap-4">
            {products.map((item, index) => {
              const original = Math.round(1.2 * item.price);
              total += original;
              curr_price += item.price;
              return (
                <div
                  className="flex mx-auto shadow-lg border rounded-md sm:w-[40rem] w-[25rem] justify-between"
                  key={index}
                >
                  <div className="flex ">
                    <img src={item.imgurl} alt="img6" className="h-48" />
                    <div className="flex p-5">
                      <div className="flex flex-col gap-2">
                        <div>
                          <h1 className="font-bold text-xl ">{item.title}</h1>
                          <h3 className="text-lg font-normal text-gray-700">
                            {item.desc}
                          </h3>
                          <h3 className="text-xs font-normal text-gray-400">
                            Sold by: RetailNet
                          </h3>
                        </div>
                        <div className="flex gap-4">
                          <div className="group bg-gray-200 px-2 py-0.5 select-none ">
                            <label htmlFor="size">Size: </label>
                            <select
                              name="size"
                              id="size"
                              className="outline-none bg-gray-200"
                            >
                              <option value="XS">XS</option>
                              <option value="S">S</option>
                              <option value="M">M</option>
                              <option value="L">L</option>
                              <option value="XL">XL</option>
                            </select>
                          </div>
                          <div className="bg-gray-200 px-2 py-0.5 select-none ">
                            <label htmlFor="qty">Qty: </label>
                            <select
                              name="qty"
                              id="qty"
                              className="outline-none bg-gray-200"
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <h1 className="font-semibold">₹{item.price}</h1>
                          <h1 className="line-through text-gray-600">
                            ₹{original}
                          </h1>
                          <h1 className="text-red-400">20% off</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    onClick={() => removeItem(index)}
                    src={bin}
                    className="h-9  float-right m-3 hover:scale-110 cursor-pointer p-1"
                  />
                </div>
              );
            })}
          </div>
          <div className="mx-auto w-96 border mt-20 p-5 flex flex-col gap-2">
            <h2 className="font-bold uppercase text-sm text-gray-600 mb-4">
              Price details ({products.length} items)
            </h2>
            <div className="flex justify-between items-center">
              <h3 className="text-gray-700 font-normal">Total MRP</h3>
              <h3 className="text-gray-700 font-normal">₹{total}</h3>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-gray-700 font-normal">Discount on MRP</h3>
              <h3 className="text-green-500 font-normal">
                -₹{total - curr_price}
              </h3>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-gray-700 font-normal">Convenience Fee</h3>
              <h3 className="text-gray-700 font-normal">₹300</h3>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-gray-700 font-normal">Delivery Charge</h3>
              <h3 className="text-gray-700 font-normal">₹52</h3>
            </div>
            <div className="bg-gray-300 w-full h-[1.5px] my-2"></div>
            <div className="flex justify-between items-center">
              <h3 className="text-gray-700 text-lg font-bold">Total Amount</h3>
              <h3 className="text-gray-700 text-lg font-bold">
                ₹{curr_price + 352}
              </h3>
            </div>
            <button
              className="outline-none bg-[#ff3f6c] p-2 my-2 cursor-pointer text-white"
              onClick={handleBuy}
            >
              PLACE ORDER
            </button>
          </div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row space-x-2 justify-center items-center"
        >
          <h2 className="text-gray-600 text-xl my-12">
            Your cart is empty. Checkout our products to add something to your
            cart.
          </h2>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;

