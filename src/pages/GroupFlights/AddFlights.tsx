import React, { useState } from "react";
import { Button, Input, Switch, Select } from "antd";
import toast from "react-hot-toast";
import { createGroupFlight, groupFlight } from "../../redux/apis/apisCrud";
import Ckeditor from "./CkEditor/CkEditor";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";
import { useNavigate } from "react-router-dom";

const AddFlights = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    sector: "",
    category: "",
    airline: "",
    seatsAvailable: "",
    totalSeats: "",
    price: "",
    status: "active",
    pnrNo: "",
    rules: "",
    baggages: "",
    meals: true,
    layover: false, // Assuming another new field for layover
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    let parsedValue: string | number | boolean = value;

    // Adjust parsing based on field type
    if (type === "number") {
      parsedValue = parseInt(value, 10); // Parse to integer
    } else if (type === "checkbox") {
      parsedValue = checked; // Use checked value directly for checkboxes
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: parsedValue,
    }));
  };
  const handleEditorChange = (data: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      rules: data,
    }));
  };

  const createFlight = async () => {
    try {
      // Convert price to string if needed
      const body = {
        ...formData,
        price: String(formData.price), // Ensure price is a string
      };

      let res = await createGroupFlight(body);
      if (res) {
        console.log(res, "resflight");
        toast.success("Flight created successfully!");
        await groupFlight();
        navigate("/allgroups");
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  const handleSubmit = () => {
    createFlight();
  };

  return (
    <>
      <div className="cs-table p-2">
        <DynamicHeaderStructure title={"Add Property"} />
        <br />
        <DynamicHeaderStructure title={"1. Property Details"} />
        <div className="row">
          <div
            className="col-md-12 pt-3"
            style={{ backgroundColor: "#fff", paddingBottom: "20px" }}
          >
            <div className="row">
              <div className="col-md-6 pt-3">
                <div className="simple-text">PNR</div>
                <div className="pt-2">
                  <Input
                    type="text"
                    name="pnrNo"
                    value={formData.pnrNo}
                    onChange={handleChange}
                    style={{ width: "90%" }}
                    placeholder="PNR"
                  />
                </div>
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">Group Name</div>
                <div className="pt-2">
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ width: "90%" }}
                    placeholder="Group Name"
                  />
                </div>
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">Sector</div>
                <div className="pt-2">
                  <Input
                    type="text"
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    style={{ width: "90%" }}
                    placeholder="Sector"
                  />
                </div>
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">Category</div>
                <div className="pt-2">
                  <Input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    style={{ width: "90%" }}
                    placeholder="Category"
                  />
                </div>
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">Airline</div>
                <div className="pt-2">
                  <Input
                    type="text"
                    name="airline"
                    value={formData.airline}
                    onChange={handleChange}
                    style={{ width: "90%" }}
                    placeholder="Airline"
                  />
                </div>
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">Total Seats</div>
                <div className="pt-2">
                  <Input
                    type="number"
                    name="totalSeats"
                    value={formData.totalSeats}
                    onChange={handleChange}
                    style={{ width: "90%" }}
                    placeholder="Total Seats"
                  />
                </div>
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">Price Tester</div>
                <div className="pt-2">
                  <Input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    style={{ width: "90%" }}
                    placeholder="Price"
                  />
                </div>
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">Baggages</div>
                <div className="pt-2">
                  <Input
                    type="text"
                    name="baggages" // Corrected to "bages" assuming it's a typo
                    value={formData.baggages}
                    onChange={handleChange}
                    style={{ width: "90%" }}
                    placeholder="baggages"
                  />
                </div>
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">Rules</div>
                <div className="pt-2">
                  <Input
                    type="text"
                    name="rules"
                    value={formData.rules}
                    onChange={handleChange}
                    style={{ width: "90%" }}
                    placeholder="Rules"
                  />
                </div>
              </div>
              <div className="col-md-6 pt-3">
                <div className="simple-text">Seats Available</div>
                <div className="pt-2">
                  <Input
                    type="number"
                    name="seatsAvailable" // Assuming this is the new field for seats available
                    value={formData.seatsAvailable}
                    onChange={handleChange}
                    style={{ width: "90%" }}
                    placeholder="Seats Available"
                  />
                </div>
              </div>
              <div className="col-md-12 switchBtn">
                <Switch
                  checked={formData.meals}
                  // onChange={handleSwitchChange}
                  style={{
                    width: "30px",
                    height: "22px",
                    marginLeft: "10px",
                    marginTop: "20px",
                  }}
                />
                <label style={{ paddingLeft: "10px", paddingTop: "8px" }}>
                  Active/Deactive
                </label>
              </div>
              <div className="col-md-12 switchBtn">
                <Switch
                  checked={formData.layover} // Assuming this is the new field for layover
                  onChange={(checked) =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      layover: checked,
                    }))
                  }
                  style={{
                    width: "30px",
                    height: "22px",
                    marginLeft: "10px",
                    marginTop: "20px",
                  }}
                />
                <label style={{ paddingLeft: "10px", paddingTop: "8px" }}>
                  Is Layover
                </label>
              </div>
            </div>
            <div
              className="ckEdit"
              style={{
                marginTop: "20px",
                borderBottom: "1px solid #E7E7E7",
                paddingBottom: "20px",
                marginBottom: "20px",
              }}
            >
              <DynamicHeaderStructure title={"Rules"} />
              <div style={{ height: "250px" }}>
                <Ckeditor
                  initialData={formData.rules}
                  onChange={handleEditorChange}
                />
              </div>
            </div>
            <div className="col-md-12 d-flex pt-3">
              <div className="col-md-3">
                <div className="simple-text">Depart Date</div>
                <div className="pt-1">
                  <Select style={{ width: "90%" }}>
                    <option value="1">Test</option>
                    <option value="1">Test</option>
                    <option value="1">Test</option>
                  </Select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="simple-text">Depart Time</div>
                <div className="pt-1">
                  <Select style={{ width: "90%" }}>
                    <option value="1">Test</option>
                    <option value="1">Test</option>
                    <option value="1">Test</option>
                  </Select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="simple-text">Country</div>
                <div className="pt-1">
                  <Input
                    type="text"
                    style={{ width: "90%" }}
                    placeholder="Country"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="simple-text">City</div>
                <div className="pt-1">
                  <Input
                    type="text"
                    style={{ width: "90%" }}
                    placeholder="City"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 d-flex pt-3">
              <div className="col-md-3">
                <div className="simple-text">Arrival Date</div>
                <div className="pt-1">
                  <Select style={{ width: "90%" }}>
                    <option value="1">Test</option>
                    <option value="1">Test</option>
                    <option value="1">Test</option>
                  </Select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="simple-text">Arrival Time</div>
                <div className="pt-1">
                  <Select style={{ width: "90%" }}>
                    <option value="1">Test</option>
                    <option value="1">Test</option>
                    <option value="1">Test</option>
                  </Select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="simple-text">Country</div>
                <div className="pt-1">
                  <Input
                    type="text"
                    style={{ width: "90%" }}
                    placeholder="Country"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="simple-text">City</div>
                <div className="pt-1">
                  <Input
                    type="text"
                    style={{ width: "90%" }}
                    placeholder="City"
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                borderBottom: "1px solid #E7E7E7",
                paddingBottom: "20px",
              }}
            >
              {/* Additional UI elements as needed */}
            </div>
            <div
              style={{
                borderBottom: "0px solid #E7E7E7",
                paddingBottom: "20px",
              }}
            >
              <Button
                className="cust-btn"
                onClick={handleSubmit}
                style={{ margin: "40px auto 0px", marginRight: "0px" }}
              >
                Save Group Flight
              </Button>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="border-bottom pt-5"></div>
      <div className="cs-table p-2"> </div>
    </>
  );
};

export default AddFlights;
