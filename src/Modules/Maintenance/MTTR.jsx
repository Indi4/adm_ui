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
                barGap={5} 
                barCategoryGap={20}

              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  dataKey="plan"
                  stroke="#26B5DD"
                  strokeWidth={2}
                  name="Plan"
                  dot={{ r: 2 }}
                />
                <Line
                  dataKey="actual"
                  stroke="#135675"
                  strokeWidth={2}
                  name="Actual"
                  dot={{ r: 2}}
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
