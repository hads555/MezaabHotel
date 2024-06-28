import TableView from "../../components/TableView/TableView";
import { DatePicker, Switch } from "antd";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";
import { Navigate, useNavigate } from "react-router-dom";

const data = [
  {
    Serialnumber: "01",
    Pnrnumber: "PK123456798",
    Classnum: "Economy",
    Datenum: "12/05/2024",
    Name: "Umrah 1",
    Sector: "ISB - JED",
    Category: "Umrah",
    Airline: "Emirates",
    Seatavaliable: "15",
    Bookseat: "Detail",
    Totalseat:"50",
    Status:"",
    Action:"Edit",
  },
];
const button =[{
  title:"Add New Group"
}]
const AllAgents = () => {
  const navigate=useNavigate()
  const Customer_List_Header = [
    {
      name: "Sr. No.",
      selector: (row: { Serialnumber: any }) => row.Serialnumber,
    },
    {
      name: "PNR No.",
      selector: (row: { Pnrnumber: any }) => row.Pnrnumber,
    },
    {
      name: "Class",
      selector: (row: { Classnum: any }) => row.Classnum,
    },
    {
      name: "Date",
      selector: (row: { Datenum: any }) => row.Datenum,
    },
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
        cell: (row: any, index: any) => (
          <div>
          
           <Switch style={{ width: '30px', height: '22px' , marginLeft:'10px' , marginTop:'10px' }} />

          </div>
        ),
      },
     
      {
        name: "Action",
        selector: (row: { Action: any }) => row.Action,
        cell :(row: any, index: any) => (
          <div
          style={{
            padding: ".25rem 0.5rem",
            borderRadius: "4px",
            backgroundColor: "#FD7A02",
            color: "white",
            marginRight: "4px",
          }}
          onClick={()=>{
            navigate("/addagents")
          }}
        >
            EDIT
            </div>
        ),
      },
  ];
  return (
    <>
      <div className="cs-table new-lists">
        <DynamicHeaderStructure title={"All Groups"} filter={true} button={button} />
        <TableView header={Customer_List_Header} data={data} />
      </div>
    </>
  );
};
export default AllAgents;
