import React, { useState, useEffect } from 'react';
// import { Chart } from 'react-google-charts';
// import { Card, CardBody, CardTitle } from "reactstrap";
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
  console.log("props.planByMonthData",props.planByMonthData)
  const LineData = {

    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'AOP', // Add a label for the second dataset
      data: [36550, 34866, 34670, 39860, 50500, 62780, 67600, 46500, 65000, 79200, 42910, 47100],
      borderColor: '#5eba00',
      backgroundColor: '#5eba00', // Add fill color (used in legends)
      borderWidth: 3,
      fill: false,
      lineTension: 0.1
    },
    {
      label: 'Rolling Plan', // Add a label for the second dataset
      data: [0, 0, 0, 0, 0, 0, 0, 0, 2600, 1000, 498, 340],
      borderColor: '#FFEB3B',
      backgroundColor: '#FFEB3B', // Add fill color (used in legends)
      borderWidth: 3,
      fill: false,
      lineTension: 0.1
    },
    {
      label: 'Actual Sales', // Add a label for the second dataset
      data: [43189, 43189, 43189, 43189, 43189, 43189, 43189, 43189, 0, 0, 0, 0],
      borderColor: '#D500F9',
      backgroundColor: '#D500F9', // Add fill color (used in legends)
      borderWidth: 3,
      fill: false,
      lineTension: 0.1
    }]
  }
  function LineChart() {
    return (
      <div className="e-table px-5 pb-5">
        <Line options={lineOptions} data={LineData} height='350px' />
      </div>
    )
  };
  
  return ( <></>
    // <Card >
    //   <CardTitle 
    //     tag="h6" 
    //     className="border-bottom p-1 mb-0" 
    //     style={{ padding: '0px', margin:'10px' }}> 
    //     Plans By Month
    //   </CardTitle>
    //   <CardBody style={{ padding: '0px', margin: '0px' }}>
    //     <div style={{ margin: '0', padding: '0' }}>
    //       <Chart
    //         chartType="LineChart"
    //         width="100%"
    //         height="400px" 
    //         data={data}
    //         options={options}
    //         style={{ margin: '0', padding: '0' }} 
    //       />
    //     </div>
    //   </CardBody>
    // </Card>
  );
}

const mapStatetoprops = (state) => {
  return {
    planByMonthData: state.planByMonthData,
  };
};

const mapDispatchtoprops = (dispatch) => {
  return {
    getPlanByMonthData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'planByMonth')),
  };
};

export default connect(mapStatetoprops, mapDispatchtoprops)(PlanByMonthComponent);
