import { useState } from "react";
import DataTable from "react-data-table-component";
const columns = [
  {
    name: "Title",
    selector: (row: { title: any }) => row.title,
  },
  {
    name: "Year",
    selector: (row: { year: any }) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];
const TableView = ({ header, data }: any) => {
  const customStyles = {
    rows: {
      style: {
        minHeight: "60px",
        // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        backgroundColor: "#004D72",
        color: "white",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
        borderTopLeftRadius: "10px",
      },
    },
  };
  const EmptyDataPlaceholder = () => {
    return (
      <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
        No data available
      </div>
    );
  };
  return (
    <>
      {" "}
      <DataTable
        pagination
        columns={header}
        data={data}
        customStyles={customStyles}
        noDataComponent={<EmptyDataPlaceholder />}
      />
    </>
  );
};

export default TableView;
