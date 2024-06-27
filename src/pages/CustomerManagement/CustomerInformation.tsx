import React from "react";

const CustomerInformation = () => {
  const actionOptions = [
    {
      mainHeading: "English ",
      value: "arbi",
      children: [
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
      ],
    },
    {
      mainHeading: "English ",
      value: "arbi",
      children: [
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
      ],
    },
    {
      mainHeading: "English ",
      value: "arbi",
      children: [
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
      ],
    },
    {
      mainHeading: "English ",
      value: "arbi",
      children: [
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
      ],
    },
  ];

  return (
    <>
      <div className="col-12 myTab">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row p-3">
              <div className="col-12 myTab">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      {actionOptions.map((item) => (
                        <>
                          <div className="">
                            <div className="leadoverview-header">
                              <div
                                className="flex-heading col-md-6"
                                style={{ color: "#004D72" }}
                              >
                                {item.mainHeading}
                              </div>
                              <div
                                className="flex-text col-md-6"
                                style={{ color: "#004D72" }}
                              >
                                {item.value}
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            {item.children
                              ?.slice(0, Math.ceil(item.children.length / 2))
                              .map((item: any) => (
                                <>
                                  <div className="flex-mode">
                                    <div className="flex-heading">
                                      {item.label}
                                    </div>
                                    <div className="flex-text">
                                      {item.value}
                                    </div>
                                  </div>
                                </>
                              ))}
                          </div>
                          <div className="col-md-6">
                            {item.children
                              ?.slice(Math.ceil(item.children.length / 2))
                              .map((item: any) => (
                                <>
                                  <div className="flex-mode">
                                    <div className="flex-heading">
                                      {item.label}
                                    </div>
                                    <div className="flex-text">
                                      {item.value}
                                    </div>
                                  </div>
                                </>
                              ))}
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};
export default CustomerInformation;