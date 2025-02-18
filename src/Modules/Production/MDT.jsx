import React, { useEffect, useState } from "react";
import { Container, Card, CardTitle } from "react-bootstrap";
import {
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Bar,
  Line,
} from "recharts";
import Loader from "../../commonComponents/Loader";

const MTD = ({ month, data }) => {
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
      target: day.target,
      actual: day.actual,
    }));
  } else {
    
    const monthlyTarget =
      datasets?.find((dataset) => dataset.label === "Minor Accident Target")?.data || [];
    const monthlyActual =
      datasets?.find((dataset) => dataset.label === "Minor Accident Actual")?.data || [];

    chartData = monthlyTarget.map((item, index) => ({
      name: Number(item.month), // Convert month to a number if possible
      target: item.target,
      actual: monthlyActual[index]?.actual || 0,
    }));
  }
  const xTicks = Array.from({ length: 11 }, (_, i) => i);
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
        <Card style={{ border: "none",}}>
          <ResponsiveContainer width="100%" height={250}>
            <ComposedChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" type="number" domain={[0, 10]} ticks={xTicks} />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
             <Line dataKey="target" stroke="#5CDFFB" strokeWidth={2} name="Target" dot={{ r: 3 }} />
              <Line dataKey="actual" stroke="#4268FB" strokeWidth={2} name="Actual" dot={{ r: 3 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </Card>
      )}
    </Container>
  );
};

export default MTD;
