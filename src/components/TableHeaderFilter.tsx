import React, { useEffect, useState } from "react";
import { DatePicker, Select } from "antd";
import { useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { RootState } from "../redux/rootReducer";
import { FaFilter } from "react-icons/fa";
import { Images } from "./Config/Images";

function TableHeaderFilter({
  title,
  parentStatus,
  status,
  partner,
  filter,
  button,
  searchPlaceHolder,
  setSearchValue,
  searchValue,
}: any) {
  const themeBuilder = useSelector((state: RootState) => state.block.theme);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mobileStructure, setMobileStructure] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);

      if (window.innerWidth < 768) {
        setMobileStructure(true);
      } else {
        setMobileStructure(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleChange = (event: any) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="pt-3 pb-3">
      {isMobile && (
        <div>
          <button
            className="structure-btn mt-4"
            onClick={() => {
              setMobileStructure(!mobileStructure);
            }}
          >
            {<FaFilter />}
          </button>
        </div>
      )}

      <div className="row">
        <div className="structure col-md-10  align-items-center ">
          <div className="col-md-7 d-flex theme-filter">
            <div className="col-md-5 d-flex">
              <div className="col-md-4">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    View
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {/* {status &&
                      status.map((item: any) => ( */}
                    <Dropdown.Item>
                      <>
                        <div className="d-flex">
                          {/* <div className="col-3"></div> */}
                          dsfdgffsd
                        </div>
                      </>
                    </Dropdown.Item>
                    {/* ))} */}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="col-md-5">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Format
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {/* {status &&
                      status.map((item: any) => ( */}
                    <Dropdown.Item>
                      <>
                        <div className="d-flex">
                          {/* <div className="col-3"></div> */}
                          dsfdgffsd
                        </div>
                      </>
                    </Dropdown.Item>
                    {/* ))} */}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="col-md-3 d-flex align-items-center filter-icon justify-content-center">
                <img src={Images.filter} alt="" width={20} height={20} />
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="col-md-4 d-flex">
                <div className="col-md-4 d-flex align-items-center justify-content-end">
                  <img src={Images.freezeLogo} alt="" width={16} height={16} />
                </div>
                <div className="col-md-8 d-flex align-items-center justify-content-center">
                  Freeze
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="col-md-4 d-flex align-items-center justify-content-end">
                  <img src={Images.detachLogo} alt="" width={16} height={16} />
                </div>
                <div className="col-md-8 d-flex align-items-center justify-content-center">
                  Detach
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="col-md-4 d-flex align-items-center justify-content-end">
                  <img src={Images.wrapLogo} alt="" width={16} height={16} />
                </div>
                <div className="col-md-8 d-flex align-items-center justify-content-center">
                  Wrap
                </div>
              </div>
            </div>
            <div className="col-md-1 d-flex align-items-center refresh-icon justify-content-center">
              <img src={Images.refreshLogo} alt="" width={20} height={20} />
            </div>
          </div>
        </div>
        <div className="structure col-md-2  align-items-center ">
          <div className="filter-options">
            {button &&
              button.map((item: any) => (
                <div
                  className="theme-btn mt-1 button-margin d-flex justify-content-center"
                  style={{
                    backgroundColor: themeBuilder?.table?.backgroundColor,
                  }}
                  onClick={item.onClick}
                >
                  <div className="">
                    <img
                      src={Images.customerManagement}
                      alt=""
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className="ps-1 d-flex align-items-center">
                    {" "}
                    {item.title}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableHeaderFilter;
