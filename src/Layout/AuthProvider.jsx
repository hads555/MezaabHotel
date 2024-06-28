import { useContext, createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSlice } from "../redux/apis/apisSlice";
// import AuthCheck from "./AuthCheck";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(authSlice.actions.setUser(null));
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ logOut }}>
      {/* <AuthCheck />  */}
        {children}
      {/* </AuthCheck> */}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};