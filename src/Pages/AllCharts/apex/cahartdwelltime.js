import React from "react"
import ReactApexChart from "react-apexcharts"

const chartapexData = {
  series: [
    { name: "Dwelling Time - 2023", data: [15, 18, 20, 16, 22, 25, 23] },
  ],
  options: {
    chart: { zoom: { enabled: !1 }, toolbar: { show: !1 } },
    colors: ["rgb(13, 180, 214)"],
    dataLabels: { enabled: !0 },
    stroke: { width: [3], curve: "straight" },
    title: { text: "Average Dwelling Time", align: "left" },
    grid: {
      row: { colors: ["transparent", "transparent"], opacity: 0.2 },
      borderColor: "#f1f1f1",
    },
    markers: { style: "inverted", size: 6 },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      title: { text: "Month" },
    },
    yaxis: { title: { text: "Dwelling Time (minutes)" }, min: 10, max: 30 },
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
