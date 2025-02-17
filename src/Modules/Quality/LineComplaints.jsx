import React from "react";
import { Container, Card } from "react-bootstrap";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Plan", value: 1500, color: "#FB6A4A" }, // Red-Orange
  { name: "Actual", value: 2000, color: "#254EDB" }, // Blue
];

const LineGenerationComplaints = () => {
  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <Container className="d-flex justify-content-center">
      <Card style={{ width: "300px", padding: "10px", textAlign: "center" }}>
        <h6 className="mb-3">Line/Generation Complaints</h6>
        <div style={{ width: "100%", height: "250px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="60%" // Creates donut effect
                outerRadius="80%"
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend iconType="circle" layout="horizontal" verticalAlign="bottom" />
            </PieChart>
          </ResponsiveContainer>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {`${(total / 1000).toFixed(1)}K`}
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default LineGenerationComplaints;
