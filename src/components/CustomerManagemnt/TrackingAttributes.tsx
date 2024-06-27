import { Customer_List_Header } from "../../components/Config/TableHeaders";
import TableView from "../../components/TableView/TableView";
import { DatePicker } from "antd";
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
const button = [{ title: "Edit" }, { title: "View" }, { title: "Audit" }];
const buttonSub = [{ title: "Add" }];
const TrackingAttributes = () => {
  return (
    <>
      <div className="cs-table p-2">
        <DynamicHeaderStructure title={"Tracking Attributes"} button={button} />
        <TableHeaderFilter />
        <TableView header={Customer_List_Header} data={data} />
      </div>
    </>
  );
};
export default TrackingAttributes;
