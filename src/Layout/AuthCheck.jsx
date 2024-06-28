import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authSlice } from "../redux/apis/apisSlice";

const AuthCheck = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.block.user);

  if ((userData == null && localStorage.getItem('authToken')) || (userData != null && !localStorage.getItem('authToken'))) {
    dispatch(authSlice.actions.setUser(null));
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
  }

  if (userData == null || !localStorage.getItem('authToken')) return <Navigate to="/login" />;
  return <></>;
};

export default AuthCheck;
