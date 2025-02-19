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
import dayjs from "dayjs"
import Loader from "../../commonComponents/Loader";

const GRNReport = ({ month, data }) => {
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
    chartData = data?.map((D) => ({
      name: D.Date.slice(-2),
      target: D.target,
      // pending: D.pending,
      actual: D.actual,
    }));
  } else {
    chartData = data?.map((item, index) => ({
        name: item?.Month,
        target: item.target,
      // pending: item.pending,
      actual: item.actual,
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
        <Card style={{ border: "none"}}>
         
          { chartData?.length>0 ?  <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 10000]}/>
              <Tooltip />
              <Legend />
              <Line dataKey="target" stroke="#5CDFFB" strokeWidth={2} name="Target" dot={{ r: 3 }} />
              <Line dataKey="actual" stroke="#4268FB" strokeWidth={2} name="Actual" dot={{ r: 3 }} />             
            </ComposedChart>
          </ResponsiveContainer>
          :<>
          <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "250px",
        fontSize: "18px",
        color: "#666",
      }}
    >
      Data Not Available for Selected Period!
    </div>
          </>}
        </Card>
      )}
    </Container>
  );
};

export default GRNReport;
