import React from "react";
import { Container, Card } from "react-bootstrap";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import Loader from "../../commonComponents/Loader";
import DataNotFound from "../PPC/DataNotFound";
import { useLoading } from "./helperData";
const ComplinityReport = ({ data }) => {
  const isLoading = useLoading(data);
  const COLORS = ["#135675", "#FF8632"];
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
          {data?.chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={data?.chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={100}
                  paddingAngle={4}
                >
                  {data?.chartData?.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
                {/* Centered total value */}
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="donut-center-label"
                  style={{ fontSize: "16px", fontWeight: "bold" }}
                >
                  {data?.OverallTotal ? data?.OverallTotal : ""}
                </text>
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <DataNotFound />
          )}
        </Card>
      )}
    </Container>
  );
};

export default ComplinityReport;
