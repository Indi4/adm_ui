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

const DailyPurchase = ({ month, data }) => {
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
    chartData = data?.map((D) => ({
      name: D.Date.slice(-2), // Convert to string if necessary to treat as a category
      target: D.target,
      actual: D.actual,
    }));
  } else {
       chartData = data?.map((item, index) => ({
      name: item.Month, // Convert to string to be treated as category
      target: item.target,
      actual: item?.actual || 0,
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
         
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} barGap={10} barCategoryGap={20}>
              <CartesianGrid strokeDasharray="3 3" />
            
              <XAxis dataKey="name" type="category" />
              <YAxis domain={[0, 1000]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="actual" fill="#26B5DD" barSize={20} name="Acutal" />
              <Bar dataKey="target" fill="#FF8632" barSize={20} name="Target" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      )}
    </Container>
  );
};

export default DailyPurchase;
