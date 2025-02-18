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
import DataNotFound from "./DataNotFound";

const DeliveryPerformance = ({ month, data }) => {
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
    chartData = day_wise_data?.map((day) => ({
      name:`${day.day}`,
      plan: day.target,
      actual: day.actual,
    }));
  } else {
    const monthlyTarget =
      datasets?.find((dataset) => dataset?.label === "Minor Accident Target")?.data || [];
    const monthlyActual =
      datasets?.find((dataset) => dataset?.label === "Minor Accident Actual")?.data || [];

    chartData = monthlyTarget?.map((item, index) => ({
        month: item?.month,
        date: item?.date ? dayjs(item?.date).format("DD") : item?.date,
        plan: item.target,
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
        <Card style={{ border: "none"}}>
         
          { chartData?.length>0 ?  <ResponsiveContainer width="100%" height={250}>
          <ComposedChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line dataKey="plan" stroke="#5CDFFB" strokeWidth={2} name="Plan" dot={{ r: 3 }} />
              <Line dataKey="actual" stroke="#4268FB" strokeWidth={2} name="Actual" dot={{ r: 3 }} />             
            </ComposedChart>
          </ResponsiveContainer>
          :<DataNotFound/>}
        </Card>
      )}
    </Container>
  );
};

export default DeliveryPerformance
