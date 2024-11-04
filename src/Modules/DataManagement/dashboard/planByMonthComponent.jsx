import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux';
import { Chart, ArcElement, Tooltip, Legend, registerables } from 'chart.js'
import { GET_PLAN_BY_MONTH } from "../../endPointConfig";
import { callCommonGetAPI } from '../../../store/action/action';
Chart.register(...registerables, ArcElement, Tooltip, Legend)

//   colors: ["#FF5733", "#008B8B", "#FFD700"],
//   hAxis: {
//     title: "Months", 
//     minValue: 0,
//     textStyle: {
//       fontSize: 14, 
//       color: '#000000'
//     },
//     titleTextStyle: {
//       fontSize: 14,
//       bold: true,
//       color: '#000000'
//     }
//   },
//   vAxis: {},
//   legend: {
//     position: 'right',
//   },
// };
//  LineChart
export const getLineOptions = (isDarkMode) => ({
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: true,
      labels: {
        display: true,
        font: {
          size: 13
        },
        color: isDarkMode ? '#ffffff' : '#495057', // Adjust based on dark mode
        boxHeight: 5,
        boxWidth: 5,
        padding: 15
      },
      position: 'top'
    },
    tooltip: {
      enabled: true
    }
  },
  scales: {
    x: {
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: isDarkMode ? '#ffffff' : 'rgba(180, 183, 197, 0.4)', // Adjust based on dark mode
        padding: 10
      },
      title: {
        display: true,
        text: 'Month',
        font: {
          size: 14
        },
        color: isDarkMode ? '#ffffff' : '#495057' // Adjust based on dark mode
      },
      grid: {
        display: false,
       // color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    },
    y: {
      title: {
        display: true,
        text: 'Plans'
      },
      grid: {
        display: false,
       // color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(180, 183, 197, 0.4)',
        drawBorder: false
      }
    }
  }
});
// const isDarkMode = document.body.classList.contains('dark-mode'); // Example for checking dark mode
// console.log("isDarkMode",isDarkMode)
let isDarkMode = sessionStorage.getItem("darkMode",true)
console.log("isDarkMode",isDarkMode)
//const lineOptions = getLineOptions(isDarkMode); // Pass the current theme status
const lineOptions = getLineOptions(false); // Pass the current theme status

function PlanByMonthComponent(props) {
    const [data, setData] = useState([]);
    const [labels, setLabels] = useState([]);
  useEffect(() => {
    props.getPlanByMonthData(GET_PLAN_BY_MONTH);
    return () => { reset(); };
  }, []);

  useEffect(() => {
    if (props.planByMonthData && Object.keys(props.planByMonthData).length > 0) {
      setData(props.planByMonthData.datasets);
      setLabels(props.planByMonthData.labels)
    }
  }, [props.planByMonthData]);

  const reset = () => {
    setData([]);
  };
  
  const LineData = {
    labels: labels && labels.length> 0 && labels,
    datasets: [{
      label: 'AOP', // Add a label for the second dataset
      data: data && data.length> 0 && data[0].data,
      borderColor: '#5eba00',
      backgroundColor: '#5eba00', // Add fill color (used in legends)
      borderWidth: 3,
      fill: false,
      lineTension: 0.1
    },
    {
      label: 'Dispatch Plan', // Add a label for the second dataset
      data: data && data.length> 0 && data[1].data,
      borderColor: '#FFEB3B',
      backgroundColor: '#FFEB3B', // Add fill color (used in legends)
      borderWidth: 3,
      fill: false,
      lineTension: 0.1
    },
    {
      label: 'Actual Sales', // Add a label for the second dataset
      data: data && data.length> 0 && data[2].data,
      borderColor: '#D500F9',
      backgroundColor: '#D500F9', // Add fill color (used in legends)
      borderWidth: 3,
      fill: false,
      lineTension: 0.1
    }]
  }
  
  return (
    <div className="e-table px-5 pb-5">
      <Line options={lineOptions} data={LineData} height='350px' />
    </div>
  );
}

const mapStatetoprops = (state) => {console.log("state",state)
  return {
    planByMonthData: state.commonReducer.planByMonthData,
  };
};

const mapDispatchtoprops = (dispatch) => {
  return {
    getPlanByMonthData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'planByMonth')),
  };
};

export default connect(mapStatetoprops, mapDispatchtoprops)(PlanByMonthComponent);
