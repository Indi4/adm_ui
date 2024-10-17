import React, { useState, useEffect } from 'react'
import { Chart } from 'react-google-charts'
import { Card, CardBody, CardTitle } from "reactstrap";
import { connect } from 'react-redux'
import { GET_CHANGES_MADEBY_CODE } from "../../endPointConfig"
import { callCommonGetAPI } from '../../../store/action/action'
import '../../../layouts/styles/Common.css'

export const options = {
    chart: {
       // title: "% Demand changes as per FG Code",
    },
    colors: ["#8B008B"], // Custom color for bars
    hAxis: {
        title: "Value", // X-axis title
        minValue: 0,
    },
    vAxis: {
        title: "Company", // Y-axis title
        textPosition: 'out', // Position of the text
        textStyle: {
            fontSize: 12, // Adjust font size for more spacing
        },
        slantedText: true, // Slant text if too long
        slantedTextAngle: 30, // Angle for slanted text
    },
    bar: {
        groupWidth: "40%", // Reduce the width of the bars
    },
    legend: {
        position: 'none', // This hides the legend
    },
}

function ChangeMadeByProductCode(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        props.getChangesMadeByProductCodeData(GET_CHANGES_MADEBY_CODE)
        return () => { reset() }
    }, [])

    useEffect(() => {
        if (props.changesMadeByProductCodeData && Object.keys(props.changesMadeByProductCodeData).length > 0) {
            setData(props.changesMadeByProductCodeData.data)
        }
    }, [props.changesMadeByProductCodeData])

    const reset = () => {
        setData([])
    }

    return (
        <Card >
            <CardTitle
                tag="h6"
                className="border-bottom p-2 mb-3" 
                style={{ margin: '10px' }}> 
                % Demand changes as per FG Code
            </CardTitle>
            <CardBody style={{ padding: '10px' }}> 
                <div style={{ margin: '0', padding: '0 10px' }}> 
                    <Chart
                        chartType="Bar"
                        width="100%"
                        height="350px"
                        data={data}
                        options={options}
                    />
                </div>
            </CardBody>
        </Card>
    )
}

const mapStatetoprops = (state) => {
    return {
        changesMadeByProductCodeData: state.product.changesMadeByProductCodeData,
    }
}

const mapDispatchtoprops = (dispatch) => {
    return {
        getChangesMadeByProductCodeData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'changesMadeByProductCode'))
    }
}

export default connect(mapStatetoprops, mapDispatchtoprops)(ChangeMadeByProductCode)
