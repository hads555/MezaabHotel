import React from "react";
import startingTenant from "../../assets/images/startingTenant.svg";
import { Button } from "react-bootstrap";
import playIcon from "../../assets/images/playIcon.svg";
import seamless from "../../assets/images/seamlessIcon.svg";
import borderline from "../../assets/images/borderline.svg";
import bottom from "../../assets/images/EllipseBottom.svg";
import { Images } from "../Config/Images";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const cardData = [
    {
      title: "Auto Update",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      img: "Images.secureIcon",
      link: "learn More",
    },
    {
      title: "Auto Update",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      img: "Images.secureIcon",
      link: "learn More",
    },
    {
      title: "Auto Update",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      img: "Images.secureIcon",
      link: "learn More",
    },
    {
      title: "Auto Update",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      img: "Images.secureIcon",
      link: "learn More",
    },
    {
      title: "Auto Update",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      img: "Images.secureIcon",
      link: "learn More",
    },
  ];
  const pricingCard = [
    {
      title: "Onboarding",
      time: "Monthly At",
      price: "$ 49.99",
      img: "",
      body: "Lorem ipsum dolor sit amet consectetur.",
      link: "Subscribe Now",
    },
    {
      title: "Onboarding",
      time: "Monthly At",
      price: "$ 49.99",
      img: "",
      body: "Lorem ipsum dolor sit amet consectetur.",
      link: "Subscribe Now",
    },
    {
      title: "Onboarding",
      time: "Monthly At",
      price: "$ 49.99",
      img: "",
      body: "Lorem ipsum dolor sit amet consectetur.",
      link: "Subscribe Now",
    },
    {
      title: "Onboarding",
      time: "Monthly At",
      price: "$ 49.99",
      img: "",
      body: "Lorem ipsum dolor sit amet consectetur.",
      link: "Subscribe Now",
    },
  ];
  return (
    <>
      <div className="col-12 d-flex justify-content-center align-items-center img-fluid starting-img">
        <div className="d-flex justify-content-center text-center ">
          <div className="col-8 text-white">
            <h1 className="" style={{ fontSize: "64px", textAlign: "start" }}>
              The starting point of a winning customer experience
            </h1>
            <p style={{ fontSize: "24px" }}>
              Unlock your potential with our Suite of SaaS Solutions
            </p>
            <Button
              variant="danger"
              style={{ borderRadius: "32px" }}
              onClick={() => {
                navigate("/teanenetflow/product");
              }}
            >
              Subscribe Today And Start Lending
              <span>
                <img className="ml-2" src={playIcon} alt="" />
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center text-black">
        <div className="col-11 d-flex">
          <div className="col-6">
            <h1 style={{ fontSize: "32px" }}>
              Empowering Businesses Worldwide with Seamless SaaS Solutions
            </h1>
            <p style={{ lineHeight: "1.5" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <p style={{ lineHeight: "1.5" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex.
            </p>
            <Button variant="danger">Read More</Button>
          </div>
          <div className="col-6">
            <img src={seamless} alt="" />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center text-black ">
        <div className="col-11 d-flex justify-content-center product-bg-curve mt-5">
          <div className="col-9 mt-5 mb-5">
            <h1
              className="d-flex justify-content-center"
              style={{ fontSize: "40px" }}
            >
              Our Products
            </h1>
            <p style={{ fontSize: "19px", textAlign: "center" }}>
              Explore our comprehensive suite of financing products crafted to
              suit various financial needs. From flexible payment options to
              competitive rates, our diverse range of products ensures financial
              support that empowers your goals
            </p>
          </div>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div className="d-flex text-black justify-content-center">
          <div className="col-11 d-flex product-bg p-3 gap-3">
            <div className="cards-container">
              <div className="card">
                <div className="col-8 d-flex mt-5">
                  <h1 style={{ fontSize: "40px" }}>Onboarding Studio</h1>
                </div>
                <p style={{ lineHeight: "1.5rem" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum,
                </p>
                <ol style={{ lineHeight: "1.5rem" }}>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ol>
                <div className="col-5 d-flex">
                  <Button className="demo-button">Book a Demo</Button>
                </div>
              </div>
              <div className="card card-1">
                <div className="col-12 d-flex mt-5">
                  <h1>Loan Origination System</h1>
                </div>
                <p style={{ lineHeight: "1.5rem" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum,
                </p>
                <ol style={{ lineHeight: "1.5rem" }}>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ol>
                <div className="col-5 d-flex">
                  <Button className="demo-button">Book a Demo</Button>
                </div>
              </div>
              <div className="card card-2">
                <div className="col-12 d-flex mt-5">
                  <h1>Loan Management System</h1>
                </div>
                <p style={{ lineHeight: "1.5rem" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum,
                </p>
                <ol style={{ lineHeight: "1.5rem" }}>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ol>
                <div className="col-5 d-flex">
                  <Button className="demo-button">Book a Demo</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          {" "}
          <img
            className="col-11"
            style={{ position: "absolute", bottom: "130px" }}
            src={bottom}
            alt=""
          />
        </div>
      </div>{" "}
      <div className="d-flex justify-content-center">
        <div className="col-11 justify-content-start">
          <div className="col-12 d-flex">
            <img src={borderline} alt="" />

            <h1 className="ps-2">Why Choose Us</h1>
          </div>
          <div className="col-9 d-flex justify-content-center ps-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-center mt-4"
        style={{ marginLeft: "5rem", backgroundColor: "rgb(245, 245, 245)" }}
      >
        <div className="col-11">
         
        </div>
      </div>
      <div style={{ backgroundColor: "rgb(245, 245, 245)" }}>
        <div
          className="d-flex justify-content-center mt-5 "
          style={{ background: "#F5F5F5" }}
        >
          <div className="col-11 mt-5  d-flex justify-content-center">
            <div className="col-8  ">
              <h1 className="d-flex justify-content-center">
                our pricing plan
              </h1>
              <div style={{ lineHeight: "1.5rem", textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                accusantium doloribus cum repellat asperiores quam nostrum,
                perspiciatis debitis error ex aliquam ea in animi commodi esse
                mollitia dicta, pariatur vero!
              </div>
              <div className="d-flex justify-content-center mt-3">
                <Button className="monthly-btn" style={{ background: "red" }}>
                  Monthly
                </Button>
                <Button
                  className="yearly-btn"
                  style={{ background: "white", color: "black" }}
                >
                  yearly
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex justify-content-center mt-5"
          style={{ background: "#F5F5F5" }}
        >
          <div className="col-11 mb-5 d-flex">
            <div className=" col-4 ">
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
                    Onboarding Studio
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    className="mt-2"
                  >
                    $ 49.99
                  </div>
                  <div
                    style={{
                      fontSize: "9px",
                      fontWeight: "400",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    className="mt-3"
                  >
                    $ 49.99
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    className="mt-3"
                  >
                    $ 49.99
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center pt-3">
                <div className="">
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
                    <div className="theme-btn-next mt-1 button-margin  d-flex justify-content-center cursor-pointer">
                      <div className="ps-1 d-flex align-items-center">
                        {" "}
                        Subscribe Now {"->"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pr-1 col-4 px-2">
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
                    Onboarding Studio
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    className="mt-2"
                  >
                    $ 49.99
                  </div>
                  <div
                    style={{
                      fontSize: "9px",
                      fontWeight: "400",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    className="mt-3"
                  >
                    $ 49.99
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    className="mt-3"
                  >
                    $ 49.99
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center pt-3">
                <div className="">
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
                    <div className="theme-btn-next mt-1 button-margin  d-flex justify-content-center cursor-pointer">
                      <div className="ps-1 d-flex align-items-center">
                        {" "}
                        Subscribe Now {"->"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ps-1 col-4 px-2">
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
                    Onboarding Studio
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    className="mt-2"
                  >
                    $ 49.99
                  </div>
                  <div
                    style={{
                      fontSize: "9px",
                      fontWeight: "400",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    className="mt-3"
                  >
                    $ 49.99
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    className="mt-3"
                  >
                    $ 49.99
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center pt-3">
                <div className="">
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
                    <div className="theme-btn-next mt-1 button-margin  d-flex justify-content-center cursor-pointer">
                      <div className="ps-1 d-flex align-items-center">
                        {" "}
                        Subscribe Now {"->"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ background: "white" }}
        className="d-flex justify-content-center p-5"
      >
        <div className="col-10 d-flex justify-content-center">
          <div className="col-6">
            <h1 style={{ color: "red", fontSize: "32px" }}>
              Join Our Newsletter
            </h1>
            <div>
              Subscribe to our newsletter to receive exclusive offers, latest{" "}
              <br />
              news and updates
            </div>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <div className="d-flex align-items-center gap-2">
              <input
                type="email"
                placeholder="Email Address"
                style={{ width: "370px", padding: "7px" }}
              />
              <Button style={{ background: "red", border: "none" }}>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center footer-img">
        <div className="col-10 d-flex justify-content-center text-white align-items-center">
          <h1 className="text-center los-p">
            Experience Seamless Integration of LOS, LMS, and Onboarding Modules
            for Optimal Performance
          </h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
