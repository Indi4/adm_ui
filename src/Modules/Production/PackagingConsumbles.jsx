import React, { useEffect, useState } from "react";
import { Container, Card, CardTitle } from "react-bootstrap";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import Loader from "../../commonComponents/Loader";

const PackagingConsumbles = ({ month, data }) => {
  const { datasets, day_wise_data } = data;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(true);
    }
  }, [data]);

  let chartData = [];

  if (month) {
    // When 'month' is provided, assume 'day' is numeric
    chartData = day_wise_data?.map((day) => ({
      name: Number(day.day),
      target: day.target,
      actual: day.actual,
    }));
  } else {
    const monthlyTarget =
      datasets?.find((dataset) => dataset.label === "Minor Accident Target")?.data || [];
    const monthlyActual =
      datasets?.find((dataset) => dataset.label === "Minor Accident Actual")?.data || [];

    chartData = monthlyTarget.map((item, index) => ({
      name: Number(item.month),
      target: item.target,
      actual: monthlyActual[index]?.actual || 0,
    }));
  }

  // Sum up the total values for target and actual
  const totalTarget = chartData.reduce((sum, curr) => sum + curr.target, 0);
  const totalActual = chartData.reduce((sum, curr) => sum + curr.actual, 0);
  const overallTotal = totalTarget + totalActual;

  // Data for the donut chart
  const donutData = [
    { name: "Target", value: totalTarget },
    { name: "Actual", value: totalActual },
  ];

  // Colors for each segment
  const COLORS = ["#008CFF", "#FF5733"];
  const formatNumber = (num) => {
    if (num < 1000) return num;
    const formatted = num / 1000;
    // If the value is a whole number, don't show decimal places.
    return Number.isInteger(formatted) ? `${formatted}K` : `${formatted.toFixed(1)}K`;
  };
  return (
    <Container>
      {isLoading ? (
        <div
          className="d-flex justify-content-center align-items-center mt-4"
          style={{ height: "250px" }}
        >
          <Loader />
        </div>
      ) : (
        <Card style={{ border: "none", padding: "5px", borderRadius: "10px" }}>
          <CardTitle style={{ fontSize: "14px", fontWeight: "bold" ,color:"black"}}>Packaging Consumbles</CardTitle>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={donutData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={30}  // smaller inner radius for a more compact donut
                outerRadius={50}  // smaller overall size
                paddingAngle={2}
              
              >
                {donutData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
              {/* Centered total value */}
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="donut-center-label"
                style={{ fontSize: "16px", fontWeight: "bold" }}
              >
              {formatNumber(overallTotal)}
              </text>
            </PieChart>
          </ResponsiveContainer>
        </Card>
      )}
    </Container>
  );
};

export default PackagingConsumbles;
