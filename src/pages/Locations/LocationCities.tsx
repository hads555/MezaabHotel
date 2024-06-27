import TableView from "../../components/TableView/TableView";
import { DatePicker, Switch } from "antd";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";
import { Navigate, useNavigate } from "react-router-dom";


const LocationCities = () => {
    const navigate=useNavigate()

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
        title:"Add City",
        onClick: () => {
          navigate("/addcity")
        },
      }]
  const Customer_List_Header = [
    {
      name: "Name",
      selector: (row: { Serialnumber: any }) => row.Serialnumber,
    },
    {
      name: "City Code",
      selector: (row: { Pnrnumber: any }) => row.Pnrnumber,
    },
    {
      name: "Municipality ",
      selector: (row: { Classnum: any }) => row.Classnum,
    },
    {
      name: "Latitude",
      selector: (row: { Datenum: any }) => row.Datenum,
    },
    {
      name: "Longitude",
      selector: (row: { Name: any }) => row.Name,
    },
    {
      name: "Country",
      selector: (row: { Sector: any }) => row.Sector,
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
        cell: (row: any) => (
            <>
              <div className="d-flex">
                
                  <div
                    style={{
                      padding: ".25rem 0.5rem",
                      borderRadius: "4px",
                      backgroundColor: "#EE551B",
                      color: "white",
                      marginRight: "4px",
                    }}
                  >
                    Edit
                  </div>
        
                  <div
                    style={{
                      padding: ".25rem 0.5rem",
                      borderRadius: "4px",
                      backgroundColor: "#FFB157",
                      color: "white",
                      marginRight: "4px",
                    }}
                  >
                   Delete
                  </div>
              </div>
            </>
          ),
      },
  ];
  return (
    <>
      <div className="cs-table new-lists">
        <DynamicHeaderStructure title={"Countries"} filter={true} button={button} />
        <TableView header={Customer_List_Header} data={data} />
      </div>
    </>
  );
};
export default LocationCities;
