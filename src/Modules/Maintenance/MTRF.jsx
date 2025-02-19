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
import DataNotFound from "../PPC/DataNotFound";
import { useLoading } from "./helperData";
const MTRF = ({ data }) => {
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
        <Card style={{ border: "none", }}>
         
         { data?.length>0?<ResponsiveContainer width="100%" height={250}>
            <BarChart data={data} 
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            barGap={5} 
            barCategoryGap={20} 

            >
              <CartesianGrid strokeDasharray="3 3" />
            
              <XAxis dataKey="name" type="category" />
              <YAxis  />
              <Tooltip />
              <Legend />
              <Bar dataKey="plan" fill="#26B5DD" barSize={20} name="Plan" />
              <Bar dataKey="actual" fill="#FF8632" barSize={20} name="Actual" />
            </BarChart>
          </ResponsiveContainer>:<DataNotFound/>}
        </Card>
      )}
    </Container>
  );
};

export default MTRF;
