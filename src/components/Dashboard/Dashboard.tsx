import React from "react";
import Graphs from "./Graphs";
import OverView from "./OverView";
import RecentApplication from "./RecentApplication";
import NotificationBar from "./Notification";
import { DatePicker } from "antd";
import { RootState } from "../../redux/rootReducer";
import { useSelector } from "react-redux";
import DynamicHeaderStructure from "../DynamicHeaderStructure";
import Loader from "../Loader/Loader";
import { Images } from "../Config/Images";


function Dashboard() {
  const dashboardStructure = useSelector(
    (state: RootState) => state.block.dashboardStructure
  );
  const renderedFinanceOverview =
    dashboardStructure?.financeOverview &&
    dashboardStructure?.financeOverview.map((item: any, index: any) => (
      <div key={index} className="view-chart mb-4">
        <div className="chart-header d-flex mobile-responsive-chart justify-content-between align-items-center">
          <h3 className="welcome-heading col-xl-3 col-12">{item.title}</h3>
          <div className="d-flex mobile-responsive-chart-filter col-xl-9 col-12 align-items-center justify-content-end">

            <div className="d-grid">
              <label htmlFor="" className="label-theme">
                From
              </label>
              <DatePicker
                style={{
                  width: "200px",
                  height: "36px",
                  marginRight: "10px",
                }}
              />
            </div>
            <div className="d-grid">
              <label htmlFor="" className="label-theme">
                To
              </label>
              <DatePicker
                style={{
                  width: "200px",
                  height: "36px",
                }}
              />
            </div>
          </div>
        </div>
        {item?.child &&
          item?.child.map((chart: any, chartIndex: any) => (
            <div style={{ marginTop: "20px" }}>
              <Graphs key={chartIndex} option={chart} />
            </div>
          ))}
      </div>
    ));
  const renderedBarOverview =
    dashboardStructure?.barchart &&
    dashboardStructure?.barchart.map((item: any, index: any) => {
      return (
        <div key={index} className="col-md-6 col-12 p-2">
          <h2 className="col-12 fs-6 fw-bold mt-5">{item.title}</h2>
          {item.child.map((chart: any, chartIndex: any) => {
            return (
              <div className="view-chart" key={chartIndex}>
                <Graphs option={chart} />
              </div>
            );
          })}
        </div>
      );
    });
  // const dashbaordTables =
  //   dashboardStructure?.table &&
  //   dashboardStructure?.table.map((item: any, index: any) => (
  //     <div className="col-12">
  //       <RecentApplication data={item} />
  //     </div>
  //   ));
  interface Stat {
    category: string;
    value: number;
    change: string;
    imgSrc: string;
    bg: string;
}
  const stats: Stat[] = [
    { category: "Total Agents", value: 120, change: "1230", imgSrc: Images.arrowUp , bg: "#6DB96C"},
    { category: "Total Properties", value: 120, change: "330", imgSrc: Images.arrowUp, bg: "#6DB96C"},
    { category: "Revenue", value: 120, change: "340", imgSrc: Images.arrowUp , bg:"#6DB96C"},
    { category: "Growth", value: 120, change: "1230", imgSrc: Images.downArrow, bg:"#FD7A02" },
    { category: "Conversation", value: 120, change: "450", imgSrc: Images.arrowUp , bg: "#6DB96C" },
    
];
const button =[{
  title:"Search"
}]
  return( 
          <div> 
              <DynamicHeaderStructure title={"Overview"} searchPlaceHolder={true} button={button} />
              <div className="row gy-3 pad-b">
                    {stats.map((stat, index) => (
                        <div key={index} className="col-md-3 ">
                            <div className="div-set animate__animated animate__fadeIn animate__slow">
                                <label className="text-sm pb-4">{stat.category}</label>
                                <div>
                                    <p className="text-xxlg mb-2">{stat.value}</p>
                                    <label className="text-sm">
                                        <span className="text-msm wColor div-bg me-1" style={{backgroundColor: stat.bg}}>
                                            <img src={stat.imgSrc} alt="" />
                                            {stat.change}
                                        </span>
                                        Since last month
                                    </label>
                                </div>
                            </div>
                        </div>
                        ))}
                </div>
          </div>
 )}

export default Dashboard;
