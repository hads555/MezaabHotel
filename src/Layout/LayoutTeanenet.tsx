import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import DashboardHeaderTeanenet from "../components/DashboardHeader/DashboardHeaderTeanenet";
import DasbhboardHeader from "../components/DashboardHeader/Header";
import NameSubHeaderView from "../components/DashboardHeader/NameSubHeaderView";
import SubHeader from "../components/DashboardHeader/SubHeader";
import SubHeaderTeanenet from "../components/DashboardHeader/SubHeaderTeanenet";
import DasbhboardSideBar from "../components/DashboardSideBar/DashboardSideBar";
import DasbhboardSidebarView from "../components/DashboardSideBar/DashboardSideBarView";
import Footer from "../components/Footer";

import Loader from "../components/Loader/Loader";
import { RootState } from "../redux/rootReducer";
import NoAuthCheck from "./NoAuthCheck";

const LayoutTeanenett = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [loading, setLoading] = useState(true);
  const themeBuilder = useSelector((state: RootState) => state.block.theme);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <NoAuthCheck />
      <div className="col-md-12">
        <Outlet />
      </div>
      {/* )} */}
    </>
  );
};
export default LayoutTeanenett;
