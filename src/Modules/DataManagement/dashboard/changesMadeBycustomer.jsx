import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Bar } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend, registerables } from 'chart.js'
import { GET_CHANGES_MADEBY_CUSTOMER } from "../../endPointConfig"
import { callCommonGetAPI } from '../../../store/action/action'
import '../../../layouts/styles/Common.css'
import LoaderComponent from "../../../commonComponent/LoaderComponent";
Chart.register(...registerables, ArcElement, Tooltip, Legend)

//     chart: {
//         //title: "% Demand changes as per customer name", // Title nested inside 'chart'
//     },
//     colors: ["#4285F4"],
//     axes: {
//         x: {
//             0: {
//                 title: "Value", // The vertical axis (x in Material Bar chart)
//                 minValue: 0,
//             },
//         },
//         y: {
//             0: {
//                 title: "Company", // The horizontal axis (y in Material Bar chart)
//                 textStyle: {
//                     fontSize: 12,
//                 },
//                 slantedText: true, // Enable slanted text
//                 slantedTextAngle: 30, // Slant the text by 30 degrees
//             },
//         },
//     },
//     bar: {
//         groupWidth: "40%", // Adjust bar width
//     },
//     legend: {
//         position: 'none', // Hide the legend
//     },
// };
function getGradient(ctx) {
    const gradient = ctx.createLinearGradient(0, 0, 1, 250)
    gradient.addColorStop(0, '#6A1B9A')
    gradient.addColorStop(1, '#2979FF')
    return gradient
}

function ChangesMadeBycustomer(props) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        props.getChangesMadeByCustomerNameData(GET_CHANGES_MADEBY_CUSTOMER)
        return () => { reset() }
    }, [])

    useEffect(() => {
        if (props.changesMadeByCustomerNameData && Object.keys(props.changesMadeByCustomerNameData).length > 0) {
            setData(props.changesMadeByCustomerNameData)
            setLoading(false);
        }
    }, [props.changesMadeByCustomerNameData])

    const reset = () => {
        setData([])
    }

    const GradientOption = {
        maintainAspectRatio: false,
        responsive: true,
        barPercentage: 0.5,
        plugins: {
            legend: {
                display: false,
                // labels: {
                //   display: false
                // }
            },
            tooltip: {
                enabled: true
            }
        },
        hover: { mode: null },
        scales: {
            x: {
                // ticks: {
                //   beginAtZero: true,
                //   fontSize: 10,
                //   fontColor: 'rgba(180, 183, 197, 0.4)'
                // },
                title: {
                    display: true, // Enable the display of the title
                    text: 'Customer Name', // Set the title text
                    font: {
                        size: 14 // Adjust the font size for the axis title
                    },
                    color: '#495057', // Set the color for the title
                    padding: { top: 10 } // Add space between the title and the x-axis
                },
                grid: {
                    display: false,
                    color: 'rgba(180, 183, 197, 0.4)',
                    drawBorder: false
                }
            },
            y: {
                // ticks: {
                //   beginAtZero: true,
                //   fontSize: 10,
                //   fontColor: 'rgba(180, 183, 197, 0.4)',
                //   stepSize: 10,
                //   min: 0,
                //   max: 80
                // },
                title: {
                    display: true,
                    text: '% Changes'
                },
                grid: {
                    display: false,
                    color: 'rgba(180, 183, 197, 0.4)',
                    drawBorder: false
                }
            }
        }
    };

    const GradientData = {
        labels: data && Object.keys(data).length > 0 && data.labels,
        datasets: [
            {
                label: '#',
                data: data && Object.keys(data).length > 0 && data.per_data,
                backgroundColor: function (context) {
                    const chart = context.chart
                    const { ctx, chartArea } = chart
                    if (!chartArea) {
                        // This case happens on initial chart load
                        return
                    }
                    return getGradient(ctx, chartArea)
                }
            }
        ]
    }

    return (
        <React.Fragment>
            {loading ? (
                <LoaderComponent spinner={1} />
            ) :
                <Bar options={GradientOption} data={GradientData} height='300px' />
            }
        </React.Fragment>
    )
}
const mapStatetoprops = (state) => {
    return {
        changesMadeByCustomerNameData: state.commonReducer.changesMadeByCustomerNameData,
    }
}

const mapDispatchtoprops = (dispatch) => {
    return {
        getChangesMadeByCustomerNameData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'changesMadeByCustomerName'))
    }
}
export default connect(mapStatetoprops, mapDispatchtoprops)(ChangesMadeBycustomer)
