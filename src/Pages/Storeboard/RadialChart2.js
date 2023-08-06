import React from "react";
import ReactApexChart from "react-apexcharts";

const RadialChart2 = () => {
  const series = [32, 65, 57];
  const options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 10,
          size: "45%",
        },
        track: {
          show: true,
          strokeWidth: "70%",
          margin: 12,
        },
        dataLabels: {
          name: {
            fontSize: "27px",
          },
          value: {
            fontSize: "20px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 341;
            },
          },
        },
      },
    },
    labels: ["Facebook", "Twitter", "Instagram"],
    colors: ["#059680", "#4fa3ff", "#5964d2"],
  };
  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height="350"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

export default RadialChart2;
