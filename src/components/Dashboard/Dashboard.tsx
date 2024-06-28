import React, { useEffect, useState } from "react";
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
  const [totalAgents, setTotalAgents] = useState<any>();
  const [totalHotels, setTotalHotels] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  async function getStats() {
    setLoading(true);
    try {
      const response = await fetch('http://135.181.57.251:3680/user/company/find-all');
      const data = await response.json();
      // console.log(data?.data?.length);
      setTotalAgents(data?.data?.length);
    } catch (error) {
      console.log(error);
    }
    try {
      const response = await fetch('http://135.181.57.251:3680/hotel');
      const data = await response.json();
      // @ts-ignore
      console.log(data?.data?.data);
      setTotalHotels(data?.data?.data.length);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    return () => {
      getStats();
    }
  }, [])

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
    { category: "Total Agents", value: totalAgents, change: "4", imgSrc: Images.arrowUp, bg: "#6DB96C" },
    { category: "Total Properties", value: totalHotels, change: "1", imgSrc: Images.arrowUp, bg: "#6DB96C" },
    { category: "Revenue", value: 10, change: "10", imgSrc: Images.arrowUp, bg: "#6DB96C" },
    { category: "Growth", value: 5, change: "5", imgSrc: Images.downArrow, bg: "#FD7A02" },
    { category: "Conversation", value: 8, change: "5", imgSrc: Images.arrowUp, bg: "#6DB96C" },

  ];
  const button = [{
    title: "Search"
  }]

  // var options = {
  //   series: [44, 55, 41, 17, 15],
  //   chart: {
  //   type: 'donut',
  // },
  // responsive: [{
  //   breakpoint: 480,
  //   options: {
  //     chart: {
  //       width: 200
  //     },
  //     legend: {
  //       position: 'bottom'
  //     }
  //   }
  // }]
  // };

  // var chart = new ApexCharts(document.querySelector("#chart1"), options);
  // chart.render();

  // var options2 = {
  //   series: [{
  //   name: 'series1',
  //   data: [31, 40, 28, 51, 42, 109, 100]
  // }, {
  //   name: 'series2',
  //   data: [11, 32, 45, 32, 34, 52, 41]
  // }],
  //   chart: {
  //   height: 350,
  //   type: 'area'
  // },
  // dataLabels: {
  //   enabled: false
  // },
  // stroke: {
  //   curve: 'smooth'
  // },
  // xaxis: {
  //   type: 'datetime',
  //   categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  // },
  // tooltip: {
  //   x: {
  //     format: 'dd/MM/yy HH:mm'
  //   },
  // },
  // };

  // var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
  // chart2.render();

  return (
    <div>
      <DynamicHeaderStructure title={"Overview"} searchPlaceHolder={true} button={button} />
      <div className="row gy-3 pad-b">
        {stats.map((stat, index) => (
          <div key={index} className="col-md-3 ">
            <div className="div-set animate__animated animate__fadeIn animate__slow">
              <label className="text-sm pb-4">{stat.category}</label>
              <div>
                {loading ? (
                  <>
                    Loading...
                  </>
                ) : (
                  <>
                    <p className="text-xxlg mb-2">{stat.value}</p>
                    <label className="text-sm">
                      <span className="text-msm wColor div-bg me-1" style={{ backgroundColor: stat.bg }}>
                        <img src={stat.imgSrc} alt="" />
                        {stat.change}
                      </span>
                      Since last month
                    </label>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div>
        <div id="chart1"></div>
        <div id="chart2"></div>
      </div> */}
    </div>
  )
}

export default Dashboard;