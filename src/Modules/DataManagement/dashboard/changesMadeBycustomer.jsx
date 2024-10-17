import React, { useState, useEffect } from 'react'
import { Chart } from 'react-google-charts'
import { Card, CardBody, CardTitle } from "reactstrap";
import { connect } from 'react-redux'
import { GET_CHANGES_MADEBY_CUSTOMER } from "../../endPointConfig"
import { callCommonGetAPI } from '../../../store/action/action'
import '../../../layouts/styles/Common.css'

export const options = {
    chart: {
        //title: "% Demand changes as per customer name", // Title nested inside 'chart'
    },
    colors: ["#4285F4"],
    axes: {
        x: {
            0: {
                title: "Value", // The vertical axis (x in Material Bar chart)
                minValue: 0,
            },
        },
        y: {
            0: {
                title: "Company", // The horizontal axis (y in Material Bar chart)
                textStyle: {
                    fontSize: 12,
                },
                slantedText: true, // Enable slanted text
                slantedTextAngle: 30, // Slant the text by 30 degrees
            },
        },
    },
    bar: {
        groupWidth: "40%", // Adjust bar width
    },
    legend: {
        position: 'none', // Hide the legend
    },
};

function ChangesMadeBycustomer(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        props.getChangesMadeByCustomerNameData(GET_CHANGES_MADEBY_CUSTOMER)
        return () => { reset() }
    }, [])

    useEffect(() => {
        if (props.changesMadeByCustomerNameData && Object.keys(props.changesMadeByCustomerNameData).length > 0) {
            setData(props.changesMadeByCustomerNameData.data)
        }
    }, [props.changesMadeByCustomerNameData])

    const reset = () => {
        setData([])
    }
    return (
        <Card >
            <CardTitle
                tag="h6"
                className="border-bottom p-2 mb-3"
                style={{ margin: '10px' }}>
                % Demand changes as per customer name
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
        changesMadeByCustomerNameData: state.product.changesMadeByCustomerNameData,
    }
}

const mapDispatchtoprops = (dispatch) => {
    return {
        getChangesMadeByCustomerNameData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'changesMadeByCustomerName'))
    }
}
export default connect(mapStatetoprops, mapDispatchtoprops)(ChangesMadeBycustomer)
