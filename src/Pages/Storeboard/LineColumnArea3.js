import React from "react";
import ReactApexChart from "react-apexcharts";


const LineColumnAreaData = {
  series: [
   
    {
      name: "Maintenance",
      type: "area",
      data: [44, 55, 41, 42, 22, 43, 21, 41, 56, 27, 43, 27],
    }
  ],
  options: {
    chart: {
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [0, 0.5, 1],
      curve: "smooth",
      dashArray: [0, 8, 5]
    },
    plotOptions: {
      bar: {
        columnWidth: "18%",
      },
    },
    colors: ["rgba(212, 218, 221, 0.78)", "rgb(251, 77, 83)"],

    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    markers: {
      size: 0,
    },
    legend: {
      offsetY: 11,
    },
    xaxis: {
      type: "month",
    },
    yaxis: {
      title: {
        text: "Points",
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points"
          }
          return y
        },
      },
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  },
}

const LineColumnArea3 = () => {
  return(
    <React.Fragment>
        <ReactApexChart
          options={LineColumnAreaData.options}
          series={LineColumnAreaData.series}
          type="line"
          height="350"
          stacked= "false"
          className="apex-charts"
        />
      </React.Fragment>
  )
}

export default LineColumnArea3;