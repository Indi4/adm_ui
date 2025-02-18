import React, { useEffect, useState } from "react";
import { Container, Card, CardTitle } from "react-bootstrap";
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
import DataNotFound from "./DataNotFound";


const Defultdata = [
  { name: "COPQ", plan: 30, actual: 20 }, 
];

const OverallPerformance = ({data=Defultdata}) => {
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
  return (
    <Container >
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center mt-4" style={{ height: "250px" }}>
              <Loader />
            </div>
          ) : (
            <>
      <Card style={{ border: "none", }} >
         {data?.length>0?
         <ResponsiveContainer width="100%" height={250}>
         <BarChart
            layout="vertical" 
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            barSize={70}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" /> 
            <YAxis type="category" dataKey="name" /> 
            <Tooltip />
            <Legend />
            <Bar dataKey="plan" stackId="a" fill="#5CDFFB" name="Plan" />
            <Bar dataKey="actual" stackId="a" fill="#4268FB" name="Actual" />
          </BarChart>
        </ResponsiveContainer>:<DataNotFound/>}
      </Card>
      </>
          )}
    </Container>
  );
};

export default OverallPerformance;
