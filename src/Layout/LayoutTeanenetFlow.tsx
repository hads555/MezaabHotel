import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Images } from "../components/Config/Images";
import DashboardHeaderTeanenetFlow from "../components/DashboardHeader/DashboardHeaderTeanenetFlow";
import DasbhboardHeader from "../components/DashboardHeader/Header";
import SubHeader from "../components/DashboardHeader/SubHeader";
import DasbhboardSideBar from "../components/DashboardSideBar/DashboardSideBar";
import DasbhboardSidebarTeanenetFlow from "../components/DashboardSideBar/DashboardSideBarTeanenetFlow";

import Loader from "../components/Loader/Loader";
import { RootState } from "../redux/rootReducer";

const LayoutTeanenetFlow = () => {
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
      <div className={`flex ${isMobile ? "sidebar-mobile" : "side-bar"}`}>
        <div
          className={`flex ${isMobile ? "" : "colOne"}`}
          style={{
            backgroundColor: "#E6E6E6",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <DasbhboardSidebarTeanenetFlow />
        </div>
        <div className={`flex ${isMobile ? "" : "colTwo"}`}>
          <DashboardHeaderTeanenetFlow />

          <div className="p-3" style={{ height: "82vh", overflow: "auto" }}>
            <Outlet />
          </div>
          <footer>
            <div className="border-top pt-4 pb-4">
              <div className="col-11 d-flex justify-content-end align-items-center">
                <img src={Images.callIcon} alt="" width={18} height={18} />
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "24px",
                  }}
                  className="ps-2"
                >
                  800 1111 810
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      {/* )} */}
    </>
  );
};
export default LayoutTeanenetFlow;
