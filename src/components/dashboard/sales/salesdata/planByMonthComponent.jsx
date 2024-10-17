import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'
// import { GET_PLAN_BY_MONTH } from "../../endPointConfig"
// import { callCommonGetAPI } from '../../../store/action/action'
// export const options = {
//     title: "Plan By Month",
//     subtitle: "Sales, Expenses, and Profit: 2014-2017",
//     colors: ["#FF5733", "#008B8B", "#FFD700"],
//     hAxis: {
//         title: "Months", // X-axis caption
//         minValue: 0,
//     },
//     vAxis: {
//       //  title: "Values", // You can add this to label the Y-axis
//     },
//     legend: {
//         position: 'right', // This hides the legend
//     },
// };
 const LineData = {

    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      data: [14, 12, 34, 25, 44, 36, 35, 25, 30, 32, 20, 25],
      borderColor: '#467fcf',
      borderWidth: 1,
      fill: false,
      lineTension: 0.3
    }, {
      data: [35, 30, 45, 35, 55, 40, 15, 20, 25, 55, 50, 45],
      borderColor: '#3ec7e8',
      borderWidth: 1,
      fill: false,
      lineTension: 0.3
    }]
  }
 const LineOption = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          display: false
        }
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
          fontColor: 'rgba(180, 183, 197, 0.4)'
        },
        title: {
          display: false,
          text: 'Months'
        },
        grid: {
          display: true,
          color: 'rgba(180, 183, 197, 0.4)',
          drawBorder: false
        }
      },
      y: {
        ticks: {
          beginAtZero: true,
          fontSize: 10,
          fontColor: 'rgba(180, 183, 197, 0.4)',
          stepSize: 10,
          min: 0,
          max: 80
        },
        title: {
          display: false,
          text: 'Revenue'
        },
        grid: {
          display: true,
          color: 'rgba(180, 183, 197, 0.4)',
          drawBorder: false
        }
      }
    }
  }


function PlanByMonthComponent() {
    const [data, setData] = useState(LineData)

    useEffect(() => {
        //props.getPlanByMonthData(GET_PLAN_BY_MONTH)
        return () => { reset() }
    }, [])

    // useEffect(() => {
    //     if (props.planByMonthData && Object.keys(props.planByMonthData).length > 0) {
    //         setData(props.planByMonthData.data)
    //     }
    // }, [props.planByMonthData])

    const reset = () => {
        setData([])
    }

    return ( 
        <Line options={LineOption} data={data} height='300px' />
        // <Chart
        //     chartType="LineChart"
        //     width="100%"
        //     height="620px"
        //     data={data}
        //     options={options}
        // />
    )
}

// const mapStatetoprops = (state) => {
//     return {
//         planByMonthData: state.product.planByMonthData,
//     }
// }

// const mapDispatchtoprops = (dispatch) => {
//     return {
//         getPlanByMonthData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'planByMonth'))
//     }
// }
//export default connect(mapStatetoprops, mapDispatchtoprops)(PlanByMonthComponent)

export default PlanByMonthComponent
