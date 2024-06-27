export const Customer_List_Header = [
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
  },
];

export const Source_Of_Revenue_Header = [
  {
    name: "Name",
    selector: (row: { Name: any }) => row.Name,
  },
  {
    name: "Change Status",
    selector: (row: { changeStatus: any }) => row.changeStatus,
  },
  {
    name: "Status",
    selector: (row: { Status: any }) => row.Status,
  },
  {
    name: "Action",
    selector: (row: { Action: any }) => row.Action,
  },
];
export const Purpose_Of_Revenue_Header = [
  {
    name: "Name",
    selector: (row: { Name: any }) => row.Name,
  },
  {
    name: "Status",
    selector: (row: { Status: any }) => row.Status,
  },
  {
    name: "Change Status",
    selector: (row: { changeStatus: any }) => row.changeStatus,
  },

  {
    name: "Action",
    selector: (row: { Action: any }) => row.Action,
  },
];
export const Check_Types_Header = [
  {
    name: "Name",
    selector: (row: { Name: any }) => row.Name,
  },
  {
    name: "Status",
    selector: (row: { Status: any }) => row.Status,
  },
  {
    name: "Action",
    selector: (row: { Action: any }) => row.Action,
  },
];
export const Types_Reasons_Header = [
  {
    name: "Name",
    selector: (row: { Name: any }) => row.Name,
  },
  {
    name: "Reason",
    selector: (row: { Reasons: any }) => row.Reasons,
  },
  {
    name: "Status",
    selector: (row: { Status: any }) => row.Status,
  },
  {
    name: "Action",
    selector: (row: { Action: any }) => row.Action,
  },
];
export const All_Application_Header = [
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
  },
];

export const Rejected_Loans_Header = [
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
  },
];
export const InComplete_Loans_Header = [
  {
    name: "Application No",
    selector: (row: { ApplicationNo: any }) => row.ApplicationNo,
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
    name: "Application Date",
    selector: (row: { ApplicationDate: any }) => row.ApplicationDate,
  },
  {
    name: "Status",
    selector: (row: { Status: any }) => row.Status,
  },
  {
    name: "Customer Mobile",
    selector: (row: { CustomerMobile: any }) => row.CustomerMobile,
  },
  {
    name: "Reason from Partner",
    selector: (row: { ReasonFromPartner: any }) => row.ReasonFromPartner,
  },
  {
    name: "Reason",
    selector: (row: { Reason: any }) => row.Reason,
  },
  {
    name: "Action",
    selector: (row: { Action: any }) => row.Action,
  },
];
export const Cancelled_Header = [
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
  },
];
export const Activity_Loans_Header = [
  {
    name: "ID",
    selector: (row: { Id: any }) => row.Id,
  },
  {
    name: "Application No.",
    selector: (row: { ApplicationNo: any }) => row.ApplicationNo,
  },

  {
    name: "Time",
    selector: (row: { Time: any }) => row.Time,
  },
  {
    name: "Date",
    selector: (row: { Date: any }) => row.Date,
  },
  {
    name: "Updated By",
    selector: (row: { UpdatedBy: any }) => row.UpdatedBy,
  },
  {
    name: "Event",
    selector: (row: { Event: any }) => row.Event,
  },
  {
    name: "Changes",
    selector: (row: { Changes: any }) => row.Changes,
  },
];
export const Recent_Application_Header = [
  {
    name: "Application No",
    selector: (row: { ApplicationNo: any }) => row.ApplicationNo,
  },
  {
    name: "Customer Name.",
    selector: (row: { cusotmerName: any }) => row.cusotmerName,
  },

  {
    name: "Phone",
    selector: (row: { phoneNo: any }) => row.phoneNo,
  },
  {
    name: "Date",
    selector: (row: { date: any }) => row.date,
  },
  {
    name: "Amount",
    selector: (row: { amount: any }) => row.amount,
  },
  {
    name: "Parent Status",
    selector: (row: { parentStatus: any }) => row.parentStatus,
  },
  {
    name: "Status",
    selector: (row: { status: any }) => row.status,
  },
  {
    name: "Action",
    selector: (row: { Action: any }) => row.Action,
  },
];
