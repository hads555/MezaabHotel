import TableView from "../../components/TableView/TableView";
import { DatePicker } from "antd";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";
import { Navigate, useNavigate } from "react-router-dom";

const data = [
  {
    Customer: "123467",
    ProductName: "The Makkah Hights",
    ApplicationNo: "Apartment",
    CrNumber: "Saudi Arabia",
    Email: "Makkah",
    Phone: "221, Haram Street, Main Makkah Road ",
    Date: "20",
    ParentStatus: "12",
    Status: "M Abdullah",
    Action: "Detail",
  },
];
const button =[{
  title:"Add New Property"
}]
const CustomerList = () => {
  const navigate=useNavigate()
  const Customer_List_Header = [
    {
      name: "PID",
      selector: (row: { Customer: any }) => row.Customer,
    },
    {
      name: "Property Name",
      selector: (row: { ProductName: any }) => row.ProductName,
    },
    {
      name: "Property Type",
      selector: (row: { ApplicationNo: any }) => row.ApplicationNo,
    },
    {
      name: "Country",
      selector: (row: { CrNumber: any }) => row.CrNumber,
    },
    {
      name: "City",
      selector: (row: { Email: any }) => row.Email,
    },
    {
      name: "Address",
      selector: (row: { Phone: any }) => row.Phone,
    },
    {
      name: "No. of Rooms",
      selector: (row: { Date: any }) => row.Date,
    },
    {
      name: "Available Room",
      selector: (row: { ParentStatus: any }) => row.ParentStatus,
    },
    {
      name: "Manager Name",
      selector: (row: { Status: any }) => row.Status,
    },
    {
      name: "Action",
      selector: (row: { Action: any }) => row.Action,
      cell :(row: any, index: any) => (
        <div
        style={{
          padding: ".25rem 0.5rem",
          borderRadius: "4px",
          backgroundColor: "#4253a1",
          color: "white",
          marginRight: "4px",
        }}
        onClick={()=>{
          navigate("/FieldInvestigation")
        }}
      >
        Detail
      </div>
      ),
    },
  ];
  return (
    <>
      <div className="cs-table new-lists">
        <DynamicHeaderStructure title={"All Properties List"} filter={true} button={button} />
        <TableView header={Customer_List_Header} data={data} />
      </div>
    </>
  );
};
export default CustomerList;
