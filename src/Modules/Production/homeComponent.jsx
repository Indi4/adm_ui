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
const HomeComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState("");
  const dispatch = useDispatch();
  const allSections = useSelector((state) => state?.production);
  useEffect(() => {
    const reportTypes = [
      "Furnace",
      "Bending",
      "AHF",
      "AssemblyProduction",
      "BendingProduction",
      "AHFProduction",
      "MTDProductivity",
      "ProductionConsumables",
      "FurnaceConsumables",
    ];

    reportTypes.forEach((type) => {
      dispatch(fetchProductionData({ report_type: type, year, month }));
    });
  }, [dispatch, year, month]);

  const getData = (selectedYear, selectedMonth) => {
    setYear(selectedYear);
    setMonth(selectedMonth);
  };

  return (
    <div
      className="container-fluid p-1"
      style={{ backgroundColor: "#2F598C" }}
    >
        <Filter getData={getData} />
      {/* Row with three columns/cards */}
      <Row className="g-0">
        {/* AHF Production Card */}
         <Col xl={6} lg={6} md={6} sm={12} className="p-1">
        <CustomCard
            title="AHF Production"
            tooltipMessage="Detailed AHF Production"
          >
            <LineGraph
              data={processChartData(allSections?.AHFProduction, month, "target","Ahf Punching",)}
              xAxisKey="target"
              yAxisKey="Ahf Punching"
            />
          </CustomCard>
        
        </Col>

        {/* Bending Production Card */}
         <Col xl={6} lg={6} md={6} sm={12} className="p-1">
        <CustomCard
            title="Bending Production"
            tooltipMessage="Detailed  Bending Production"
          >
            <LineGraph
              data={processChartData(allSections?.BendingProduction, month,  "target","Bending Punching",)}
              xAxisKey="target"
              yAxisKey="Bending Punching"
              yAxisColor="#FF8632"
            />
          </CustomCard>
         
        </Col>
        {/* AssemblyProduction  Card */}
         <Col xl={6} lg={6} md={6} sm={12} className="p-1">
        <CustomCard
            title="Assembly Production plan"
            tooltipMessage="Detailed Assembly Production plan (quality clear)"
          >
            <LineGraph
              data={processChartData(allSections?.AssemblyProduction, month, "target", "Assembly Punching")}
              xAxisKey="target"
              yAxisKey="Assembly Punching"
            />
          </CustomCard>
        
        </Col>
        {/* AHFOEE Card */}
         <Col xl={6} lg={6} md={6} sm={12} className="p-1">
        <CustomCard
            title="AHF OEE"
            tooltipMessage="Detailed information about this AHF OEE"
          >
            <LineGraph
              data={processChartData(allSections?.AHF, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
            />
          </CustomCard>
         
        </Col>

        {/* Bending OEE Production Card */}
         <Col xl={6} lg={6} md={6} sm={12} className="p-1">
        <CustomCard
            title=" Bending OEE"
            tooltipMessage="Detailed information about this  Bending OEE"
          >
            <LineGraph
              data={processChartData( allSections?.Bending, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
              yAxisColor="#FF8632"
            />
          </CustomCard>
         
        </Col>
        {/* Furnace OEE */}
         <Col xl={6} lg={6} md={6} sm={12} className="p-1">
        <CustomCard
            title="Furnace OEE"
            tooltipMessage="Detailed information about this Furnace OEE"
          >
            <LineGraph
              data={processChartData(allSections?.Furnace, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
            />
          </CustomCard>
         
        </Col>
        {/* MTD productivity */}
         <Col xl={6} lg={6} md={6} sm={12} className="p-1">
        <CustomCard
            title="MTD Productivity"
            tooltipMessage="Detailed information about this MTD Productivity"
          >
            <LineGraph
              data={processChartData( allSections?.MTDProductivity, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
              yAxisColor="#FF8632"
            />
          </CustomCard>
        </Col>
        {/*  production consumable */}
         {/* <Col xl={6} lg={6} md={6} sm={12}>
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
        
        </Col> */}
        {/*  JOb WOrker */}
         {/* <Col xl={6} lg={6} md={6} sm={12}>
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
         
        </Col> */}
        {/*  Packaging consumbles */}
         {/* <Col xl={6} lg={6} md={6} sm={12}>
        <CustomCard
            title=" Packaging Consumbles"
            tooltipMessage="Detailed information about this  Packaging Consumbles"
          >
            <LineGraph
              data={processChartData(allSections?.AHF, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
            />
          </CustomCard>
        </Col> */}
        {/*  furnace consumbles */}
         {/* <Col xl={6} lg={6} md={6} sm={12}>
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
        
        </Col> */}
        {/*  4KWIP +OS */}
         <Col xl={6} lg={6} md={6} sm={12} className="p-1">
        <CustomCard
            title="4K WIP+OS"
            tooltipMessage="Detailed information about this 4K WIP+OS"
          >
            <LineGraph
              data={processChartData( allSections?.ProductionConsumables, month, "target", "actual")}
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
