import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import TableView from "../../components/TableView/TableView";
import { Dropdown } from "react-bootstrap";
import { Images } from "../../components/Config/Images";
import { Link } from "react-router-dom";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";

const CustomerList = () => {
  const checkReduxState = useSelector((state: RootState) => state.block.check);
  console.log(checkReduxState, "checkReduxState");
  const data = [
    {
      ProductNameEr: "jhdbfs",
      ProductNameAr: "kajbdsf",
      Logo: "-",
      Email: "11@gmail.com",
      Phone: "123456",
      Date: "12.34.2044",
      ParentStatus: "---",
      Status: "active",
      Action: "--",
    },
  ];
  const actionSelect = [
    { label: "Partners", img: Images.listIcon, Link: "partner" },
    { label: "Settings", img: Images.settingIcon, Link: "setting/2" },
    { label: "Documents", img: Images.settingIcon, Link: "document" },
    { label: "Edit", img: Images.settingIcon, Link: "edit" },
  ];
  const Product_Management_Header = [
    {
      name: "Product Name(En)",
      selector: (row: { ProductName: any }) => row.ProductName,
    },
    {
      name: "Product Name(Ar)",
      selector: (row: { CrNumber: any }) => row.CrNumber,
    },
    {
      name: "Logo",
      selector: (row: { Logo: any }) => row.Logo,
    },
    {
      name: "Email",
      selector: (row: { Email: any }) => row.Email,
    },
    {
      name: "Phone",
      selector: (row: { Phone: any }) => row.Phone,
    },
    {
      name: "Date",
      selector: (row: { Date: any }) => row.Date,
    },
    {
      name: "Parent Status",
      selector: (row: { ParentStatus: any }) => row.ParentStatus,
    },
    {
      name: "Status",
      selector: (row: { Status: any }) => row.Status,
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
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={item.Link}
                    >
                      <div className="d-flex">
                        <div className="col-3">
                          <img src={item.img} alt="" />
                        </div>

                        {item.label}
                      </div>
                    </Link>
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
      <div className="cs-table">
        <DynamicHeaderStructure title={"Product Management"} filter={false} />
        <TableView header={Product_Management_Header} data={data} />
      </div>
    </>
  );
};
export default CustomerList;
