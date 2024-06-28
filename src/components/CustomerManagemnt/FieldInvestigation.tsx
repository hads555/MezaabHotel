import React, { useEffect, useState } from "react";
import { Input, Select, DatePicker } from "antd";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";
import {
  allHotels,
  postAddressUrl,
  postPropertUrl,
} from "../../redux/apis/apisCrud";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const button = [{ title: "Save Property" }];
const images = [
  "https://via.placeholder.com/200",
  "https://via.placeholder.com/201",
  "https://via.placeholder.com/202",
  "https://via.placeholder.com/203",
];

const FieldInvestigation = () => {
  const navigate = useNavigate();
  const [allPushNotificaions, setAllPushNotificaions] = useState<any>("");
  const [formData, setFormData] = useState({
    title: "",
    discription: "",
    contactNumber: "",
    email: "",
    hotelRoomCapicty: "",
    address: "",
    userId: "1234",
  });
  const [formDataAddress, setFormDataAddress] = useState({
    addressLine1: "",
    city: "",
    country: "",
    state: "",
  });
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleInputChangeAddress = (e: any) => {
    const { name, value } = e.target;
    setFormDataAddress({ ...formDataAddress, [name]: value });
  };
  const handleSelectChange = (value: any, name: any) => {
    setFormData({ ...formData, [name]: value });
  };
  const addHotel = async (id: any) => {
    formData.address = `${id}`;
    try {
      const response = await fetch(postPropertUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result) {
        navigate(`/addroom/${result.data.id}`);
        toast.success("Successfully Added");
      }
      console.log("Success:", result);
      // Handle success (e.g., show notification, redirect)
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show notification)
    }
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch(postAddressUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataAddress),
      });
      const result = await response.json();
      if (result) {
        addHotel(result?.data?.id);
      }
      console.log("Success:", result);
      // Handle success (e.g., show notification, redirect)
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show notification)
    }
  };
  const allPushInfo = () => {
    allHotels()
      .then((response: any) => {
        console.log(response, "resposne");
        setAllPushNotificaions(response?.data?.data?.data);
        console.log(allPushNotificaions, "allPushNotificaions");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    allPushInfo();
  }, []);
  return (
    <>
      <div className="cs-table p-2">
        <DynamicHeaderStructure title={"Add Property"} />
        <br />
        <DynamicHeaderStructure title={"1. Property Details"} />
        <div className="row">
          <div className="col-md-8 pt-3">
            <div className="row">
              <div className="col-md-6 pt-3">
                <div className="simple-text">Title</div>
                <Input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  style={{ width: "90%" }}
                />
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">Description</div>
                <Input
                  type="text"
                  name="discription"
                  value={formData.discription}
                  onChange={handleInputChange}
                  style={{ width: "90%" }}
                />
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">Contact Number</div>
                <Input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  style={{ width: "90%" }}
                />
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">Email</div>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{ width: "90%" }}
                />
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">Hotel Room Capacity</div>
                <Input
                  type="text"
                  name="hotelRoomCapicty"
                  value={formData.hotelRoomCapicty}
                  onChange={handleInputChange}
                  style={{ width: "90%" }}
                />
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">Address</div>
                <Input
                  type="text"
                  name="addressLine1"
                  value={formDataAddress.addressLine1}
                  onChange={handleInputChangeAddress}
                  style={{ width: "90%" }}
                />

                {/* <Select
                  style={{ width: "90%" }}
                  onChange={(value) => handleSelectChange(value, "address")}
                >
                  {allPushNotificaions &&
                    allPushNotificaions.map((item: any, index: any) => (
                      <Select.Option value={item.address.id}>
                        {item?.address?.addressLine1}
                      </Select.Option>
                    ))}
                </Select> */}
              </div>

              <div className="col-md-6 pt-3">
                <div className="simple-text">Country</div>
                <Input
                  type="text"
                  name="country"
                  value={formDataAddress.country}
                  onChange={handleInputChangeAddress}
                  style={{ width: "90%" }}
                />
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">City</div>
                <Input
                  type="text"
                  name="city"
                  value={formDataAddress.city}
                  onChange={handleInputChangeAddress}
                  style={{ width: "90%" }}
                />
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">State</div>
                <Input
                  type="text"
                  name="state"
                  value={formDataAddress.state}
                  onChange={handleInputChangeAddress}
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
            className="theme-btn col-3 mt-1 button-margin d-flex justify-content-center"
            onClick={handleSubmit}
          >
            <div className="ps-1 d-flex align-items-center">Add Property</div>
          </div>
        </div>
      </div>
      <div className="border-bottom pt-5"></div>
      <div className="cs-table p-2"></div>
    </>
  );
};

export default FieldInvestigation;