import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Box, Typography } from "@mui/material";

const PurchasePieChart = ({purchase,type}) => {
  const { month_actual, month_target } = purchase;

  // Ensure values do not exceed 100% for the chart
  const cappedPercentage = Math.min((month_actual / month_target) * 100, 100);

  // Pie chart data: Actual value and Remaining target (even if overflow happens)
  const data = [
    { name: "Actual", value: Math.min(month_actual, month_target) },
    { name: "Remaining", value: Math.max(0, month_target - month_actual) },
  ];

  const COLORS = ["#69a9c2", "#035170"]; // Colors for actual and remaining

  // Function to render the needle
  const renderNeedle = (percentage, cx, cy, radius) => {
    const angle = 180 + (percentage / 100) * 180; // Map percentage to angle (180° to 360°)
    const needleLength = radius + 10; // Extend needle slightly beyond the chart
    const x = cx + needleLength * Math.cos((Math.PI * angle) / 180);
    const y = cy + needleLength * Math.sin((Math.PI * angle) / 180);

    const needleBaseWidth = 6; // Width of the needle base
    const needleColor = "#ff5722"; // Needle color

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
    <Box sx={{ textAlign: "center", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
        <Typography variant="body1">
        Actual: {month_actual?.toFixed(2)} | Target: {month_target?.toFixed(2)}
        {month_actual > month_target && (
          <Typography variant="caption" color="error" display="block">
            Actual exceeds target by {(month_actual - month_target).toFixed(2)}
          </Typography>
        )}
      </Typography>
      <PieChart width={200} height={250}>
        {/* Pie Chart */}
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
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
        {/* Render the Needle */}
        {renderNeedle(cappedPercentage, 95, 120, 70)}
      </PieChart>
      
    </Box>
  );
};
export default PurchasePieChart