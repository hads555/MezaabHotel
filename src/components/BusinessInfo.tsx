import React, { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import TableViewTanenet from "./TableView/TableViewTanenet";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Images } from "./Config/Images";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import axios from "axios";
import toast from "react-hot-toast";
import { authSlice } from "../redux/apis/apisSlice";
import Loader from "./Loader/Loader";
import * as Yup from "yup";

const BusinessInfo = () => {
  const subscribeData = useSelector(
    (state: RootState) => state.block.subscribeData
  );
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [termDialogBox, setTermDialogBox] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  console.log(process.env.REACT_APP_API_URL_BUSINESS, "subscriptionData");

  const validationSchema = Yup.object().shape({
    // companyName: Yup.string().required("Please enter your company name"),
    companyEmail: Yup.string()
      .email("Invalid email format")
      .required("Please enter your company email"),
    companyPhoneNumber: Yup.string().required(
      "Please enter your company phone number"
    ),
    // companyAddress: Yup.string().required("Please enter your company address"),
    // companyWebsite: Yup.string()
    //   .url("Invalid URL format")
    //   .required("Please enter your company website"),
    // contactPersonName: Yup.string().required(
    //   "Please enter the contact person name"
    // ),
    // contactPersonDesignation: Yup.string().required(
    //   "Please enter the contact person designation"
    // ),
    contactPersonEmail: Yup.string()
      .email("Invalid email format")
      .required("Please enter the contact person email"),
    // contactPersonPhoneNumber: Yup.string().required(
    //   "Please enter the contact person phone number"
    // ),
    // name: Yup.string().required(
    //   "Please enter the technical contact person name"
    // ),
    email: Yup.string()
      .email("Invalid email format")
      .required("Please enter the technical contact person email"),
  });
  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = async (values: any) => {
    if (isChecked) {
      setLoader(true);
      localStorage.setItem("userEmail", values.email);
      const formData = {
        companyName: values.companyName,
        companyEmail: values.companyEmail,
        companyPhoneNumber: values.companyPhoneNumber,
        companyAddress: values.companyAddress,
        companyWebsite: values.companyWebsite,
        contactPersonName: values.contactPersonName,
        contactPersonDesignation: values.contactPersonDesignation,
        contactPersonEmail: values.contactPersonEmail,
        contactPersonPhoneNumber: values.contactPersonPhoneNumber,
        name: values.name,
        email: values.email,
        packageDetails: {
          product: subscribeData.Product,
          productDetails: subscribeData.ProductDetails,
          billingCycle: subscribeData.BillingCycle,
          packagePrice: subscribeData.PackagePrice,
          taxes: subscribeData.Taxes,
        },
      };

      const headers = {
        "Content-Type": "application/json",
        "Request-Id": " 0be3560a-9f5e-4f30-82cd-9ba20b63f6f7",
      };

      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL_BUSINESS}/api/Tenant/AddTenant`,
          formData,
          { headers: headers }
        );

        if (res) {
          toast.success("User created successfully");
          dispatch(
            authSlice.actions.setBusiness({
              business: true,
            })
          );
          setLoader(false);
          navigate("/teanenetflow/payment");
        }
        console.log(res, "res"); // Logging the response data
      } catch (error) {
        setLoader(false);
        console.error(error); // Log any errors that occur during the request
      }
    } else {
      toast.error("Please accept term and conditions");
    }
  };
  console.log(isChecked, "is");
  return (
    <>
      {loader && <Loader />}
      <div className="p-2">
        <Formik
          initialValues={{
            companyName: "",
            companyEmail: "",
            companyPhoneNumber: "",
            companyAddress: "",
            companyWebsite: "",
            contactPersonName: "",
            contactPersonDesignation: "",
            contactPersonEmail: "",
            contactPersonPhoneNumber: "",
            name: "",
            email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "rgba(0, 0, 0, 1)",
                }}
                className="pb-3"
              >
                1. Business Detail
              </div>
              <Row className="pt-2">
                <Col md={6}>
                  <div className="form-group form-label-group">
                    <Field
                      placeholder="MyTM"
                      id="companyName"
                      type="text"
                      name="companyName"
                      className="shadow-none form-control modal-input br-10"
                    />
                    <label htmlFor="companyName">Company Name</label>
                    <ErrorMessage
                      name="companyName"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group form-label-group">
                    <Field
                      placeholder="info@mytm.com"
                      id="companyEmail"
                      type="text"
                      name="companyEmail"
                      className="shadow-none form-control modal-input br-10"
                    />
                    <label htmlFor="companyEmail">Company Email</label>
                    <ErrorMessage
                      name="companyEmail"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                </Col>
              </Row>

              <Row className="pt-3">
                <Col md={6}>
                  <div className="form-group form-label-group">
                    <Field
                      placeholder="68 R1 block Johar town, Lahore"
                      id="companyAddress"
                      type="text"
                      name="companyAddress"
                      className="shadow-none form-control modal-input br-10"
                    />
                    <label htmlFor="companyAddress">Company Address</label>
                    <ErrorMessage
                      name="companyAddress"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                </Col>

                <Col md={6}>
                  <div className="form-group form-label-group">
                    <Field
                      placeholder="+966"
                      id="companyPhoneNumber"
                      type="text"
                      name="companyPhoneNumber"
                      className="shadow-none form-control modal-input br-10"
                    />
                    <label htmlFor="companyPhoneNumber">Mobile Number</label>
                    <ErrorMessage
                      name="companyPhoneNumber"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                </Col>
              </Row>

              <Row className="pt-3">
                <Col md={6}>
                  <div className="form-group form-label-group">
                    <Field
                      placeholder="www.mytm.com"
                      id="companyWebsite"
                      type="text"
                      name="companyWebsite"
                      className="shadow-none form-control modal-input br-10"
                    />
                    <label htmlFor="companyWebsite">Website Url</label>
                    <ErrorMessage
                      name="companyWebsite"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                </Col>
              </Row>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "rgba(0, 0, 0, 1)",
                }}
                className="pb-3"
              >
                2. Commercial Contact Person Details
              </div>
              <Row className="pt-2">
                <Col md={6}>
                  <div className="form-group form-label-group">
                    <Field
                      placeholder="John Doe"
                      id="contactPersonName"
                      type="text"
                      name="contactPersonName"
                      className="shadow-none form-control modal-input br-10"
                    />
                    <label htmlFor="contactPersonName">Name</label>
                    <ErrorMessage
                      name="contactPersonName"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                </Col>

                <Col md={6}>
                  <div className="form-group form-label-group">
                    <Field
                      placeholder="Customer support"
                      id="contactPersonDesignation"
                      type="text"
                      name="contactPersonDesignation"
                      className="shadow-none form-control modal-input br-10"
                    />
                    <label htmlFor="contactPersonDesignation">
                      Designation
                    </label>
                    <ErrorMessage
                      name="contactPersonDesignation"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                </Col>
              </Row>

              <Row className="pt-3">
                <Col md={6}>
                  <div className="form-group form-label-group">
                    <Field
                      placeholder="john@mytm.com"
                      id="contactPersonEmail"
                      type="text"
                      name="contactPersonEmail"
                      className="shadow-none form-control modal-input br-10"
                    />
                    <label htmlFor="contactPersonEmail">Email</label>
                    <ErrorMessage
                      name="contactPersonEmail"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                </Col>

                <Col md={6}>
                  <div className="form-group form-label-group">
                    <Field
                      placeholder="+966"
                      id="contactPersonPhoneNumber"
                      type="text"
                      name="contactPersonPhoneNumber"
                      className="shadow-none form-control modal-input br-10"
                    />
                    <label htmlFor="contactPersonPhoneNumber">
                      Mobile Number
                    </label>
                    <ErrorMessage
                      name="contactPersonPhoneNumber"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                </Col>
              </Row>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "rgba(0, 0, 0, 1)",
                }}
                className="pb-3"
              >
                3. Technical Contact Person Details
              </div>
              <Row className="pt-2">
                <Col md={6}>
                  <div className="form-group form-label-group">
                    <Field
                      placeholder="Name"
                      id="name"
                      type="text"
                      name="name"
                      className="shadow-none form-control modal-input br-10"
                    />
                    <label htmlFor="name">Name</label>
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                </Col>

                <Col md={6}>
                  <div className="form-group form-label-group">
                    <Field
                      placeholder="Email"
                      id="email"
                      type="text"
                      name="email"
                      className="shadow-none form-control modal-input br-10"
                    />
                    <label htmlFor="email">Email</label>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                </Col>
              </Row>
              <div className="col-md-12 d-flex">
                <div className="col-md-12 d-flex align-items-center">
                  <Field
                    type="checkbox"
                    name="terms"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <div className="ps-2 simple-text">I accept and Agree</div>
                  <div
                    style={{
                      color: "rgba(255, 0, 0, 1)",
                      textDecoration: "underline",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                    className="ps-1"
                    onClick={() => {
                      setTermDialogBox(true);
                    }}
                  >
                    Terms and Conditions.
                  </div>
                </div>
              </div>
              <div className="col-md-12 d-flex pt-5">
                <div className="col-md-4"></div>
                <div className="col-md-4"></div>
                <div className="col-md-4 d-flex ">
                  <div
                    className="theme-btn-prev mt-1 button-margin d-flex justify-content-center"
                    onClick={() => {
                      dispatch(
                        authSlice.actions.setProduct({
                          product: false,
                        })
                      );
                      navigate("/teanenetflow/product");
                    }}
                  >
                    <div className="ps-1 d-flex align-items-center cursor-pointer">
                      Previous
                    </div>
                  </div>
                  <button
                    className="theme-btn-next mt-1 button-margin d-flex justify-content-center"
                    type="submit"
                  >
                    <div className="ps-1 d-flex align-items-center cursor-pointer">
                      Next{" "}
                      <div className="ps-2">
                        <img src={Images.next} alt="" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Modal show={termDialogBox} centered size="lg">
        <Modal.Header>
          <Modal.Title className="modal-title">Terms & Conditions</Modal.Title>
          <div
            className="cursor-pointer"
            onClick={() => setTermDialogBox(false)}
          >
            <img src={Images.closeBtn} alt="" />
          </div>
        </Modal.Header>
        <Modal.Body className="">
          <div
            style={{ fontSize: "16px", fontWeight: "400", lineHeight: "19px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </div>
          <div
            className="mt-4"
            style={{ fontSize: "16px", fontWeight: "400", lineHeight: "19px" }}
          >
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis.
          </div>
          <div
            className="mt-4"
            style={{ fontSize: "16px", fontWeight: "400", lineHeight: "19px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </div>
          <div
            className="mt-4"
            style={{ fontSize: "16px", fontWeight: "400", lineHeight: "19px" }}
          >
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis.
          </div>
          <div className="d-flex mt-4">
            <Field type="checkbox" name="terms" />
            <div className="simple-text ps-2">I Agree</div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BusinessInfo;
