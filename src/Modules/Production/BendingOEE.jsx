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

const BendingOEE = ({ month, data }) => {
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
      name: `${day.day}`, // Convert to string if necessary to treat as a category
      target: day.target,
      actual: day.actual,
    }));
  } else {
    const monthlyTarget =
      datasets?.find((dataset) => dataset.label === "Minor Accident Target")?.data || [];
    const monthlyActual =
      datasets?.find((dataset) => dataset.label === "Minor Accident Actual")?.data || [];

    chartData = monthlyTarget.map((item, index) => ({
      name: `${item.month}`, // Convert to string to be treated as category
      target: item.target,
      actual: monthlyActual[index]?.actual || 0,
    }));
  }

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
        <Card style={{ border: "none", }}>
         
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
            
              <XAxis dataKey="name" type="category" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="target" fill="#5CDFFB" barSize={30} name="Target" />
              <Bar dataKey="actual" fill="#4268FB" barSize={30} name="Actual" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      )}
    </Container>
  );
};

export default BendingOEE;
