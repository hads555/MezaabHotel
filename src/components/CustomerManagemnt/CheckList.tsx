import { Customer_List_Header } from "../../components/Config/TableHeaders";
import TableView from "../../components/TableView/TableView";
import { DatePicker } from "antd";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";
import TableHeaderFilter from "../TableHeaderFilter";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Images } from "../Config/Images";

const data = [
  {
    Customer: "jhdbfs",
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
    Customer: "jhdbfs",
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
    Customer: "jhdbfs",
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
    Customer: "jhdbfs",
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
    Customer: "jhdbfs",
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
const button = [{ title: "Edit" }, { title: "View" }, { title: "Audit" }];
const buttonSub2 = [{ title: "Audit" }];
const buttonSub = [
  { title: "Save and Add" },
  { title: "Save and Stay" },
  { title: "Save and Return" },
  { title: "Return" },
];
const actionSelect = [
  { label: "View", img: Images.listIcon, Link: "customerservices" },
];

const CheckList = () => {
  const navigate = useNavigate();
  const Call_Activity_Header = [
    {
      name: "Date",
      selector: (row: { Customer: any }) => row.Customer,
    },
    {
      name: "Action",
      selector: (row: { ApplicationNo: any }) => row.ApplicationNo,
    },
    {
      name: "Result",
      selector: (row: { ProductName: any }) => row.ProductName,
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
        <div>
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
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="cs-table p-3">
        <DynamicHeaderStructure title={"Checklist Type"} button={button} />
        <TableHeaderFilter />
        <TableView header={Call_Activity_Header} data={data} />
        <DynamicHeaderStructure title={"Checklist Type"} button={buttonSub} />
      </div>
      <div className="border-bottom"></div>
      <div className="d-flex p-3">
        <div className="col-md-2 pt-3">
          <h2 className="col-md-12 pt-4 d-flex align-items-center  fs-6 fw-bold">
            {"Checklist Action"}
          </h2>
          <div
            className="theme-btn-checklist-active"
            style={{ marginTop: "2.3rem" }}
          >
            Action - Regular
          </div>
          <div className="theme-btn-checklist-Inactive mt-1">
            Action - Regular
          </div>
        </div>
        <div className="col-md-10">
          <div className="cs-table p-3">
            <TableHeaderFilter button={buttonSub2} />
            <TableView header={Call_Activity_Header} data={data} />
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckList;
