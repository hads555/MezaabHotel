import React from "react";
import DasbhboardHeader from "../components/DashboardHeader/Header";
import DasbhboardSidebar from "../components/DashboardSideBar/DashboardSideBar";

const index = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex col-md-12">
          <div className="col-md-3">
            <DasbhboardSidebar />
          </div>
          <div className="col-md-9">
            <DasbhboardHeader />
          </div>
        </div>
      </div>
    </>
  );
};
export default index;
