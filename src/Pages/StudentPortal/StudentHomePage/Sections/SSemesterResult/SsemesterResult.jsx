import { ResponsiveLine } from "@nivo/line";



const SsemesterResult = () => {


const data = [
  {
    id: "japan",
    color: "hsl(98, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 155,
      },
      {
        x: "helicopter",
        y: 229,
      },
      {
        x: "boat",
        y: 160,
      },
      {
        x: "train",
        y: 276,
      },
      {
        x: "subway",
        y: 141,
      },
      {
        x: "bus",
        y: 151,
      },
      {
        x: "car",
        y: 223,
      },
      {
        x: "moto",
        y: 191,
      },
      {
        x: "bicycle",
        y: 185,
      },
      {
        x: "horse",
        y: 117,
      },
      {
        x: "skateboard",
        y: 138,
      },
      {
        x: "others",
        y: 176,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(316, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 0,
      },
      {
        x: "helicopter",
        y: 268,
      },
      {
        x: "boat",
        y: 55,
      },
      {
        x: "train",
        y: 35,
      },
      {
        x: "subway",
        y: 98,
      },
      {
        x: "bus",
        y: 226,
      },
      {
        x: "car",
        y: 44,
      },
      {
        x: "moto",
        y: 205,
      },
      {
        x: "bicycle",
        y: 100,
      },
      {
        x: "horse",
        y: 293,
      },
      {
        x: "skateboard",
        y: 161,
      },
      {
        x: "others",
        y: 207,
      },
    ],
  }
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
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
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