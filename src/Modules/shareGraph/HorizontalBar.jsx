import React from "react";
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
import { capitalizeFirstLetter, useLoading } from "./dataModifierHelper";
import DataNotFound from "../PPC/DataNotFound";
const HorizontalBar = ({data,
    xAxisDataKey = "name", 
    xAxisKey = "plan", 
    xAxisColor = "#26B5DD", 
    yAxisKey = "Actual", 
    yAxisColor = "#135675", 
}) => {
     const isLoading = useLoading(data);
  return (
    <Container >
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center mt-4" style={{ height: "250px" }}>
              <Loader />
            </div>
          ) : (
            <>
      <Card style={{ border: "none", }} >
         {data?.HorizontalData?.length>0?
         <ResponsiveContainer width="100%" height={250}>
         <BarChart
            layout="vertical" 
            data={data?.HorizontalData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            barSize={70}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" /> 
            <YAxis type="category" dataKey={xAxisDataKey} /> 
            <Tooltip />
            <Legend />
            <Bar dataKey={xAxisKey} stackId="a" fill={xAxisColor}name={capitalizeFirstLetter(xAxisKey)} />
            <Bar dataKey={yAxisKey} stackId="a" fill={yAxisColor} name={capitalizeFirstLetter(yAxisKey)}/>
          </BarChart>
        </ResponsiveContainer>:<DataNotFound/>}
      </Card>
      </>
          )}
    </Container>
  );
};

export default HorizontalBar;
