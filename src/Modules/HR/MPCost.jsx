import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import {
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Bar,
} from "recharts";
import Loader from "../../commonComponents/Loader";

const MPCost = ({ month, data }) => {
  const { datasets, day_wise_data } = data || {};
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [data]);

  let chartData = [];
  let totals = { actual: 0, target: 0 };

  if (month && day_wise_data) {
    chartData = day_wise_data.map((day) => ({
      name: `${day.day}`,
      target: day.target,
      actual: day.actual,
    }));
  } else if (datasets) {
    const monthlyTarget =
      datasets.find((dataset) => dataset.label === "Avg of monthly target")
        ?.data || [];
    const monthlyActual =
      datasets.find((dataset) => dataset.label === "Avg of monthly Actual")
        ?.data || [];

    chartData = monthlyTarget.map((item, index) => ({
      name: item.month,
      target: item.target,
      actual: monthlyActual[index]?.actual || 0,
    }));

    totals = chartData.reduce(
      (acc, item) => {
        acc.target += item.target;
        acc.actual += item.actual;
        return acc;
      },
      { actual: 0, target: 0 }
    );
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
        <Card style={{ border: "none" }}>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="actual" stroke="#f8cd0e" fill="#f8cd0e" name="Actual" />
              <Bar dataKey="target" stroke="#26B5DD" fill="#26B5DD" name="Target" />
              <Legend />
            </ComposedChart>
          </ResponsiveContainer>
        </Card>
      )}
    </Container>
  );
};

export default MPCost;
