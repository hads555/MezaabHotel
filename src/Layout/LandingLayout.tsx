import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import DasbhboardHeader from "../components/DashboardHeader/Header";
import SubHeader from "../components/DashboardHeader/SubHeader";
import DasbhboardSideBar from "../components/DashboardSideBar/DashboardSideBar";

import Loader from "../components/Loader/Loader";
import { RootState } from "../redux/rootReducer";
import Navbar from "../components/LandingPage/common/navbar/Navbar";
import Banner from "../components/LandingPage/banner/Banner";
import WhyChooseUs from "../components/LandingPage/whyChosse/WhyChooseUs";
import Destination from "../components/LandingPage/destination/Destination";
import HolyLands from "../components/LandingPage/holyLands/HolyLands";
import HotelChains from "../components/LandingPage/hotelChain/HotelChains";
import QueryForm from "../components/LandingPage/queryForm/QueryForm";
import Footer from "../components/LandingPage/common/footer/Footer";

const LandingLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [loading, setLoading] = useState(true);
  const themeBuilder = useSelector((state: RootState) => state.block.theme);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <WhyChooseUs />
      <Destination />
      <HolyLands />
      <HotelChains />
      {/* <Testimonials /> */}
      <QueryForm />
      <Footer />
    </>
  );
};
export default LandingLayout;
