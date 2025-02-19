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
import DataNotFound from "../PPC/DataNotFound";

const ComplinityReport = ({ month, data }) => {
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
      name: Number(day.day), // Ensure numeric value for the X-axis
      plan: day.target,
      actual: day.actual,
    }));
  } else {
    const monthlyTarget =
      datasets?.find((dataset) => dataset.label === "Minor Accident Target")?.data || [];
    const monthlyActual =
      datasets?.find((dataset) => dataset.label === "Minor Accident Actual")?.data || [];

    chartData = monthlyTarget.map((item, index) => ({
        month: item?.month,
        date: item?.date ? dayjs(item.date).format("DD") : item?.date,
        plan: item.target,
      actual: monthlyActual[index]?.actual || 0,
    }));
  }
  const totalTarget = chartData?.reduce((sum, curr) => sum + 120, 0);
  const totalActual = chartData?.reduce((sum, curr) => sum +30, 0);
  const overallTotal = totalTarget + totalActual;
  const donutData = [
    { name: "plan", value: totalTarget },
    { name: "Actual", value: totalActual },
  ];
  const COLORS = ["#4268FB", "#FF7754"];
  const formatNumber = (num) => {
    if (num < 1000) return num;
    const formatted = num / 1000;
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
        <Card  style={{ border: "none",}}>
         
        {chartData.length>0?  <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={donutData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={50} 
                outerRadius={100}  
                paddingAngle={4}
              
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
                {formatNumber(overallTotal)?formatNumber(overallTotal):0}
              </text>
            </PieChart>
          </ResponsiveContainer>:<DataNotFound/>}
        </Card>
      )}
    </Container>
  );
};

export default ComplinityReport;
