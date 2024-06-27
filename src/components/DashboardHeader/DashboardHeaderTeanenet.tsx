import { useEffect, useState } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { authSlice } from "../../redux/apis/apisSlice";
import { RootState } from "../../redux/rootReducer";
import { Images } from "../Config/Images";
import SuperAdmin from "./SuperAdmin";

const DashboardHeaderTeanenet = () => {
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
      <div className={"header_layout_Teanenet d-flex justify-content-center"}>
        <div className="col-11 d-flex justify-content-end">
          <div className="col-5 d-flex justify-content-end">
            <div
              style={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#FFFFFF",
                lineHeight: "14px",
              }}
              className="col-2 d-flex justify-content-end simple-text"
            >
              <img src={Images.searchIconWhite} alt="" width={13} height={13} />
              <div className="ps-1">Search</div>
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#FFFFFF",
                lineHeight: "14px",
              }}
              className="col-2 d-flex justify-content-end simple-text"
            >
              Support
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#FFFFFF",
                lineHeight: "14px",
              }}
              className="col-2 d-flex justify-content-end simple-text px-3"
            >
              About
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#FFFFFF",
                lineHeight: "14px",
              }}
              className="col-2 d-flex justify-content-end simple-text"
            >
              Contact Us
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
export default DashboardHeaderTeanenet;
