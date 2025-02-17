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
  { name: "COPQ", plan: 30, actual: 20 }, // Adjust values as needed
];

const Kaizen = () => {
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
      <Card style={{ border: "none"}} >
        <ResponsiveContainer width="100%" height={350}>
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
      </Card>
      </>
          )}
    </Container>
  );
};

export default Kaizen;
