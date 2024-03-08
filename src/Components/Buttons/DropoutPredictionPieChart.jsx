import Chart from "react-apexcharts";

const DropoutPredictionPieChart = () => {
  const pieChartOptions = {
    labels: ["Graduate", "Enrolled", "Dropout"],
    colors: ["#4318FF", "#6BD2FF", "#EFF4FB"],
    chart: {
      width: "500",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
      fontSize: "16px",
      labels: {
        colors: ["#", "#", "#"],
        useSeriesColors: false,
      },
    },
    dataLabels: {
      enabled: false,
    },

    hover: { mode: null },
    plotOptions: {
      donut: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#4318FF", "#6BD2FF", "#EFF4FB"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000",
      },
    },
  };
  return (
    <Chart
      options={pieChartOptions}
      type="pie"
      width="100%"
      height="100%"
      series={pieChartData}
    />
  );
};

export default DropoutPredictionPieChart;
