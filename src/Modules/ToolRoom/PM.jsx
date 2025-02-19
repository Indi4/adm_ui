import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Loader from "../../commonComponents/Loader";

const PM = ({ month, data }) => {
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
    chartData = data.map((D) => ({
      name: D?.date?.slice(-2),
      target: D.target,
      actual: D.actual,
    }));
  } else {
    chartData = data?.map((D) => ({
      name: D.month,
      target: D.target,
      actual: D.actual,
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
        <>
          <Card style={{ border: "none" }}>
            <ResponsiveContainer width="100%" height={250}>
              <ComposedChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="#26B5DD"
                  strokeWidth={2}
                  dot={{ r: 1 }}
                  name="Target"
                />
                <Line
                  type="monotone"
                  dataKey="actual"
                  stroke="#135C75"
                  strokeWidth={2}
                  dot={{ r: 1 }}
                  name="Actual"
                />
                <Legend />
              </ComposedChart>
            </ResponsiveContainer>
          </Card>
        </>
      )}
    </Container>
  );
};

export default PM;
