import { Input, Select } from "antd";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { createFlightDeparture } from "../../redux/apis/apisCrud";
import { useNavigate, useParams } from "react-router-dom";

const AddGroupFlight = () => {
  const id = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    departureDate: "",
    departureTime: "",
    name: "",
    email: "",
    passportNo: "",
    departureCity: "",
    arrivalDate: "",
    arrivalTime: "",
    arrivalCity: "",
    type: "string",
    isLayover: true,
    layover: {},
    groupFlight: id.id,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const departureFlight = async () => {
    try {
      let res = await createFlightDeparture(formData);
      if (res) {
        console.log(res, "createFlight");
        toast.success("Flight created successfully!");
        navigate("/allgroups");
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  return (
    <>
      <div className="col-md-12 d-flex pt-3">
        <div className="col-md-3">
          <div className="simple-text">Depart Date</div>
          <div className="pt-1">
            <Input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="simple-text">Depart Time</div>
          <div className="pt-1">
            <Input
              type="time"
              name="departureTime"
              value={formData.departureTime}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div className="simple-text">City</div>
          <div className="pt-1">
            <Input
              type="text"
              name="departureCity"
              style={{ width: "90%" }}
              placeholder="City"
              value={formData.departureCity}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="simple-text">Passport Number</div>
          <div className="pt-1">
            <Input
              type="text"
              name="passportNo"
              style={{ width: "90%" }}
              placeholder="City"
              value={formData.passportNo}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="col-md-12 d-flex pt-3">
        <div className="col-md-3">
          <div className="simple-text">Arrival Date</div>
          <div className="pt-1">
            <Input
              type="date"
              name="arrivalDate"
              value={formData.arrivalDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="simple-text">Arrival Time</div>
          <div className="pt-1">
            <Input
              type="time"
              name="arrivalTime"
              value={formData.arrivalTime}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div className="simple-text">City</div>
          <div className="pt-1">
            <Input
              type="text"
              name="arrivalCity"
              style={{ width: "90%" }}
              placeholder="City"
              value={formData.arrivalCity}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="simple-text">Name</div>
          <div className="pt-1">
            <Input
              type="text"
              name="name"
              style={{ width: "90%" }}
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="col-md-3 mt-2">
        <div className="simple-text">Email</div>
        <div className="pt-1">
          <Input
            type="text"
            name="email"
            style={{ width: "90%" }}
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
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
          onClick={departureFlight}
          style={{ margin: "40px auto 0px", marginRight: "0px" }}
        >
          Save Flight
        </Button>
      </div>
    </>
  );
};

export default AddGroupFlight;
