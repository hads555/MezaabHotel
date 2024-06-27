import { useEffect, useState } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { authSlice } from "../../redux/apis/apisSlice";
import { RootState } from "../../redux/rootReducer";
import { Images } from "../Config/Images";
import SuperAdmin from "./SuperAdmin";

const DashboardHeader = () => {
  const themeBuilder = useSelector((state: RootState) => state.block.theme);
  const [showSuperAdmin, setShowSuperAdmin] = useState(false);
  const [viewLayout, setViewLayout] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const pathname = window.location.pathname;
  const parts = pathname.split("/"); // ["", "view", "customerservices"]
  const view = parts[1]; // "view"
  console.log(view, "123");
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const GlobalStyle = createGlobalStyle`
  .header_layout{
    background: ${themeBuilder?.sideBarmenuBackgroundColor} !important;
  }
  `;
  return (
    <>
      <div className={view == "view" ? "border-bottom" : "header_layout"}>
        <div className="d-flex align-items-center">
          {isMobile && (
            <div>
              <button
                className="bar-btn"
                onClick={() => dispatch(authSlice.actions.toggleSidebar())}
              >
                {<FaBars />}
              </button>
            </div>
          )}
          {view == "view" && (
            <div className="border-left" style={{ width: "290px" }}>
              <div className="d-flex justify-content-center p-2">
                <img src={Images.finovaLogo} alt="logo" />
              </div>
            </div>
          )}
          <div
            className="d-flex col-md-12"
            style={view == "view" ? { width: "calc(100% - 290px)" } : {}}
          >
            <div
              className={
                view == "view"
                  ? "col-md-8 navbar-brand"
                  : "col-md-8 navbar-brand"
              }
              style={{ color: themeBuilder?.color?.headingTextColor }}
            >
                 Welcome Super admin!

            </div>
            <div
              className={
                view == "view"
                  ? "d-flex col-md-4 justify-content-end p-2"
                  : "d-flex col-md-4 justify-content-end"
              }
            >
              <div style={{ color: "red" }}>
                <img src={Images.userLogo} />
              </div>
            </div>
          </div>
        </div>
        {showSuperAdmin && (
          <>
            <div className="d-flex">
              <SuperAdmin />
            </div>
          </>
        )}
      </div>

      <GlobalStyle />
    </>
  );
};
export default DashboardHeader;
