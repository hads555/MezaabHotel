import React from "react";
import profileUser from "../assets/images/myNanceUser.png";

const DasbhboardHeader = () => {
  return (
    <>
      <div className="p-3">
        <div className="d-flex align-items-center">
          <h2 className="col-6">Welcome !</h2>
          <div className="col-6 d-flex">
            <div className="col-6"></div>
            <div className="d-flex col-6">
              <div className="col-7 d-flex justify-content-end align-items-center">
                <img
                  className=" profile-logo"
                  src={profileUser}
                  alt=""
                  width={"50px"}
                  height={"50px"}
                />
              </div>

              <div className="ml-5 col-5 d-flex justify-content-center align-items-center bold">
                Super Admin{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DasbhboardHeader;
