import React from "react";
import SideBarLogo from "../assets/images/TcLogo.png";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import dashboardIcon from "../assets/images/dashboardIcon.svg";
import applicationBoard from "../assets/images/applicationBoard.svg";
import customerManagement from "../assets/images/customerManagement.svg";
import bankIcon from "../assets/images/bankIcon.svg";
import departmentManagement from "../assets/images/departmentManagement.svg";
import listIcon from "../assets/images/listIcon.svg";
import loanIcon from "../assets/images/loanIcon.svg";
import partnerManagement from "../assets/images/partnerManagement.svg";
import settingIcon from "../assets/images/settingIcon.svg";
import landingPageIcon from "../assets/images/landingPageIcon.svg";
import logsIcon from "../assets/images/logsIcon.svg";
import sheildCheckIcon from "../assets/images/shieldCheckIcon.svg";
const DasbhboardSidebar = () => {
  const themeColor = "#004D72";
  const sidebarItems = [
    { label: "Dashboard", img: dashboardIcon },
    { label: "Compilance Dashboard", img: dashboardIcon },
    { label: "Application Board", img: applicationBoard },
    {
      label: "Customer Management",
      menu: [{ subMenu: "Leads" }, { subMenu: "CustomerList" }],
      img: customerManagement,
    },
    { label: "Product Management", img: bankIcon },
    {
      label: "Department Management",
      img: departmentManagement,
      menu: [{ subMenu: "Departments" }, { subMenu: "Departments permission" }],
    },
    {
      label: "LOV",
      menu: [
        { subMenu: "Source of Revenue" },
        { subMenu: "Departments permission" },
      ],
      img: listIcon,
    },
    {
      label: "Financing Management",
      menu: [
        { subMenu: "Source of Revenue" },
        { subMenu: "Departments permission" },
      ],
      img: loanIcon,
    },
    {
      label: "Partner Management",
      menu: [
        { subMenu: "Source of Revenue" },
        { subMenu: "Departments permission" },
      ],
      img: partnerManagement,
    },
    {
      label: "Settings",
      menu: [
        { subMenu: "Source of Revenue" },
        { subMenu: "Departments permission" },
      ],
      img: settingIcon,
    },
    { label: "Home Page Management", img: landingPageIcon },
    { label: "Landing Page Management", img: landingPageIcon },
    {
      label: "System Logs",
      menu: [
        { subMenu: "Source of Revenue" },
        { subMenu: "Departments permission" },
      ],
      img: logsIcon,
    },
    {
      label: "API Management",
      menu: [
        { subMenu: "Source of Revenue" },
        { subMenu: "Departments permission" },
      ],
      img: sheildCheckIcon,
    },
  ];
  const renderSubmenu = (item: any) => (
    <>
      <SubMenu
        prefix={<img src={item.img} style={{ background: "white" }} />}
        key={item.label}
        label={item.label}
      >
        {item.menu.map((submenuItem: any, subIndex: any) => (
          <MenuItem key={subIndex}>{submenuItem.subMenu}</MenuItem>
        ))}
      </SubMenu>
    </>
  );
  return (
    <>
      <div className="container">
        <Sidebar className="col-12 sidebar-wrapper fw-bold">
          <div className="d-flex justify-content-center p-1 pt-4">
            <img src={SideBarLogo} alt="" />
          </div>
          <Menu
            menuItemStyles={{
              button: {
                [`&.active`]: {
                  backgroundColor: themeColor,
                  color: "#004D72",
                },
              },
            }}
          >
            {sidebarItems.map((item, index) => (
              <>
                <React.Fragment key={index}>
                  {item.menu ? (
                    renderSubmenu(item)
                  ) : (
                    <div>
                      {" "}
                      <MenuItem
                        prefix={
                          <img src={item.img} style={{ background: "white" }} />
                        }
                      >
                        {item.label}
                      </MenuItem>
                    </div>
                  )}
                </React.Fragment>
              </>
            ))}
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};
export default DasbhboardSidebar;
