import React, { useEffect, useState } from "react";
import { Input, Select, DatePicker } from "antd";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";
import { createCompanyUrl } from "./AgentCrud";
import toast from "react-hot-toast";

// import {
//   allHotels,
//   postAddressUrl,
//   postPropertUrl,
// } from "../redux/apis/apisCrud";
// import DynamicHeaderStructure from "./DynamicHeaderStructure";

const button = [{ title: "Save Property" }];
const images = [
  "https://via.placeholder.com/200",
  "https://via.placeholder.com/201",
  "https://via.placeholder.com/202",
  "https://via.placeholder.com/203",
];

const NewAgent = () => {
  const navigate = useNavigate();
  const [allPushNotificaions, setAllPushNotificaions] = useState<any>("");
  const id = useParams();
  const [formData, setFormData] = useState({
    companyName: "",
    companyAddress: "",
    companyEmail: "",
    companyPhoneNoMain: "",
    companyTaxNo: "",
    companyRegistrationNo: "",
    companyIataNumber: "",
  });
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addRoom = async () => {
    // formData.address = `${id}`;
    try {
    // @ts-ignore
      const response = await fetch(createCompanyUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result) {
        navigate("/addroom");
      }
      console.log("Success:", result);
      // Handle success (e.g., show notification, redirect)
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show notification)
    }
  };
  return (
    <>
      <div className="cs-table p-2">
        <DynamicHeaderStructure title={"Add Company"} />
        <div className="row">
          <div className="col-md-8 pt-3">
            <div className="row">
              <div className="col-md-6 pt-3">
                <div className="simple-text">Company Name</div>
                <Input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={(e)=>handleInputChange(e)}
                  style={{ width: "90%" }}
                />
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">Company Address</div>
                <Input
                  type="text"
                  name="companyAddress"
                  value={formData.companyAddress}
                  onChange={(e)=>handleInputChange(e)}
                  style={{ width: "90%" }}
                />
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">Company Email</div>
                <Input
                  type="email"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={(e)=>handleInputChange(e)}
                  style={{ width: "90%" }}
                />
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">Company Phone No</div>
                <Input
                  name="companyPhoneNoMain"
                  value={formData.companyPhoneNoMain}
                  onChange={(e)=>handleInputChange(e)}
                  style={{ width: "90%" }}
                />
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">Company Tax No</div>
                <Input
                  name="companyTaxNo"
                  value={formData.companyTaxNo}
                  onChange={(e)=>handleInputChange(e)}
                  style={{ width: "90%" }}
                />
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">Company Registration No</div>

                <Input
                  name="companyRegistrationNo"
                  value={formData.companyRegistrationNo}
                  onChange={(e)=>handleInputChange(e)}
                  style={{ width: "90%" }}
                />
              </div>

              <div className="col-md-6 pt-3">
                <div className="simple-text">Company Iata Number</div>
                <Input
                  type="text"
                  name="companyIataNumber"
                  value={formData.companyIataNumber}
                  onChange={(e)=>handleInputChange(e)}
                  style={{ width: "90%" }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="img-gallery"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #D9D9D9",
                marginTop: "45px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "start",
                }}
              >
                {images.map((image, index) => (
                  <div key={index} style={{ margin: "2px", padding: "5px" }}>
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      style={{ width: "85px", height: "85px" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <div
            className="theme-btn col-3 mt-1 button-margin d-flex justify-content-center" onClick={addRoom}

          >
            <div className="ps-1 d-flex align-items-center">Add Company</div>
          </div>
        </div>
      </div>
      <div className="border-bottom pt-5"></div>
      <div className="cs-table p-2"></div>
    </>
  );
};

export default NewAgent;