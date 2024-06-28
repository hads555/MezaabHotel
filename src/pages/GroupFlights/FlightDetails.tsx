import { Switch } from "antd";
import React, { useEffect, useState } from "react";
import TableView from "../../components/TableView/TableView";
import { groupFlight, groupFlightById } from "../../redux/apis/apisCrud";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const FlightDetails = () => {
  const id = useParams();
  console.log(id, "123456787654345678");
  const [viewDetails, setViewDetails] = useState<any>();
  const Customer_List_Header = [
    {
      name: "Departure Date",
      selector: (row: { departureDate: any }) => row.departureDate,
    },
    {
      name: "Departure Time",
      selector: (row: { departureTime: any }) => row.departureTime,
    },
    {
      name: "Departure City",
      selector: (row: { departureCity: any }) => row.departureCity,
    },
    {
      name: "Arrival Time",
      selector: (row: { arrivalTime: any }) => row.arrivalTime,
    },
    {
      name: "Arrival Date",
      selector: (row: { arrivalDate: any }) => row.arrivalDate,
    },
    {
      name: "Arrival City",
      selector: (row: { arrivalCity: any }) => row.arrivalCity,
    },
    {
      name: "Name",
      selector: (row: { name: any }) => row.name,
    },
    {
      name: "Email",
      selector: (row: { email: any }) => row.email,
    },
    {
      name: "Passport",
      selector: (row: { passportNo: any }) => row.passportNo,
    },
    // {
    //   name: "Is Layover",
    //   selector: (row: { isLayover: any }) => (row.isLayover ? "Yes" : "No"),
    // },
    // {
    //   name: "Layover",
    //   selector: (row: { layover: any }) => row.layover,
    // },
    // {
    //   name: "Group Flight",
    //   selector: (row: { groupFlight: any }) => row.groupFlight,
    // },
  ];
  const getGroupFlight = async (id: any) => {
    try {
      const response = await groupFlightById(id);
      if (response) {
        console.log(response.data.data.flights, "12");
        const allFlights = response.data.data.data;
        setViewDetails(response.data.data.flights);
      } else {
        toast.error("Invalid data format received from API");
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };
  const mappedData =
    viewDetails &&
    viewDetails?.map((item: any) => ({
      departureDate: item.departureDate,
      departureTime: item.departureTime || "",
      departureCity: item.departureCity || "",
      arrivalTime: item.arrivalTime || "",
      arrivalDate: item.arrivalDate || "",
      arrivalCity: item.arrivalCity || "",
      name: item.name || "",
      email: item.email || "",
      passportNo: item.passportNo || "",
    }));

  useEffect(() => {
    getGroupFlight(id.id);
  }, []);
  return (
    <div>
      {" "}
      <TableView header={Customer_List_Header} data={mappedData} />
    </div>
  );
};

export default FlightDetails;
