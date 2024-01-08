import React from "react";
import SideBarLogo from "../assets/images/TcLogo.png";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import dashboardIcon from "../assets/images/iconsDashboard.png";
const DasbhboardSidebar = () => {
  const sidebarItems = [
    { label: "Application Board" },
    { label: "Customer Management" },
    { label: "Product Management" },
    { label: "Finance Management" },
    { label: "Departments" },
    { label: "Partner Management" },
    { label: "LOV" },
    { label: "API Management" },
    { label: "Home Page Management" },
    { label: "Settings" },
    { label: "System Logs" },
  ];
  return (
    <>
      <div className="container-fluid">
        <Sidebar className="col-12" style={{ width: "none" }}>
          <div className="d-flex justify-content-center p-2 pt-4">
            <img src={SideBarLogo} alt="" />
          </div>
          <Menu
            menuItemStyles={{
              button: {
                [`&.active`]: {
                  backgroundColor: "#13395e",
                  color: "#b6c8d9",
                },
              },
            }}
          >
            <MenuItem> Dashboard </MenuItem>
            {sidebarItems.map((item, index) => (
              <SubMenu label={item.label}>
                <MenuItem>Pie charts</MenuItem>
                <MenuItem>Line charts</MenuItem>
              </SubMenu>
            ))}

            <MenuItem> Calendar </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};
export default DasbhboardSidebar;
