import React from "react";

import { Images } from "../../components/Config/Images";
import TableView from "../../components/TableView/TableView";
import { DatePicker, Select } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";
const data = [
  {
    ApplicationNo: "kajbdsf",
    KastleContractNo: "2235",
    KastleApplicationNo: "1234",
    KastleStatus: "11@gmail.com",
    ContractStatus: "--",
    CustomerName: "---",
    CRNo: "--",
    Product: "11@gmail.com",
    LoanTenure: "--",
    LoanAmount: "11@gmail.com",
    ApplicationDate: "--",
    Status: "11@gmail.com",
    Reason: "--",
    Action: "11@gmail.com",
  },
];

const PendingLoans = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let inventoryId = String(location.pathname.split("/")[2]) ?? null;
  console.log(inventoryId, "inventoryId");
  const urlWithoutPrefix = inventoryId.replace("pending", "");
  console.log(urlWithoutPrefix, "urlWithoutPrefix");
  const actionSelect = [
    { label: "View", img: Images.listIcon, Link: "detail" },
    {
      label: "Documents",
      img: Images.settingIcon,
      Link: "application-document",
    },
    { label: "Activity Logs", img: Images.settingIcon, Link: "activity-log" },
    { label: "Resend Login Email", img: Images.settingIcon, Link: "edit" },
  ];
  const handleURL = (link: any) => {
    if (link === "View") {
      navigate(`/applications/all/detail`);
    }
    if (link === "Documents") {
      navigate(`/applications/all/application-document`);
    }
    if (link === "Activity Logs") {
      navigate(`/applications/all/activity-log`);
    }
  };
  const Pending_Loans_Header = [
    {
      name: "Application No",
      selector: (row: { ApplicationNo: any }) => row.ApplicationNo,
    },
    {
      name: "Kastle Contract No",
      selector: (row: { KastleContractNo: any }) => row.KastleContractNo,
    },
    {
      name: "Kastle Application No",
      selector: (row: { KastleApplicationNo: any }) => row.KastleApplicationNo,
    },
    {
      name: "Kastle Status",
      selector: (row: { KastleStatus: any }) => row.KastleStatus,
    },
    {
      name: "Contract Status",
      selector: (row: { ContractStatus: any }) => row.ContractStatus,
    },
    {
      name: "Customer Name",
      selector: (row: { CustomerName: any }) => row.CustomerName,
    },
    {
      name: "CR No.",
      selector: (row: { CRNo: any }) => row.CRNo,
    },

    {
      name: "Product",
      selector: (row: { Product: any }) => row.Product,
    },
    {
      name: "Loan Tenure",
      selector: (row: { LoanTenure: any }) => row.LoanTenure,
    },
    {
      name: "Loan Amount",
      selector: (row: { LoanAmount: any }) => row.LoanAmount,
    },
    {
      name: "Application Date",
      selector: (row: { ApplicationDate: any }) => row.ApplicationDate,
    },
    {
      name: "Status",
      selector: (row: { Status: any }) => row.Status,
    },
    {
      name: "Reason",
      selector: (row: { Reason: any }) => row.Reason,
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
                        handleURL(item.label);
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
  const button = [
    {
      title: "Export CSV",
    },
  ];
  return (
    <>
      <div className="cs-table">
        {/* <div className="col-xl-12 col-12 d-flex align-items-center pb-3">
          <h2 className="col-xl-4 col-12 fs-6 fw-bold">
            Pending Financing Applications
          </h2>
          <div className="col-xl-8 col-12 d-flex justify-content-end align-items-center">
            <div className="d-grid pb-2 search-bar">
              <label htmlFor="" className="label-theme">
                Partner
              </label>
              <Select style={{ width: "130px" }}>
                <option value="1">Test</option>
                <option value="1">Test</option>
                <option value="1">Test</option>
              </Select>
            </div>
            <form
              action=""
              className=" d-flex justify-content-end pb-2 search-bar"
            >
              <div className="d-flex justify-content-between ">
                <div className="d-grid">
                  <label htmlFor="" className="label-theme">
                    From
                  </label>
                  <DatePicker
                    style={{
                      width: "200px",
                      height: "36px",
                      marginRight: "10px",
                    }}
                  />
                </div>

                <div className="d-grid">
                  <label htmlFor="" className="label-theme">
                    To
                  </label>
                  <DatePicker
                    style={{
                      width: "200px",
                      height: "36px",
                    }}
                  />
                </div>
              </div>
            </form>
            <div className="theme-btn mt-1">Export CSV</div>
          </div>
        </div> */}
        <DynamicHeaderStructure
          title={"Pending Financing Applications"}
          status={actionSelect}
          button={button}
          filter={true}
        />
        <TableView header={Pending_Loans_Header} data={data} />
      </div>
    </>
  );
};
export default PendingLoans;
