import React, { useEffect, useState } from "react";
import { Container, Card, CardTitle } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Loader from "../../commonComponents/Loader";

const JobWork = ({ month, data }) => {
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
    // If no month is provided, adjust the data structure accordingly.
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

  // Define ticks for XAxis (if needed)
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
        <Card style={{ border: "none", padding: "5px", borderRadius: "10px" }}>
          <CardTitle style={{ fontSize: "14px", fontWeight: "bold" ,color:"black"}}>Job Work</CardTitle>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" type="number" domain={[0, 10]} ticks={xTicks} />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="target" fill="#008CFF" barSize={30} name="Target" />
              <Bar dataKey="actual" fill="#FF5733" barSize={30} name="Actual" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      )}
    </Container>
  );
};

export default JobWork;
