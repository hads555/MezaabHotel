import { useEffect, useState } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { authSlice } from "../../redux/apis/apisSlice";
import { RootState } from "../../redux/rootReducer";
import { Images } from "../Config/Images";
import SuperAdmin from "./SuperAdmin";

const NameSubHeaderView = () => {
  const themeBuilder = useSelector((state: RootState) => state.block.theme);
  const [showSuperAdmin, setShowSuperAdmin] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
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
      <div className="subheader_layout">
        <div className="d-flex align-items-center ">
          <div
            className="col-md-12 navbar-brand"
            style={{ color: themeBuilder?.color?.headingTextColor }}
          >
            <div className="col-md-11 d-flex">
              <div
                className="col-md-3 d-flex justify-content-start p-1"
                style={{ fontWeight: "600", fontSize: "12px" }}
              >
                Customer ID:12345434
              </div>
              <div
                className="col-md-9 d-flex justify-content-start align-items-center p-1"
                style={{ fontWeight: "600", fontSize: "12px" }}
              >
                <div className="ps-4">Customer Name:M Ahsan</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GlobalStyle />
    </>
  );
};
export default NameSubHeaderView;
