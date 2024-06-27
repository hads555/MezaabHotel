import { useEffect, useState } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { authSlice } from "../../redux/apis/apisSlice";
import { RootState } from "../../redux/rootReducer";
import { Images } from "../Config/Images";
import SuperAdmin from "./SuperAdmin";

const SubHeader = () => {
  const navigate = useNavigate();
  const themeBuilder = useSelector((state: RootState) => state.block.theme);
  const [showSuperAdmin, setShowSuperAdmin] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const dispatch = useDispatch();
  const pathname = window.location.pathname;
  const parts = pathname.split("/"); // ["", "view", "customerservices"]
  const view = parts[1]; // "view"
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
      <div className="subheader_layout">
        <div className="d-flex align-items-center ">
          <div
            className="col-md-12 navbar-brand"
            style={{ color: themeBuilder?.color?.headingTextColor }}
          >
            <div className="col-md-11 d-flex">
              <div
                className={
                  view == "view"
                    ? "d-flex justify-content-start align-items-center border-left p-2"
                    : "col-md-3 d-flex justify-content-start align-items-center border-left p-2"
                }
                style={
                  view == "view"
                    ? { fontWeight: "600", fontSize: "16px", width: "286px" }
                    : { fontWeight: "600", fontSize: "18px" }
                }
              >
                {view == "view" && (
                  <div className="px-2">
                    {" "}
                    <img
                      src={Images.leftArrow}
                      alt=""
                      width={24}
                      height={24}
                      onClick={() => {
                        navigate("/customerservices");
                      }}
                    />
                  </div>
                )}
                Loan Management System
              </div>
              <div
                className={
                  view == "view"
                    ? "col-md-12 d-flex justify-content-start align-items-center p-2"
                    : "col-md-9 d-flex justify-content-start align-items-center p-2"
                }
                style={
                  view == "view"
                    ? {
                        fontSize: "14px",
                        color: "#A0A0A0",
                        width: "calc(100% - 286px)",
                      }
                    : { fontSize: "14px", color: "#A0A0A0" }
                }
              >
                <div className="ps-4">LMS</div>
                <div className="ps-2">{">"}</div>
                <div className="ps-2">Customer Management</div>
                <div className="ps-2">{">"}</div>
                <div className="ps-2" style={{ color: "red" }}>
                  Customer Services
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GlobalStyle />
    </>
  );
};
export default SubHeader;
