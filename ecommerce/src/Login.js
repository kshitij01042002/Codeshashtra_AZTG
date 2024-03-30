import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const notifySuccess = () =>
    toast.success("Logged in successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifyError = () =>
    toast.error("Invalid email or password", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      notifySuccess();
    } else {
      notifyError();
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (formData.password.length < 5) {
      newErrors.password = "Password must be at least 5 characters";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
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
      <div className="font-dmsans">
        <div className="flex flex-col justify-center items-center w-screen h-[640px] space-y-5">
          {/* <img
            className="object-contain w-28 h-28 cursor-pointer"
            src={logo}
            alt="logo"
          /> */}
          <h1 className="font-bold">YOUR ACCOUNT FOR EVERYTHING</h1>
          <form className="flex flex-col justify-center items-center space-y-5">
            <input
              ref={emailRef}
              type="email"
              placeholder="Email address"
              name="email"
              onChange={handleInputChange}
              className="placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              className="placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
            <div className="flex justify-between items-center">
              <h1 className="font-normal text-sm text-right ml-24 text-gray-500">
                Forgot your Password?
              </h1>
            </div>
            <div
              className="flex justify-center items-center w-72 bg-black text-white py-2"
              onClick={handleLogin}
            >
              <button>Sign In</button>
            </div>
            <div
              className="flex justify-center items-center w-72 bg-black text-white py-2"
            >
                <Link to="/admin"><button>Add Product</button></Link>
            </div>
            <div className="flex justify-center items-center space-x-1">
              <h1 className="text-gray-500">Not a member?</h1>
              <h1 className="underline">
                {" "}
                <Link to="/signup">Join us</Link>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
