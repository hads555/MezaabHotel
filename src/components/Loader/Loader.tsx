import React from "react";

const Loader = () => {
  const loader = [
    {
      loader: "F",
    },
    {
      loader: "I",
    },
    {
      loader: "N",
    },
    {
      loader: "O",
    },
    {
      loader: "V",
    },
    {
      loader: "A",
    },
  ];
  return (
    <div className="loader">
      <div className="loader-container col-md-12 col-10">
        {loader.map((item: any) => (
          <div className="wave">{item.loader}</div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
