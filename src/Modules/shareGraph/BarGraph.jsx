import React from "react";
import { Container, Card,  } from "react-bootstrap";
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
import DataNotFound from "../PPC/DataNotFound";
import { capitalizeFirstLetter, useLoading } from "./dataModifierHelper";
const BarGraph = ({ data, 
    xAxisDataKey = "name", 
    xAxisKey = "plan", 
    xAxisColor = "#26B5DD", 
    yAxisKey = "actual", 
    yAxisColor = "#FF8632", 
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
              <BarChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                barGap={5} 
                barCategoryGap={20}

              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={xAxisDataKey} type="category" />
                <YAxis tick={{ angle: -45 }}  />
                <Tooltip />
                <Legend />
                <Bar dataKey={xAxisKey} fill={xAxisColor} barSize={20}  name={capitalizeFirstLetter(xAxisKey)} />
                <Bar
                  dataKey={yAxisKey}
                  fill={yAxisColor}
                  barSize={20}
                  name={capitalizeFirstLetter(yAxisKey)}
                />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <DataNotFound />
          )}
        </Card>
      )}
    </Container>
  );
};

export default BarGraph;
