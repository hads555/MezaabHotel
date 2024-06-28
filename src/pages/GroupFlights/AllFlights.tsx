import React, { useEffect, useState } from "react";
import { Switch } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { groupFlight } from "../../redux/apis/apisCrud";
import toast from "react-hot-toast";
import TableView from "../../components/TableView/TableView";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";

const AllFlights = () => {
  const [flightData, setFlightData] = useState<any>([]);
  const id = useParams;

  const navigate = useNavigate();
  const button = [
    {
      title: "Add New Group",
      onClick: () => {
        navigate("/addflights");
      },
    },
  ];
  const Customer_List_Header = [
    {
      name: "PNR No.",
      selector: (row: { Pnrnumber: any }) => row.Pnrnumber,
    },
    {
      name: "Price",
      selector: (row: { Price: any }) => row.Price,
    },
    {
      name: "Rules",
      selector: (row: { Rules: any }) => row.Rules,
    },
    {
      name: "Bagges",
      selector: (row: { Bagges: any }) => row.Bagges,
    },
    // {
    //   name: "Meals",
    //   selector: (row: { Meals: any }) => row.Meals,
    // },
    {
      name: "Name",
      selector: (row: { Name: any }) => row.Name,
    },
    {
      name: "Sector",
      selector: (row: { Sector: any }) => row.Sector,
    },
    {
      name: "Category",
      selector: (row: { Category: any }) => row.Category,
    },
    {
      name: "Airline",
      selector: (row: { Airline: any }) => row.Airline,
    },
    {
      name: "Seats Available",
      selector: (row: { Seatavaliable: any }) => row.Seatavaliable,
    },
    {
      name: "Booked Seats",
      selector: (row: { Bookseat: any }) => row.Bookseat,
    },
    {
      name: "Total Seats",
      selector: (row: { Totalseat: any }) => row.Totalseat,
    },
    {
      name: "Status",
      selector: (row: { Status: any }) => row.Status,
      cell: (row: any) => (
        <div>
          <Switch
            style={{
              width: "30px",
              height: "22px",
              marginLeft: "10px",
              marginTop: "10px",
            }}
          />
        </div>
      ),
    },
    {
      name: "Action",
      selector: (row: { Action: any }) => row.Action,
      cell: (row: any) => (
        <>
          <div
            style={{
              padding: ".25rem 0.5rem",
              borderRadius: "4px",
              backgroundColor: "#FD7A02",
              color: "white",
              width: "350px",
              marginRight: "4px",
            }}
            onClick={() => {
              navigate(`/addindividualFlight/${row.id}`);
            }}
          >
            Add Flight
          </div>
          <div
            style={{
              padding: ".25rem 0.5rem",
              borderRadius: "4px",
              width: "250px",
              backgroundColor: "#FD7A02",
              color: "white",
              marginRight: "4px",
            }}
            onClick={() => {
              navigate(`/flightdetails/${row.id}`);
            }}
          >
            View Flight
          </div>
        </>
      ),
    },
  ];

  const getGroupFlight = async () => {
    try {
      const response = await groupFlight();
      if (response) {
        setFlightData(response.data.data.data);
      } else {
        toast.error("Invalid data format received from API");
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };
  const mappedData =
    flightData &&
    flightData?.map((item: any) => ({
      id: item.id,
      Pnrnumber: item.pnrNo || "",
      Price: item.price || "",
      Rules: item.rules || "",
      Bagges: item.baggages || "",
      Name: item.name || "",
      Sector: item.sector || "",
      Category: item.category || "",
      Airline: item.airline || "",
      Seatavaliable: parseInt(item.seatsAvailable) || 0,
      Bookseat: 0, // Adjust this if your API response has this field
      Totalseat: parseInt(item.totalSeats) || 0,
      Status: item.status || "",
      Meals: item.meals || "",
    }));

  useEffect(() => {
    getGroupFlight();
  }, []);

  return (
    <div className="cs-table new-lists">
      <DynamicHeaderStructure
        title={"All Groups"}
        filter={true}
        button={button}
      />
      <TableView header={Customer_List_Header} data={mappedData} />
    </div>
  );
};

export default AllFlights;
