import React, { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import TableViewTanenet from "./TableView/TableViewTanenet";
import { useNavigate } from "react-router-dom";
import { Images } from "./Config/Images";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { authSlice } from "../redux/apis/apisSlice";

const los = {
  name1: "Loan Origination",
  name2: "System with Onboarding Studio",
  Product: "Loan Origination System with Onboarding Studio",
  ProductDetails: "2235",
  BillingCycle: "Monthly",
  PackagePrice: 299.99,
  Taxes: 50,
  TotalPrice: "599.99",
};
const lms = {
  name1: "Loan Management",
  name2: "System",
  Product: "Loan Origination System with Onboarding Studio",
  ProductDetails: "2235",
  BillingCycle: "Yearly",
  PackagePrice: 399.99,
  Taxes: 50,
  TotalPrice: "699.99",
};
const Call_Activity_Header = [
  {
    name: "Product",
    selector: (row: { product: any }) => row.product,
  },

  {
    name: "Product Detail",
    selector: (row: { productDetail: any }) => row.productDetail,
  },
  {
    name: "Billing Cycle",
    selector: (row: { billingCycle: any }) => row.billingCycle,
  },
  {
    name: "Package Price",
    selector: (row: { packagePrice: any }) => row.packagePrice,
  },
  {
    name: "Taxes",
    selector: (row: { taxes: any }) => row.taxes,
  },
  {
    name: "TotalPrice",
    selector: (row: { totalPrice: any }) => row.totalPrice,
  },
];
const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [subscribeData, setSubscribeData] = useState<any>("");
  const data = [
    {
      product: subscribeData.Product ? subscribeData.Product : "-",
      productDetail: subscribeData.ProductDetails
        ? subscribeData.ProductDetails
        : "-",
      billingCycle: subscribeData.BillingCycle
        ? subscribeData.BillingCycle
        : "-",
      packagePrice: subscribeData.PackagePrice
        ? subscribeData.PackagePrice
        : "-",
      taxes: subscribeData.Taxes ? subscribeData.Taxes : "-",
      totalPrice: subscribeData.PackagePrice + subscribeData.Taxes || "-",
    },
  ];
  return (
    <>
      <div className="cs-table p-2">
        <div
          style={{
            fontSize: "20",
            fontWeight: "600",
            color: "rgba(0, 0, 0, 1)",
          }}
        >
          Selected Product
        </div>
        <div
          style={{
            fontSize: "14",
            fontWeight: "400",
            color: "rgba(0, 0, 0, 1)",
          }}
          className="pt-1"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        {subscribeData == "" && (
          <div
            className="file-add-container d-flex"
            onClick={() => {
              setShow(true);
            }}
          >
            <div className="file-input d-flex justify-content-center align-items-center">
              +Add
            </div>
          </div>
        )}

        {subscribeData != "" && (
          <div className="mt-4">
            <div
              className="col-8"
              style={{
                border: "2px solid rgba(226, 36, 46, 1)",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontWeight: "600",
                  color: "rgba(255, 255, 255, 1)",
                  backgroundColor: "rgba(226, 36, 46, 1)",
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px",
                }}
                className="d-flex justify-content-center pt-3 pb-3"
              >
                {subscribeData.Product}
              </div>
              <div className="d-flex justify-content-center">
                <img src={Images.vector} alt="" />
              </div>
              <div className="d-flex">
                <div
                  className="col-6 p-4"
                  style={{
                    fontSize: "14px",
                    lineHeight: "17px",
                    fontWeight: "400",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                >
                  <div>01. Lorem ipsum dolor sit amet, consectetur.</div>
                  <div className="pt-3">
                    03. Lorem ipsum dolor sit amet, consectetur.
                  </div>
                  <div className="pt-3">
                    05. Lorem ipsum dolor sit amet, consectetur.
                  </div>
                  <div className="pt-3">
                    07. Lorem ipsum dolor sit amet, consectetur.
                  </div>
                  <div className="pt-3">
                    09. Lorem ipsum dolor sit amet, consectetur.
                  </div>
                </div>
                <div
                  className="col-6 p-4"
                  style={{
                    fontSize: "14px",
                    lineHeight: "17px",
                    fontWeight: "400",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                >
                  <div>02. Lorem ipsum dolor sit amet, consectetur.</div>
                  <div className="pt-3">
                    04. Lorem ipsum dolor sit amet, consectetur.
                  </div>
                  <div className="pt-3">
                    06. Lorem ipsum dolor sit amet, consectetur.
                  </div>
                  <div className="pt-3">
                    08. Lorem ipsum dolor sit amet, consectetur.
                  </div>
                  <div className="pt-3">
                    10. Lorem ipsum dolor sit amet, consectetur.
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div
                  style={{ borderBottom: "1px solid rgba(184, 184, 184, 1)" }}
                ></div>
              </div>
              <div className="p-4 d-flex">
                <div
                  className="col-6"
                  style={{
                    fontSize: "14px",
                    lineHeight: "14px",
                    fontWeight: "400",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                >
                  Price
                </div>
                <div
                  className="col-6 d-flex justify-content-end"
                  style={{
                    fontSize: "20px",
                    lineHeight: "20px",
                    fontWeight: "700",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                >
                  $ {subscribeData.PackagePrice + subscribeData.Taxes}/
                  {subscribeData.BillingCycle}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="mt-5">
          <div
            style={{
              fontSize: "20",
              fontWeight: "600",
              color: "rgba(0, 0, 0, 1)",
            }}
            className="pb-3"
          >
            Package Detail
          </div>
          <TableViewTanenet header={Call_Activity_Header} data={data} />
          <div className="d-flex justify-content-end col-11 mt-5">
            <div
              className="theme-btn-next mt-1 button-margin "
              onClick={() => {
                dispatch(
                  authSlice.actions.setProduct({
                    product: true,
                  })
                );
                navigate("/teanenetflow/info");
              }}
            >
              <div className="ps-1 d-flex align-items-center cursor-pointer">
                {" "}
                Next
                <div className="ps-2">
                  <img src={Images.next} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} centered size="lg">
        <Modal.Header>
          <Modal.Title className="modal-title">Add more products</Modal.Title>
          <div className="cursor-pointer" onClick={() => setShow(false)}>
            <img src={Images.closeBtn} alt="" />
          </div>
        </Modal.Header>
        <Modal.Body className="">
          <div className="d-flex">
            <div className="pr-1 col-6 px-2">
              <div className="frame-recommend d-flex justify-content-center">
                <div className="text-center">
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    className="mt-4"
                  >
                    {los.name1}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    className="mt-2"
                  >
                    {los.name2}
                  </div>
                  <div
                    style={{
                      fontSize: "9px",
                      fontWeight: "400",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    className="mt-3"
                  >
                    {los.BillingCycle} At
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    className="mt-3"
                  >
                    $ {los.PackagePrice}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="p-2">
                  <div className="d-flex align-items-center">
                    <img src={Images.listIcon} height={6.5} width={6.5} />
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                      className="ps-2"
                    >
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img src={Images.listIcon} height={6.5} width={6.5} />
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                      className="ps-2"
                    >
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img src={Images.listIcon} height={6.5} width={6.5} />
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                      className="ps-2"
                    >
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img src={Images.listIcon} height={6.5} width={6.5} />
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                      className="ps-2"
                    >
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img src={Images.listIcon} height={6.5} width={6.5} />
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                      className="ps-2"
                    >
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img src={Images.listIcon} height={6.5} width={6.5} />
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                      className="ps-2"
                    >
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img src={Images.listIcon} height={6.5} width={6.5} />
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                      className="ps-2"
                    >
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-center mt-3">
                    <div
                      className="theme-btn-next mt-1 button-margin  d-flex justify-content-center cursor-pointer"
                      onClick={() => {
                        dispatch(
                          authSlice.actions.setSubscriptionData({
                            data: los,
                          })
                        );
                        setSubscribeData(los);
                        setShow(false);
                        // navigate("/teanenetflow/payment");
                      }}
                    >
                      <div className="ps-1 d-flex align-items-center cursor-pointer">
                        {" "}
                        Subscribe Now{" "}
                        <div className="ps-2">
                          <img src={Images.next} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ps-1 col-6 px-2">
              <div className="frame d-flex justify-content-center">
                <div className="text-center">
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    className="mt-4"
                  >
                    {lms.name1}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    className="mt-2"
                  >
                    {lms.name2}
                  </div>
                  <div
                    style={{
                      fontSize: "9px",
                      fontWeight: "400",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    className="mt-3"
                  >
                    {lms.BillingCycle} At
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    className="mt-3"
                  >
                    $ {lms.PackagePrice}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="p-2">
                  <div className="d-flex align-items-center">
                    <img src={Images.listIcon} height={6.5} width={6.5} />
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                      className="ps-2"
                    >
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img src={Images.listIcon} height={6.5} width={6.5} />
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                      className="ps-2"
                    >
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img src={Images.listIcon} height={6.5} width={6.5} />
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                      className="ps-2"
                    >
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img src={Images.listIcon} height={6.5} width={6.5} />
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                      className="ps-2"
                    >
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img src={Images.listIcon} height={6.5} width={6.5} />
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                      className="ps-2"
                    >
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img src={Images.listIcon} height={6.5} width={6.5} />
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                      className="ps-2"
                    >
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img src={Images.listIcon} height={6.5} width={6.5} />
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                      className="ps-2"
                    >
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-center mt-4">
                    <div
                      className="theme-btn-next mt-1 button-margin  d-flex justify-content-center cursor-pointer"
                      onClick={() => {
                        dispatch(
                          authSlice.actions.setSubscriptionData({
                            data: lms,
                          })
                        );
                        setSubscribeData(lms);
                        setShow(false);
                        // navigate("/teanenetflow/payment");
                      }}
                    >
                      <div className="ps-1 d-flex align-items-center cursor-pointer">
                        {" "}
                        Subscribe Now{" "}
                        <div className="ps-2">
                          <img src={Images.next} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ProductDetail;
