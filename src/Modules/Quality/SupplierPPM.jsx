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


const data = [
  { name: "1", plan: 50, actual: 30 },
  { name: "2", plan: 40, actual: 35 },
  { name: "3", plan: 30, actual: 45 },
  { name: "4", plan: 20, actual: 10 },
  { name: "5", plan: 25, actual: 20 },
  { name: "6", plan: 15, actual: 10 },
  { name: "7", plan: 20, actual: 15 },
  { name: "8", plan: 35, actual: 40 },
  { name: "9", plan: 40, actual: 30 },
  { name: "10", plan: 30, actual: 35 },
];

const SupplierPPMChart = () => {
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
      <Card style={{border:"none"}}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="plan" stackId="a" fill="#5EDFF8" name="Plan" />
              <Bar dataKey="actual" stackId="a" fill="#254EDB" name="Actual" />
            </BarChart>
          </ResponsiveContainer>
      </Card>
      </>
      )}
    </Container>
  );
};

export default SupplierPPMChart;
