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
import DataNotFound from "../PPC/DataNotFound";


const Defultdata = [
  { name: "COPQ", plan: 30, actual: 20 }, // Adjust values as needed
];

const MTRF = ({data=Defultdata}) => {
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
      {data?.length>0? <ResponsiveContainer width="100%" height={250}>
          <BarChart
            layout="vertical" // Ensures horizontal bars
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            barSize={70}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" /> {/* X-axis shows numerical values */}
            <YAxis type="category" dataKey="name" /> {/* Y-axis as category */}
            <Tooltip />
            <Legend />
            <Bar dataKey="plan" stackId="a" fill="#5EDFF8" name="Plan" />
            <Bar dataKey="actual" stackId="a" fill="#254EDB" name="Actual" />
          </BarChart>
        </ResponsiveContainer>
        :<DataNotFound/>}
      </Card>
      </>
          )}
    </Container>
  );
};

export default MTRF;
