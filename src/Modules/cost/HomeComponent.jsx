import React, { useEffect, useState } from "react";
import {  Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../commonComponents/Filter";
import { fetchProductionData } from "../../store/production/productionSlice";
import LineGraph from "../shareGraph/LineGraph";
import {
  processChartData,
  processPieChartData,
} from "../shareGraph/dataModifierHelper";
import CustomCard from "../shareGraph/CustomCard";
import { fetchPPCData } from "../../store/ppc/PPCSectionSlice";
const HomeComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState("");
  const dispatch = useDispatch();
  const allSections = useSelector((state) => state?.production);
  const {
    DomesticFreight,
  } = useSelector((state) => state?.ppc);
  //package consumbles
  //work job
  useEffect(() => {
    const reportTypes = [
      "ProductionConsumables",
      "FurnaceConsumables",
    ];

    reportTypes.forEach((type) => {
      dispatch(fetchProductionData({ report_type: type, year, month }));
    });
  }, [dispatch, year, month]);
   
    useEffect(() => {
        dispatch(fetchPPCData({ report_type: "DomesticFreight", year: year, month: month }));
    }, [dispatch, year, month]);

  const getData = (selectedYear, selectedMonth) => {
    setYear(selectedYear);
    setMonth(selectedMonth);
  };

  return (
    <div
      className="container-fluid p-1"
    //   style={{ backgroundColor: "#2F598C" }}
    >
        <Filter getData={getData} />
      {/* Row with three columns/cards */}
      <Row className="g-0">
        {/*  production consumable */}
         <Col xl={6} lg={6} md={6} sm={12}  className="p-1">
        <CustomCard
            title="Production Consumables"
            tooltipMessage="Detailed information about this Production Consumables"
          >
            <LineGraph
              data={processChartData( allSections?.ProductionConsumables, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
            />
          </CustomCard>
        
        </Col>
        {/*  JOb WOrker */}
         <Col xl={6} lg={6} md={6} sm={12}  className="p-1">
        <CustomCard
            title="Job Work"
            tooltipMessage="Detailed information about this Job Work"
          >
            <LineGraph
              data={processChartData(allSections?.FurnaceConsumables, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
              yAxisColor="#FF8632"
            />
          </CustomCard>
         
        </Col>
        {/*  Packaging consumbles */}
         <Col xl={6} lg={6} md={6} sm={12}  className="p-1">
        <CustomCard
            title=" Packaging Consumbles"
            tooltipMessage="Detailed information about this  Packaging Consumbles"
          >
            <LineGraph
              data={processChartData(allSections?.FurnaceConsumables, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
            />
          </CustomCard>
        </Col>
        {/*  furnace consumbles */}
         <Col xl={6} lg={6} md={6} sm={12} className="p-1" >
        <CustomCard
            title=" Furnace Consumbles"
            tooltipMessage="Detailed information about this  Furnace Consumbles"
          >
            <LineGraph
              data={processChartData( allSections?.FurnaceConsumables, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
              yAxisColor="#FF8632"
            />
          </CustomCard>
        
        </Col>
        {/* domestic fer*/}
        <Col lg={12} md={12} sm={12} xl={12}  className="p-1">
                 <CustomCard
                   title=" Domestic Freight"
                   tooltipMessage="Domestic Freight"
                 >
                   <LineGraph
                     data={processChartData(
                       DomesticFreight,
                       month,
                       "target",
                       "actual"
                     )}
                     xAxisKey="target"
                     yAxisKey="actual"
                   />
                 </CustomCard>
               </Col>
     
      </Row>
    </div>
  );
};

export default HomeComponent;
