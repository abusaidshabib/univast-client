import Chart from "react-apexcharts";
const GraduationRateLineChart = () => {
  const lineChartDataTotalSpent = [
    {
      name: "Graduation",
      data: [60, 64, 75, 66, 56, 68],
      color: "#4318FF",
    },
    {
      name: "Retention",
      data: [40, 36, 25, 34, 44, 32],
      color: "#6AD2FF",
    },
  ];

  const lineChartOptionsTotalSpent = {
    legend: {
      show: true,
    },

    theme: {
      mode: "light",
    },
    chart: {
      type: "line",

      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },

    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000",
      },
      theme: "dark",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      type: "text",
      range: undefined,
      categories: [
        "Spring-22",
        "Summer-22",
        "Fall-22",
        "Spring-23",
        "Summer-23",
        "Fall-23",
      ],
    },

    yaxis: {
      show: false,
    },
  };
  return (
    <Chart
      options={lineChartOptionsTotalSpent}
      type="line"
      width="100%"
      height="100%"
      series={lineChartDataTotalSpent}
    />
  );
};

export default GraduationRateLineChart;
