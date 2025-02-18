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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [data]);

  let chartData = [];
  if(month){
    chartData = data.map((D,index)=>({
      name: D?.date?.slice(-2),
      direct_actual : D.direct_actual_sum,
      indirect_actual : D.indirect_actual_sum,
    }))
  }else{
    chartData = data?.map((D,index)=>({
      name: D.month,
      direct_actual : D.direct_actual_sum,
      indirect_actual : D.indirect_actual_sum,
    }))
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
              <Bar dataKey="direct_actual" stroke="#f8cd0e" fill="#f8cd0e" name="Direct Actual" />
              <Bar dataKey="indirect_actual" stroke="#26B5DD" fill="#26B5DD" name="In Direct Actual" />
              <Legend />
            </ComposedChart>
          </ResponsiveContainer>
        </Card>
      )}
    </Container>
  );
};

export default MPCost;
