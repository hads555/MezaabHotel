import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Images } from "../Config/Images";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/rootReducer";
import { createGlobalStyle } from "styled-components";
import AuthService from "../../services/AuthService";
import { authSlice } from "../../redux/apis/apisSlice";
import Loader from "../Loader/Loader";

const DasbhboardSidebarView = () => {
  const dispatch = useDispatch();
  const themeBuilder = useSelector((state: RootState) => state.block.theme);
  const [activeBar, setActiveBar] = useState<string>("Introduction");
  const [activeSubBar, setActiveSubBar] = useState<string | null>(null);
  const [sidebarLinksApi, setSidebarLinksApi] = useState([]);
  const [sidebarLinksApiCompliance, setSidebarLinksApiCompliance] = useState(
    []
  );
  const [sidebarLinks, setSidebarLinks] = useState([]);
  const [table, setTable] = useState();
  const [fullscreenError, setFullscreenError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const toggled = useSelector((state: RootState) => state.block.toggled);

  let sidebarmenu = async () => {
    try {
      setLoading(true);
      const userID = "12245";
      let res = await AuthService.get(`/admin-user/dashboard/${userID}`);

      if (res?.data?.data?.structure?.sidebar?.sidebarWithdashboard) {
        const sidebarData =
          res.data.data.structure.sidebar.sidebarWithdashboard;
        const SidebarCompilnaceData =
          res.data.data.structure.sidebar.sidebarwithcompliance;
        const dashboard = sidebarData[0]?.dashboard || {};
        const complianceDashboard = sidebarData[1]?.comlianceDashboard || {};
        const notification = sidebarData[2]?.notification || {};
        const applicationBoard = sidebarData[3]?.application?.board || [];
        setTable(dashboard.table?.header || []);
        dispatch(authSlice.actions.setDashboardStructure({ data: dashboard }));
        dispatch(
          authSlice.actions.setCompilanceDashboard({
            compilanceData: complianceDashboard,
          })
        );
        dispatch(
          authSlice.actions.setActionBoard({
            actionBoard: applicationBoard[0]?.headTitles || [],
          })
        );
        dispatch(
          authSlice.actions.setNotificationStructure({
            notificationStructure: notification,
          })
        );
        setSidebarLinksApi(sidebarData);
        setSidebarLinks(sidebarData);
        setSidebarLinksApiCompliance(SidebarCompilnaceData || []);
      }
    } catch (e: any) {
      setFullscreenError("Connection Failed !");
    } finally {
      setLoading(false);
    }
  };

  const sidebarItems = [
    { label: "Introduction", Link: "introduction", img: Images.navigationLogo },
    { label: "Service Screen", Link: "notification", img: Images.searchLogo },
    { label: "Summary", Link: "notification", img: Images.dashboardLogo },
    { label: "Collection", Link: "notification", img: Images.dashboardLogo },
    { label: "Customer Services", Link: "customerServices" },
    {
      label: "Account Details",
      Link: "notification",
      img: Images.customerLogo,
    },
    {
      label: "Associated Account",
      Link: "notification",
      img: Images.customerLogo,
    },
    {
      label: "Customer/Business Details",
      Link: "notification",
      img: Images.securizationLogo,
    },
    {
      label: "Consumer/Business Preferences",
      Link: "notification",
      img: Images.transactionLogo,
    },
    {
      label: "Transaction History",
      Link: "notification",
      img: Images.customerLogo,
    },
    {
      label: "Pmt Modes",
      Link: "notification",
      img: Images.securizationLogo,
    },
    {
      label: "Bankruptcy",
      Link: "notification",
      img: Images.transactionLogo,
    },
    {
      label: "Repo/Foreclosure",
      Link: "notification",
      img: Images.customerLogo,
    },
    {
      label: "Deficiency",
      Link: "notification",
      img: Images.securizationLogo,
    },
    {
      label: "Collecterul",
      Link: "notification",
      img: Images.transactionLogo,
    },
    {
      label: "Bereau",
      Link: "notification",
      img: Images.customerLogo,
    },
    {
      label: "Timeline",
      Link: "notification",
      img: Images.securizationLogo,
    },
    {
      label: "Cross/Upsell Activities",
      Link: "notification",
      img: Images.transactionLogo,
    },
    {
      label: "External interface",
      Link: "notification",
      img: Images.securizationLogo,
    },
    {
      label: "Review Request",
      Link: "notification",
      img: Images.transactionLogo,
    },
  ];

  // useEffect(() => {
  //   sidebarmenu();
  // }, []);

  // const handleRetry = () => {
  //   setFullscreenError(null);
  //   sidebarmenu();
  // };

  const onSmash = (item: any) => {
    setActiveBar(item);
    setActiveSubBar(null);
    item === "Compliance Dashboard"
      ? setSidebarLinksApi(sidebarLinksApiCompliance)
      : setSidebarLinksApi(sidebarLinks);
  };

  const GlobalStyle = createGlobalStyle`
    .menu-items{
      background:${themeBuilder?.sideBarmenuBackgroundColor}!important;
      color:${themeBuilder?.sidebarTextColor}!important;
    }
    .css-1654oxy > .ps-menu-button{
      background:${themeBuilder?.table?.backgroundColor}!important;
    }
    .ps-menu-button:hover {
      background:${themeBuilder?.table?.backgroundColor}!important;
    }
    .active {
      .css-1tqrhto > .ps-menu-button {
        background:${themeBuilder?.table?.backgroundColor}!important;
        color:#fff!important;
      }
    }
  `;

  const renderSubmenu = (item: any) => (
    <div className="menu-items" key={item.label}>
      <SubMenu
        prefix={
          <img src={item.img} style={{ background: "none", color: "#fff" }} />
        }
        label={item.label}
        onClick={() => setActiveBar(item.label)}
      >
        {item.menu.map((submenuItem: any, subIndex: any) => (
          <Link
            to={`${submenuItem.Link}`}
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "12px",
            }}
            className={submenuItem.label === activeSubBar ? "active" : ""}
            key={subIndex}
          >
            <MenuItem
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "#000000",
                textDecoration: "none",
              }}
              onClick={() => setActiveSubBar(submenuItem.label)}
            >
              {submenuItem.label}
            </MenuItem>
          </Link>
        ))}
      </SubMenu>
    </div>
  );

  return (
    <>
      <div className="" style={{ width: "290px" }}>
        {sidebarItems.map((item: any) => (
          <>
            <div className="pb-1 ps-3" onClick={() => setActiveBar(item.label)}>
              <div
                className="p-2"
                style={
                  activeBar == item.label
                    ? { backgroundColor: "#373435", color: "#FFFFFF" }
                    : { backgroundColor: "#EDEDED" }
                }
              >
                {item.label}
              </div>
            </div>
          </>
        ))}
      </div>

      <GlobalStyle />
    </>
  );
};

export default DasbhboardSidebarView;
