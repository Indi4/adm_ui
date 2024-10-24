import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Bar } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend, registerables } from 'chart.js'
import { GET_CHANGES_MADEBY_CODE } from "../../endPointConfig"
import { callCommonGetAPI } from '../../../store/action/action'
import '../../../layouts/styles/Common.css'
Chart.register(...registerables, ArcElement, Tooltip, Legend)

function getGradient(ctx) {
    const gradient = ctx.createLinearGradient(0, 0, 1, 250)
    gradient.addColorStop(0, '#467fcf')
    gradient.addColorStop(1, '#5eba00')
    return gradient
}
function ChangeMadeByProductCode(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        props.getChangesMadeByProductCodeData(GET_CHANGES_MADEBY_CODE)
        return () => { reset() }
    }, [])

    useEffect(() => {
        if (props.changesMadeByProductCodeData && Object.keys(props.changesMadeByProductCodeData).length > 0) {
            setData(props.changesMadeByProductCodeData)
        }
    }, [props.changesMadeByProductCodeData])

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
                labels: {
                    display: false
                }
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
                    text: 'FG Code', // Set the title text
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
        <Bar options={GradientOption} data={GradientData} height='300px' />
    )
}

const mapStatetoprops = (state) => {
    return {
        changesMadeByProductCodeData: state.commonReducer.changesMadeByProductCodeData,
    }
}

const mapDispatchtoprops = (dispatch) => {
    return {
        getChangesMadeByProductCodeData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'changesMadeByProductCode'))
    }
}

export default connect(mapStatetoprops, mapDispatchtoprops)(ChangeMadeByProductCode)
