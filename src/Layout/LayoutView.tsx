import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import DasbhboardHeader from "../components/DashboardHeader/Header";
import NameSubHeaderView from "../components/DashboardHeader/NameSubHeaderView";
import SubHeader from "../components/DashboardHeader/SubHeader";
import DasbhboardSideBar from "../components/DashboardSideBar/DashboardSideBar";
import DasbhboardSidebarView from "../components/DashboardSideBar/DashboardSideBarView";

import Loader from "../components/Loader/Loader";
import { RootState } from "../redux/rootReducer";

const LayoutView = () => {
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
      <div className="col-md-12">
        <DasbhboardHeader />
        <SubHeader />
        <NameSubHeaderView />
        <div className="border-bottom pt-4"></div>
        <div className="d-flex">
          <div className="">
            <DasbhboardSidebarView />
          </div>
          <div className="col-md-12" style={{ width: "calc(100% - 290px)" }}>
            <div
              className="p-3"
              style={{ backgroundColor: themeBuilder?.appBackgroundColor }}
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};
export default LayoutView;
