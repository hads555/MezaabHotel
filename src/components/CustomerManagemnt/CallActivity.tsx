import { Customer_List_Header } from "../../components/Config/TableHeaders";
import TableView from "../../components/TableView/TableView";
import { DatePicker } from "antd";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";
import TableHeaderFilter from "../TableHeaderFilter";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Images } from "../Config/Images";
import { useState } from "react";

const initialData = [
  {
    id: "1",
    name: "jhdbfs",
    ProductName: "kajbdsf",
    ApplicationNo: "2235",
    CrNumber: "1234",
    Email: "11@gmail.com",
    Phone: "123456",
    Date: "12.34.2044",
    ParentStatus: "---",
    Status: "active",
    Action: "--",
  },
  {
    id: "2",
    name: "jhdbfs",
    ProductName: "kajbdsf",
    ApplicationNo: "2235",
    CrNumber: "1234",
    Email: "11@gmail.com",
    Phone: "123456",
    Date: "12.34.2044",
    ParentStatus: "---",
    Status: "active",
    Action: "--",
  },
  {
    id: "3",
    name: "jhdbfs",
    ProductName: "kajbdsf",
    ApplicationNo: "2235",
    CrNumber: "1234",
    Email: "11@gmail.com",
    Phone: "123456",
    Date: "12.34.2044",
    ParentStatus: "---",
    Status: "active",
    Action: "--",
  },
  {
    id: "4",
    name: "jhdbfs",
    ProductName: "kajbdsf",
    ApplicationNo: "2235",
    CrNumber: "1234",
    Email: "11@gmail.com",
    Phone: "123456",
    Date: "12.34.2044",
    ParentStatus: "---",
    Status: "active",
    Action: "--",
  },
  {
    id: "5",
    name: "jhdbfs",
    ProductName: "kajbdsf",
    ApplicationNo: "2235",
    CrNumber: "1234",
    Email: "11@gmail.com",
    Phone: "123456",
    Date: "12.34.2044",
    ParentStatus: "---",
    Status: "active",
    Action: "--",
  },
];

const button = [
  { title: "Save and Add" },
  { title: "Save and Stay" },
  { title: "Save and Return" },
  { title: "Return" },
];

const actionSelect = [
  { label: "View", img: Images.listIcon, Link: "customerservices" },
];

const buttonSub = [{ title: "Add" }];

const CallActivity = () => {
  const navigate = useNavigate();
  const [editRowId, setEditRowId] = useState(null);
  const [data, setData] = useState(initialData);
  const [editFormData, setEditFormData] = useState<any>({});

  const handleEditClick = (row: any) => {
    setEditRowId(row.id);
    setEditFormData({ ...row });
  };

  const handleSaveClick = (rowId: any) => {
    const newData = data.map((row: any) =>
      row.id === rowId ? { ...row, ...editFormData } : row
    );
    setData(newData);
    setEditRowId(null);
  };

  // Handle form input changes dynamically
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const Call_Activity_Header = [
    {
      name: "",
      cell: (row: any) =>
        editRowId === row.id ? (
          <div
            style={{ color: "#A0A0A0", height: "100%" }}
            className="cursor-pointer"
            onClick={() => handleSaveClick(row.id)}
          >
            ..
          </div>
        ) : (
          <div
            style={{ color: "#A0A0A0", height: "100%" }}
            className="cursor-pointer"
            onClick={() => handleEditClick(row)}
          >
            .
          </div>
        ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: "Date",
      selector: "Date",
      cell: (row: any) =>
        editRowId === row.id ? (
          <input
            style={{ width: "90%" }}
            type="text"
            name="Date"
            value={editFormData.Date}
            onChange={handleInputChange}
          />
        ) : (
          row.Date
        ),
    },
    {
      name: "Action",
      selector: (row: { ApplicationNo: any }) => row.ApplicationNo,
    },
    {
      name: "Result",
      cell: (row: any) =>
        editRowId === row.id ? (
          <input
            style={{ width: "70%" }}
            type="text"
            name="ProductName"
            value={editFormData.ProductName}
            onChange={handleInputChange}
          />
        ) : (
          row.ProductName
        ),
    },
    {
      name: "Contact",
      selector: (row: { CrNumber: any }) => row.CrNumber,
    },
    {
      name: "Reason",
      selector: (row: { Email: any }) => row.Email,
    },
    {
      name: "Promise Date",
      selector: (row: { Phone: any }) => row.Phone,
    },
    {
      name: "Promise Amt",
      selector: (row: { Date: any }) => row.Date,
    },
    {
      name: "Current Amount Due",
      selector: (row: { ParentStatus: any }) => row.ParentStatus,
    },
    {
      name: "Condition",
      selector: (row: { Status: any }) => row.Status,
    },
    {
      name: "Appointment",
      selector: (row: { Action: any }) => row.Action,
    },
    {
      name: "Action",
      selector: (row: { Action: any }) => row.Action,
      cell: (row: any) => (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {actionSelect.map((item, index) => (
              <Dropdown.Item>
                <>
                  <div
                    className="d-flex"
                    onClick={() => {
                      navigate(`/view/${item.Link}`);
                    }}
                  >
                    <div className="col-2">
                      <img src={item.img} alt="" />
                    </div>

                    <div className="col-10">{item.label}</div>
                  </div>
                </>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      ),
    },
  ];

  return (
    <>
      <div className="cs-table p-2">
        <DynamicHeaderStructure title={"Call Activity"} button={button} />
        <TableHeaderFilter button={buttonSub} />
        <TableView header={Call_Activity_Header} data={data} />
      </div>
    </>
  );
};

export default CallActivity;
