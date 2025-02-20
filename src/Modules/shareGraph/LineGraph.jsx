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
  Line,
} from "recharts";
import Loader from "../../commonComponents/Loader";
import DataNotFound from "../PPC/DataNotFound";
import { capitalizeFirstLetter, useLoading } from "./dataModifierHelper";

const LineGraph = ({ 
  data, 
  xAxisDataKey = "name", 
  xAxisKey = "plan", 
  xAxisColor = "#26B5DD", 
  yAxisKey = "actual", 
  yAxisColor = "#135675", 
  xAxisColorStock = "#000"
}) => {
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
                <XAxis dataKey={xAxisDataKey} stroke={xAxisColorStock} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  dataKey={xAxisKey}
                  stroke={xAxisColor}
                  strokeWidth={2}
                  name={capitalizeFirstLetter(xAxisKey)}
                  dot={{ r: 2 }}
                />
                <Line
                  dataKey={yAxisKey}
                  stroke={yAxisColor}
                  strokeWidth={2}
                  name={capitalizeFirstLetter(yAxisKey)}
                  dot={{ r: 2 }}
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

export default LineGraph;
