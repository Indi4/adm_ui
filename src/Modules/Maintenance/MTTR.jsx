import React from "react";
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
  Line,
} from "recharts";
import Loader from "../../commonComponents/Loader";
import DataNotFound from "../PPC/DataNotFound";
import { useLoading } from "./helperData";
const MTTR = ({ data }) => {
  const isLoading = useLoading(data);
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
          {data?.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
              <ComposedChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  dataKey="plan"
                  stroke="#5CDFFB"
                  strokeWidth={2}
                  name="Plan"
                  dot={{ r: 3 }}
                />
                <Line
                  dataKey="actual"
                  stroke="#4268FB"
                  strokeWidth={2}
                  name="Actual"
                  dot={{ r: 3 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          ) : (
            <DataNotFound />
          )}
        </Card>
      )}
    </Container>
  );
};

export default MTTR;
