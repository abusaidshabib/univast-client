import { ResponsiveLine } from "@nivo/line";

const SsemesterResult = () => {
  const data = [
    {
      id: "Grades",
      color: "hsl(98, 70%, 50%)",
      data: [
        {
          x: "Spring-20",
          y: 3.77,
        },
        {
          x: "Summer-20",
          y: 3.89,
        },
        {
          x: "Fall-20",
          y: 3.75,
        },
        {
          x: "Spring-21",
          y: 3.95,
        },
        {
          x: "Summer-21",
          y: 3.25,
        },
        {
          x: "Fall-21",
          y: 3.94,
        },
        {
          x: "Spring-22",
          y: 3.46,
        },
        {
          x: "Summer-22",
          y: 2.88,
        },
        {
          x: "Fall-22",
          y: 3.13,
        },
        {
          x: "Spring-23",
          y: 3.71,
        },
        {
          x: "Summer-23",
          y: 3.46,
        },
        {
          x: "Fall-23",
          y: 2.4,
        },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-lg p-10 w-full h-[500px]">
      <p className="text-4xl font-semibold">Grades Graph</p>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: 0,
          max: 5.0,
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="natural"
        pointSize={10}
        pointColor={{ from: "color", modifiers: [] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default SsemesterResult;
