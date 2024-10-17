import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import { Card, CardBody, CardTitle } from "reactstrap";
import { connect } from 'react-redux';
import { GET_PLAN_BY_MONTH } from "../../endPointConfig";
import { callCommonGetAPI } from '../../../store/action/action';

export const options = {
  colors: ["#FF5733", "#008B8B", "#FFD700"],
  hAxis: {
    title: "Months", 
    minValue: 0,
    textStyle: {
      fontSize: 14, 
      color: '#000000'
    },
    titleTextStyle: {
      fontSize: 14,
      bold: true,
      color: '#000000'
    }
  },
  vAxis: {},
  legend: {
    position: 'right',
  },
};

function PlanByMonthComponent(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    props.getPlanByMonthData(GET_PLAN_BY_MONTH);
    return () => { reset(); };
  }, []);

  useEffect(() => {
    if (props.planByMonthData && Object.keys(props.planByMonthData).length > 0) {
      setData(props.planByMonthData.data);
    }
  }, [props.planByMonthData]);

  const reset = () => {
    setData([]);
  };

  return (
    <Card >
      <CardTitle 
        tag="h6" 
        className="border-bottom p-1 mb-0" 
        style={{ padding: '0px', margin:'10px' }}> 
        Plans By Month
      </CardTitle>
      <CardBody style={{ padding: '0px', margin: '0px' }}>
        <div style={{ margin: '0', padding: '0' }}>
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px" 
            data={data}
            options={options}
            style={{ margin: '0', padding: '0' }} 
          />
        </div>
      </CardBody>
    </Card>
  );
}

const mapStatetoprops = (state) => {
  return {
    planByMonthData: state.product.planByMonthData,
  };
};

const mapDispatchtoprops = (dispatch) => {
  return {
    getPlanByMonthData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'planByMonth')),
  };
};

export default connect(mapStatetoprops, mapDispatchtoprops)(PlanByMonthComponent);
