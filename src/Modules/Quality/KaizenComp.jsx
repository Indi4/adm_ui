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




const KaizenComp = ({data, month}) => {
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
    // Filter data for the selected month from day_wise_data
    chartData = data?.map((D) => ({
      name: D.Date.slice(-2),
      target: D.Target,
      actual: D.Actual,
    }));
  } else {
    chartData = data?.map((D, index) => ({
      name: D.Month,
      target: D.Target,
      actual: D.Actual,
    }));
  }

  return (
    <Container >
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center mt-4" style={{ height: "250px" }}>
              <Loader />
            </div>
          ) : (
            <>
      <Card style={{ border: "none"}} >
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis /> 
            <XAxis dataKey="name" /> 
            <Tooltip />
            <Legend />
            <Bar dataKey="target" fill="#5EDFF8" name="Plan" />
            <Bar dataKey="actual" fill="#254EDB" name="Actual" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
      </>
          )}
    </Container>
  );
};

export default KaizenComp;
