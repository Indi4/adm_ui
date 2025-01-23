import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { Card } from "react-bootstrap";

const PurchasePieChart = ({ purchase, type }) => {
  const { actual, target } = purchase;

  // Ensure values do not exceed 100% for the chart
  const cappedPercentage = target > 0 ? Math.min((actual / target) * 100, 100) : 0;

  // Handle the case where both actual and target are 0
  const isEmptyData = actual === 0 && target === 0;
  const data = isEmptyData
    ? [{ name: "No Data", value: 1 }]
    : [
        { name: "Actual", value: Math.min(actual, target) },
        { name: "Remaining", value: Math.max(0, target - actual) },
      ];

  const COLORS = isEmptyData ? ["#d3d3d3"] : ["#008cc4", "#8fbccf"]; // Use grey for placeholder data

  // Function to render the needle
  const renderNeedle = (percentage, cx, cy, radius) => {
    const angle = 180 + (percentage / 100) * 180; 
    const needleLength = radius + 10; 
    const x = cx + needleLength * Math.cos((Math.PI * angle) / 180);
    const y = cy + needleLength * Math.sin((Math.PI * angle) / 180);

    const needleBaseWidth = 6; 
    const needleColor = "#ff5722"; 

    // Calculate points for a triangular needle
    const baseLeftX = cx - needleBaseWidth * Math.sin((Math.PI * angle) / 180);
    const baseLeftY = cy + needleBaseWidth * Math.cos((Math.PI * angle) / 180);

    const baseRightX = cx + needleBaseWidth * Math.sin((Math.PI * angle) / 180);
    const baseRightY = cy - needleBaseWidth * Math.cos((Math.PI * angle) / 180);

    return (
      <g>
        {/* Needle Body */}
        <polygon
          points={`${x},${y} ${baseLeftX},${baseLeftY} ${baseRightX},${baseRightY}`}
          fill={needleColor}
        />
        {/* Needle Center */}
        <circle cx={cx} cy={cy} r={5} fill={needleColor} />
      </g>
    );
  };

  return (
    <Card
      style={{
        height: 230, 
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <PieChart width={300} height={280}>
        {/* Pie Chart */}
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="73%"
          startAngle={180}
          endAngle={0}
          innerRadius="70%"
          outerRadius="100%"
          paddingAngle={2}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Legend
          layout="horizontal"
          align="center"
          verticalAlign="bottom"
          wrapperStyle={{
            position: "absolute",
            width: "194px",
            height: "17px",
            left: "65px",
            bottom: "56px",
            marginTop: "5px",
          }}
          payload={
            isEmptyData
              ? [{ value: "No Data", type: "circle", color: "#d3d3d3" }]
              : [
                  { value: "Actual", type: "circle", color: "#008cc4" },
                  { value: "Target", type: "circle", color: "#8fbccf" },
                ]
          }
        />
        {/* Render the Needle if Data is Available */}
        {!isEmptyData && renderNeedle(cappedPercentage, 152, 190, 90)}
      </PieChart>
    </Card>
  );
};

export default PurchasePieChart;
