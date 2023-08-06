import React from "react"
import ReactApexChart from "react-apexcharts"

const chartapexData = {
  series: [
    { name: "Leads - 2023", data: [1200, 1500, 1400, 1650, 1800, 2100, 2300] },
    { name: "Conversions - 2023", data: [1000, 1200, 1300, 1500, 1600, 1900, 2000] },
  ],
  options: {
    chart: { zoom: { enabled: !1 }, toolbar: { show: !1 } },
    colors: ["rgb(13, 180, 214)", "rgb(241, 180, 76)"],
    dataLabels: { enabled: !0 },
    stroke: { width: [3, 3], curve: "straight" },
    title: { text: "Sales Conversion", align: "left" },
    grid: {
      row: { colors: ["transparent", "transparent"], opacity: 0.2 },
      borderColor: "#f1f1f1",
    },
    markers: { style: "inverted", size: 6 },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      title: { text: "Month" },
    },
    yaxis: { title: { text: "Count" }, min: 500, max: 2500 },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: !0,
      offsetY: -25,
      offsetX: -5,
    },
    responsive: [
      {
        breakpoint: 600,
        options: { chart: { toolbar: { show: !1 } }, legend: { show: !1 } },
      },
    ],
  },
}


const chartapex = () => {
  return(
    <React.Fragment>
        <ReactApexChart
          options={chartapexData.options}
          series={chartapexData.series}
          type="line"
          height="380"
          className="apex-charts"
        />
      </React.Fragment>
  )
}

export default chartapex;
