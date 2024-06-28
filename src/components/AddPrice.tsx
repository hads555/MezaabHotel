import React, { useEffect, useState } from "react";
import { Input, Select, DatePicker } from "antd";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  allHotels,
  postAddressUrl,
  postPriceUrl,
  postPropertUrl,
  postRoomUrl,
} from "../redux/apis/apisCrud";
import DynamicHeaderStructure from "./DynamicHeaderStructure";
import toast from "react-hot-toast";

const button = [{ title: "Save Property" }];
const images = [
  "https://via.placeholder.com/200",
  "https://via.placeholder.com/201",
  "https://via.placeholder.com/202",
  "https://via.placeholder.com/203",
];

const AddPrice = () => {
  const navigate = useNavigate();
  const [allPushNotificaions, setAllPushNotificaions] = useState<any>("");
  const id = useParams();
  const [formData, setFormData] = useState({
    price: "",
    from: "",
    to: "",
    pricingFor: "",
    room: id.id,
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
  const addRoom = async () => {
    // formData.address = `${id}`;
    try {
      const response = await fetch(postPriceUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result) {
        navigate(`/customerlists`);
        toast.success("Successfully Added");
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
        <DynamicHeaderStructure title={"Add Price"} />
        <div className="row">
          <div className="col-md-8 pt-3">
            <div className="row">
              <div className="col-md-6 pt-3">
                <div className="simple-text">Price</div>
                <Input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  style={{ width: "90%" }}
                />
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">From</div>
                <Input
                  type="date"
                  name="from"
                  value={formData.from}
                  onChange={handleInputChange}
                  style={{ width: "90%" }}
                />
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">To</div>
                <Input
                  type="date"
                  name="to"
                  value={formData.to}
                  onChange={handleInputChange}
                  style={{ width: "90%" }}
                />
              </div>

              <div className="col-md-6 pt-3">
                <div className="simple-text">Pricing For</div>
                <Select
                  style={{ width: "90%" }}
                  onChange={(value) => handleSelectChange(value, "pricingFor")}
                >
                  <Select.Option value="standard">Standard</Select.Option>
                  <Select.Option value="delux">Delux</Select.Option>
                  <Select.Option value="executive">Executive</Select.Option>
                </Select>
              </div>
              {/* <div className="col-md-6 pt-3">
                <div className="simple-text">Image Url</div>
                <Input
                  type="file"
                  name="state"
                  value={formDataAddress.state}
                  onChange={handleInputChangeAddress}
                  style={{ width: "90%" }}
                />
              </div> */}
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
            onClick={addRoom}
          >
            <div className="ps-1 d-flex align-items-center">Add Price</div>
          </div>
        </div>
      </div>
      <div className="border-bottom pt-5"></div>
      <div className="cs-table p-2"></div>
    </>
  );
};

export default AddPrice;