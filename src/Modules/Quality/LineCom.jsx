import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Loader from "../../commonComponents/Loader";

const LineCom = ({ data, month }) => {
  const [isLoading, setIsLoading] = useState(true);

  let chartData = [];
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

  if (month) {
    chartData = data?.map((D) => ({
      name: D.Date.slice(-2), // Taking last 2 digits of Date for day representation
      target: D.Target,
      actual: D.Actual,
    }));
  } else {
    chartData = data?.map((D) => ({
      name: D.Month,
      target: D.Target,
      actual: D.Actual,
    }));
  }

  return (
    <Container>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center mt-4" style={{ height: "250px" }}>
          <Loader />
        </div>
      ) : (
        <Card style={{ border: "none" }}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart 
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="target" fill="#26B5DD" name="Target"  />
              <Bar dataKey="actual" fill="#135C75" name="Actual" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      )}
    </Container>
  );
};

export default LineCom;
