import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../commonComponents/Filter";
import { fetchPPCData } from "../../store/ppc/PPCSectionSlice";
import CustomCard from "../shareGraph/CustomCard";
import LineGraph from "../shareGraph/LineGraph";
import { processChartData } from "../shareGraph/dataModifierHelper";
import NoInternetPage from "../shareGraph/NoInternetPage";
import useOnlineStatus from "../shareGraph/useOnlineStatus";
const HomeComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState("");
  const dispatch = useDispatch();
  const {
    DeliveryPerformanceDOM,
    InvoiceReport,
    NoOfTrips,
    DomesticFreight,
    DomesticSaleInLakh,
    ExportSaleInLakh,
    TotalSaleInLakh,
    GRNReport,
  } = useSelector((state) => state?.ppc);
  useEffect(() => {
    const reportTypes = [
      "DeliveryPerformanceDOM",
      "InvoiceReport",
      "NoOfTrips",
      "DomesticFreight",
      "DomesticSaleInLakh",
      "ExportSaleInLakh",
      "TotalSaleInLakh",
      "GRNReport",
    ];
    reportTypes.forEach((type) => {
      dispatch(fetchPPCData({ report_type: type, year: year, month: month }));
    });
  }, [dispatch, year, month]);

  const getData = (selectedYear, selectedMonth) => {
    setYear(selectedYear);
    setMonth(selectedMonth);
  };
  return (
    <div className="container-fluid p-1" style={{ backgroundColor: "#2F598C" }}>
      <Filter getData={getData} />
      <Row className="g-0">
        {/* delivery performance */}
          <Col xl={6} lg={6} md={6} sm={12} className="p-1">
          <CustomCard
            title="Delivery Performance DOM (Sale Qyt)"
            tooltipMessage="Delivery Performance DOM (Sale Qyt)"
          >
            <LineGraph
              data={processChartData(
                DeliveryPerformanceDOM,
                month,
                "target",
                "actual"
              )}
              xAxisKey="target"
              yAxisKey="actual"
            />
          </CustomCard>
        </Col>

        {/* EXp Performance */}
           <Col xl={6} lg={6} md={6} sm={12} className="p-1">
           
          <CustomCard
            title="Exp Performance DOM (Sale Qyt)"
            tooltipMessage="Exp Performance DOM (Sale Qyt)"
          >
            <LineGraph
              data={processChartData(
                DomesticSaleInLakh,
                month,
                "target",
                "actual"
              )}
              xAxisKey="target"
              yAxisKey="actual"
              yAxisColor="#FF8632"
            />
          </CustomCard>
        </Col>
        {/* overall performance */}
        <Col xl={6} lg={6} md={6} sm={12} className="p-1">
          <CustomCard
            title="OverAll Performance"
            tooltipMessage="OverAll Performance"
          >
            <LineGraph
              data={processChartData(
                DomesticSaleInLakh,
                month,
                "target",
                "actual"
              )}
              xAxisKey="target"
              yAxisKey="actual"
            />
          </CustomCard>
        </Col>
        {/* InviceReports */}
         <Col xl={6} lg={6} md={6} sm={12} className="p-1">
          <CustomCard
            title="Invoice Reports"
            tooltipMessage="Detailed information about this  Bending OEE"
          >
            <LineGraph
              data={processChartData(InvoiceReport, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
              yAxisColor="#FF8632"
            />
          </CustomCard>
        </Col>

        {/* No Of Trips */}
         <Col xl={6} lg={6} md={6} sm={12} className="p-1">
          <CustomCard title=" No of Trips" tooltipMessage=" No of Trips">
            <LineGraph
              data={processChartData(
                TotalSaleInLakh,
                month,
                "target",
                "actual"
              )}
              xAxisKey="target"
              yAxisKey="actual"
              yAxisColor="#FF8632"
            />
          </CustomCard>
        </Col>
        {/* Domestic Freight */}
      {/* <Col lg={6} md={6} sm={12} xl={6}>
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
        </Col> */}
        {/* Domestic Sale */}
          <Col xl={6} lg={6} md={6} sm={12} className="p-1">
          <CustomCard
            title=" Domestic Sale (in lakh)"
            tooltipMessage="Detailed iDomesticSaleInLakh"
          >
            <LineGraph
              data={processChartData(
                DomesticSaleInLakh,
                month,
                "target",
                "actual"
              )}
              xAxisKey="target"
              yAxisKey="actual"
              yAxisColor="#FF8632"
            />
          </CustomCard>
        </Col>
        {/* Export Sale */}
         <Col xl={6} lg={6} md={6} sm={12} className="p-1">
          <CustomCard
            title="Export Sale"
            tooltipMessage="Detailed  Export Sale"
          >
            <LineGraph
              data={processChartData(
                ExportSaleInLakh,
                month,
                "target",
                "actual"
              )}
              xAxisKey="target"
              yAxisKey="actual"
            />
          </CustomCard>
        </Col>
        {/*  Total Sale */}
         <Col xl={6} lg={6} md={6} sm={12} className="p-1">
          <CustomCard
            title=" Total Sale (in lakh)"
            tooltipMessage="D Total Sale (in lakh)"
          >
            <LineGraph
              data={processChartData(NoOfTrips, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
              yAxisColor="#FF8632"
            />
          </CustomCard>
        </Col>
        {/* Grn Report */}
          <Col xl={12} lg={12} md={12} sm={12} className="p-1">
          <CustomCard title=" GRN Reports" tooltipMessage="Detailed GRNReport">
            <LineGraph
              data={processChartData(GRNReport, month, "target", "actual")}
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
