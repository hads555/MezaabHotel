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

const DasbhboardSidebar = () => {
  const dispatch = useDispatch();
  const themeBuilder = useSelector((state: RootState) => state.block.theme);
  const [activeBar, setActiveBar] = useState<string | null>(null);
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
    { label: "Dashboard", Link: "dashboard", img: Images.dashboardIcon },
    {
      label: "Locations",
      Link: "notification",
      img: Images.customerManagement,
      menu: [
        { label: "Country Locations", Link: "locationcountries" },
        { label: "City Locations", Link: "locationcities" },
      ],
    },
    {
      label: "Suppliers",
      Link: "suppliers",
      img: Images.loanIcon,
    },
    {
      label: "Agents",
      Link: "allagents",
      img: Images.loanIcon,
      // menu: [
      //   { label: "Collateral Management", Link: "transactionmanagement" },
      //   { label: "Vendors Management", Link: "pdcmanagement" },
      //   { label: "Producer Management", Link: "escrowmanagement" },
      // ],
    },
    {
      label: "Group Flights",
      Link: "allgroups",
      img: Images.settingIcon,
    },
    // {
    //   label: "Payments",
    //   Link: "notification",
    //   img: Images.settingIcon,
    //   menu: [
    //     { label: "Navigation", Link: "callActivity" },
    //     { label: "Search Function", Link: "pdcmanagement" },
    //     { label: "Securization", Link: "escrowmanagement" },
    //     { label: "Tools", Link: "transactionmanagement" },
    //     { label: "Interface", Link: "pdcmanagement" },
    //     { label: "Pending Event Actions", Link: "escrowmanagement" },
    //   ],
    // },
    {
      label: "Self Listed Property",
      Link: "customerlists",
      img: Images.settingIcon,
    },
    {
      label: "Access Control List",
      Link: "accesscontrol",
      img: Images.settingIcon,
    },
    {
      label: "Management",
      Link: "user",
      img: Images.settingIcon,
    },
    // {
    //   label: "Ledger",
    //   Link: "notification",
    //   img: Images.settingIcon,
    //   menu: [
    //     { label: "Navigation", Link: "transactionmanagement" },
    //     { label: "Search Function", Link: "pdcmanagement" },
    //     { label: "Securization", Link: "escrowmanagement" },
    //     { label: "Tools", Link: "transactionmanagement" },
    //     { label: "Interface", Link: "pdcmanagement" },
    //     { label: "Pending Event Actions", Link: "escrowmanagement" },
    //   ],
    // },
    // {
    //   label: "Reports",
    //   Link: "notification",
    //   img: Images.settingIcon,
    //   menu: [
    //     { label: "Navigation", Link: "transactionmanagement" },
    //     { label: "Search Function", Link: "pdcmanagement" },
    //     { label: "Securization", Link: "escrowmanagement" },
    //     { label: "Tools", Link: "transactionmanagement" },
    //     { label: "Interface", Link: "pdcmanagement" },
    //     { label: "Pending Event Actions", Link: "escrowmanagement" },
    //   ],
    // },
    // {
    //   label: "Management",
    //   Link: "notification",
    //   img: Images.settingIcon,
    //   menu: [
    //     { label: "Navigation", Link: "transactionmanagement" },
    //     { label: "Search Function", Link: "pdcmanagement" },
    //     { label: "Securization", Link: "escrowmanagement" },
    //     { label: "Tools", Link: "transactionmanagement" },
    //     { label: "Interface", Link: "pdcmanagement" },
    //     { label: "Pending Event Actions", Link: "escrowmanagement" },
    //   ],
    // },
    // {
    //   label: "Settings",
    //   Link: "notification",
    //   img: Images.settingIcon,
    //   menu: [
    //     { label: "Navigation", Link: "transactionmanagement" },
    //     { label: "Search Function", Link: "pdcmanagement" },
    //     { label: "Securization", Link: "escrowmanagement" },
    //     { label: "Tools", Link: "transactionmanagement" },
    //     { label: "Interface", Link: "pdcmanagement" },
    //     { label: "Pending Event Actions", Link: "escrowmanagement" },
    //   ],
    // },
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
          <img
            src={item.img}
            style={{ background: "none", color: "#fff" }}
            width={20}
            height={20}
          />
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
      <div>
        {/* {loading && <Loader />} */}

        <Sidebar
          transitionDuration={1000}
          onBackdropClick={() => dispatch(authSlice.actions.toggleSidebar())}
          toggled={toggled}
          customBreakPoint="768px"
          collapsedWidth="80px"
          width="100%"
          className="col-12 fw-medium menu-items"
          style={{ fontSize: "14px", color: "black" }}
        >
          <div
            className="d-flex justify-content-center p-3"
            style={{ backgroundColor: "#fff" }}
          >
            <img src={Images.finovaLogo} alt="logo" />
          </div>
          <Menu>
            {sidebarItems.map((item: any, index: any) => (
              <React.Fragment key={index}>
                {item.menu ? (
                  renderSubmenu(item)
                ) : (
                  <div className="menu-items">
                    <Link
                      to={`${item.Link}`}
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "black",
                        textDecoration: "none",
                      }}
                      className={item.label === activeBar ? "active" : ""}
                    >
                      <MenuItem
                        active={item.label === activeBar}
                        onClick={() => onSmash(item.label)}
                        prefix={
                          <img
                            width={20}
                            height={20}
                            src={item.img ? item.img : Images.BlackIcon}
                            style={{ background: "none" }}
                          />
                        }
                      >
                        {item.label}
                      </MenuItem>
                    </Link>
                  </div>
                )}
              </React.Fragment>
            ))}
          </Menu>
        </Sidebar>
      </div>
      {fullscreenError && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backdropFilter: "blur(12px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "61px",
          }}
        >
          <div className="not-found-error">
            <img src={Images.errorEmoji} alt="" />
          </div>
          {fullscreenError}
          <button className="retry-button mt-3">Reload</button>
        </div>
      )}

      <GlobalStyle />
    </>
  );
};

export default DasbhboardSidebar;
