import { useEffect, useState } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { authSlice } from "../../redux/apis/apisSlice";
import { RootState } from "../../redux/rootReducer";
import { Images } from "../Config/Images";
import SuperAdmin from "./SuperAdmin";

const DashboardHeaderTeanenetFlow = () => {
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
      <div className="px-2 d-flex justify-content-end border-bottom">
        <div className="flex justify-between" style={{ padding: "10px" }}>
          <div className="d-flex items-center">
            <div
              className="p-3"
              style={{
                backgroundColor: "#E2242E",
                color: "white",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            >
              EN
            </div>
            <div
              className="p-3"
              style={{
                backgroundColor: "rgba(236, 236, 236, 1)",
                color: "black",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              AR
            </div>
          </div>
        </div>
      </div>

      <GlobalStyle />
    </>
  );
};
export default DashboardHeaderTeanenetFlow;
