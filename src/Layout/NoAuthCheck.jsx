import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const NoAuthCheck = () => {
  const userData = useSelector((state) => state.block.user);

  if (userData != null || localStorage.getItem('authToken')) return <Navigate to="/dashboard" />;
  return <></>;
};

export default NoAuthCheck;
