import TableView from "../../components/TableView/TableView";
import { DatePicker } from "antd";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";
import { Navigate, useNavigate } from "react-router-dom";
import { allHotels } from "../../redux/apis/apisCrud";
import { useEffect, useState } from "react";

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

const CustomerList = () => {
  const navigate = useNavigate();
  const [allPushNotificaions, setAllPushNotificaions] = useState<any>("");
  const Customer_List_Header = [
    {
      name: "PID",
      selector: (row: { pid: any }) => row.pid,
    },
    {
      name: "Property Name",
      selector: (row: { title: any }) => row.title,
    },
    {
      name: "Property Type",
      selector: (row: { ApplicationNo: any }) => row.ApplicationNo,
    },
    {
      name: "Country",
      selector: (row: { country: any }) => row.country,
    },
    {
      name: "City",
      selector: (row: { city: any }) => row.city,
    },
    {
      name: "Address",
      selector: (row: { address: any }) => row.address,
    },
    {
      name: "No. of Rooms",
      selector: (row: { room: any }) => row.room,
    },
    {
      name: "Available Room",
      selector: (row: { ParentStatus: any }) => row.ParentStatus,
    },
    {
      name: "Manager Email",
      selector: (row: { email: any }) => row.email,
    },
    {
      name: "Action",
      selector: (row: { Action: any }) => row.Action,
      cell: (row: any, index: any) => (
        <div
          style={{
            padding: ".25rem 0.5rem",
            borderRadius: "4px",
            backgroundColor: "#4253a1",
            color: "white",
            marginRight: "4px",
          }}
          onClick={() => {
            navigate(`/propertydetail/${row.action}`);
            console.log(row, "row");
          }}
        >
          Detail
        </div>
      ),
    },
  ];
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
  const mappedData =
    allPushNotificaions &&
    allPushNotificaions.map((item: any) => {
      let contentHTML;
      // Assuming you have some condition to determine the status dynamically from API data
      if (item.message) {
        contentHTML = item.message;
      } else {
        contentHTML = "-";
      }
      return {
        pid: "123",
        title: item.title ? item.title : "-",
        content: contentHTML,
        country: item?.address?.country ? item.address.country : "-",
        city: item?.address?.city ? item.address.city : "-",
        address: item?.address?.addressLine1 ? item.address.addressLine1 : "-",
        room: item.rooms.length,
        email: item.email,
        action: item.id,
      };
    });
  const button = [
    {
      title: "Add New Property",
      onClick: () => {
        navigate("/FieldInvestigation");
      },
    },
  ];
  return (
    <>
      <div className="cs-table new-lists">
        <DynamicHeaderStructure
          title={"All Properties List"}
          filter={true}
          button={button}
        />
        <TableView header={Customer_List_Header} data={mappedData} />
      </div>
    </>
  );
};
export default CustomerList;