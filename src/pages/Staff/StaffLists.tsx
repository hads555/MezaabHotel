import TableView from "../../components/TableView/TableView";
import { DatePicker, Switch } from "antd";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";
import { Navigate, useNavigate } from "react-router-dom";
import { text } from "stream/consumers";

const data = [
  {
    Name: "Haider",
    Roletype: "Developer",
    Action:"Edit",
  },
];
const button =[{
  title:"Add New Role"
}]
const StaffLists = () => {
  const navigate=useNavigate()
  const Customer_List_Header = [
    {
      name: "Name",
      selector: (row: { Name: any }) => row.Name,
      textDecoration: 'left',

    },
    {
        name: "Role type",
        selector: (row: { Roletype: any }) => row.Roletype,
     
      },
      {
        name: "Action",
        selector: (row: { Action: any }) => row.Action,
        textDecoration: 'left',
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
                      backgroundColor: "#3AB4FB",
                      color: "white",
                      marginRight: "4px",
                    }}
                  >
                   Permissions
                  </div>
                  <div
                    style={{
                      padding: ".25rem 0.5rem",
                      borderRadius: "4px",
                      backgroundColor: "#FF3333",
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
        <DynamicHeaderStructure title={"Staff List"} filter={true} button={button} />
        <TableView header={Customer_List_Header} data={data} />
      </div>
    </>
  );
};
export default StaffLists;
