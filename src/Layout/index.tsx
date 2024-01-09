import React from "react";
import { Outlet } from "react-router-dom";
import DasbhboardHeader from "../components/DashboardHeader/Header";
import DasbhboardSidebar from "../components/DashboardSideBar/DashboardSideBar";

const index = () => {
  return (
    <>
      <div className="side-bar">
        <div className="d-flex col-md-12">
          <div className="col-md-3">
            <DasbhboardSidebar />
          </div>
          <div className="col-md-9">
            <DasbhboardHeader />

            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default index;
