import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Loader from "../../commonComponents/Loader";

const CustomerComp = ({ month, data }) => {

  const [isLoading, setIsLoading] = useState(true);
  // const [showFirstHalf, setShowFirstHalf] = useState(true);

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

  // const monthlyTarget =
  //   datasets?.find((dataset) => dataset.label === "Major Accident Target")
  //     ?.data || [];
  // const monthlyActual =
  //   datasets?.find((dataset) => dataset.label === "Major Accident Actual")
  //     ?.data || [];

  // const chartData = monthlyTarget
  //   .slice(showFirstHalf ? 0 : 6, showFirstHalf ? 6 : 12)
  //   .map((item, index) => ({
  //     name: item.month,
  //     target: item.target,
  //     actual: monthlyActual[showFirstHalf ? index : index + 6]?.actual || 0,
   
  //   }));

  let chartData = [];
  
    if (month) {
      // Filter data for the selected month from day_wise_data
      chartData = data?.map((D) => ({
        name: D.Date.slice(-2),
        target: D.Target,
        actual: D.Actual,
      }));
    } else {
      chartData = data?.map((D, index) => ({
        name: D.month,
        target: D.Target,
        actual: D.Actual,
      }));
    }


  return (
    <Container >
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center mt-4" style={{ height: "250px" }}>
          <Loader />
        </div>
      ) : (
        <>
          {/* <Row className="justify-content-center my-3">
            <Col xs={6} md={4} className="text-center">
              <Card className="p-2 bg-primary text-white">
                <Card.Title style={{ fontSize: "0.9rem" }}>Actual</Card.Title>
                <Card.Text style={{ fontSize: "0.9rem" }}>{totals.actual?.toFixed(2)}</Card.Text>
              </Card>
            </Col>
            <Col xs={6} md={4} className="text-center">
              <Card className="p-2 bg-warning text-dark">
                <Card.Title style={{ fontSize: "0.9rem" }}>Target</Card.Title>
                <Card.Text style={{ fontSize: "0.9rem" }}>{totals.target?.toFixed(2)}</Card.Text>
              </Card>
            </Col>
          </Row> */}

          {/* <Row className="justify-content-center mb-3">
            <Col xs={12} className="text-center">
              <Button variant="secondary" onClick={() => setShowFirstHalf((prev) => !prev)}>
                {showFirstHalf ? "Next 6 Months" : "First 6 Months"}
              </Button>
            </Col>
          </Row> */}

          <Card style={{border:"none"}}>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="actual" stroke="#FF8632" strokeWidth={2} dot={{ r: 2 }} name="Actual" />
                <Line type="monotone" dataKey="target" stroke="#135C75" strokeWidth={2} dot={{ r: 2 }} name="Target" />
                <Legend/>
              </ComposedChart>
            </ResponsiveContainer>
          </Card>
        </>
      )}
    </Container>
  );
};

export default CustomerComp;