import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useSelector(selectUser);

  if (!user) {
    return <Navigate to="/" />;
  }
  return user.email === "admin@gmail.com" ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
