import { Customer_List_Header } from "../../components/Config/TableHeaders";
import TableView from "../../components/TableView/TableView";
import { DatePicker, Select } from "antd";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";
import TableHeaderFilter from "../TableHeaderFilter";

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
];
const button = [
  { title: "Add" },
  { title: "Edit" },
  { title: "View" },
  { title: "Audit" },
];
const buttonSub = [{ title: "Add" }];
const Letters = () => {
  return (
    <>
      <div className="cs-table p-3">
        <h2 className="col-md-12 pt-2 d-flex align-items-center  fs-6 fw-bold">
          {"Letters"}
        </h2>
        <TableHeaderFilter />

        <TableView header={Customer_List_Header} data={data} />
      </div>
      <div className="cs-table p-3">
        <DynamicHeaderStructure title={"Recipient Details"} button={button} />
        <TableHeaderFilter />
        <TableView header={Customer_List_Header} data={data} />
      </div>
    </>
  );
};
export default Letters;
