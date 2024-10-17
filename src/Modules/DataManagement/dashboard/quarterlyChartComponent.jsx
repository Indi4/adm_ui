import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Card, CardBody, CardTitle } from "reactstrap";
import { connect } from 'react-redux'
import { GET_QUARTERLY_DATA } from "../../endPointConfig"
import { quarterlyColumns } from "./config"
import { callCommonGetAPI } from '../../../store/action/action'
import { v4 as uuidv4 } from 'uuid';

function QuarterlyChartComponent(props) {
    const [quarterlyList, setQuarterlyList] = useState([])

    useEffect(() => {
        props.getQuarterlyData(GET_QUARTERLY_DATA)
        return () => { reset() }
    }, [])

    useEffect(() => {
        if (props.quarterlyData && Object.keys(props.quarterlyData).length > 0) {
            const updatedData = props.quarterlyData.data.map((item) => ({
                ...item,
                id: uuidv4(), // Generate a unique ID for each row
            }));
            setQuarterlyList(updatedData)
        }
    }, [props.quarterlyData])

    const reset = () => {
        setQuarterlyList([])
    }

    return (
        <Card>
            <CardBody>
                {/* <CardTitle tag="h5">Sales Summary</CardTitle> */}
                <div style={{ height: 400, width: '100%', height: 400, overflowY: 'auto' }}>
                    <DataGrid
                        rows={quarterlyList}
                        columns={quarterlyColumns}
                        getRowId={(row) => row.id}
                        hideFooterPagination
                        sx={{
                            "& .MuiDataGrid-columnHeaderTitle": {
                                whiteSpace: "normal",
                                lineHeight: "normal",
                            },
                            "& .MuiDataGrid-columnHeader": {
                                height: "unset !important",
                            },
                            "& .MuiDataGrid-columnHeaders": {
                                maxHeight: "300px !important",
                            },
                            "& .MuiDataGrid-cell": {
                                whiteSpace: "normal !important",
                                wordWrap: "break-word !important",
                            },
                        }}
                    />
                </div>
            </CardBody>
        </Card>
    )
}

const mapStatetoprops = (state) => {
    return {
        quarterlyData: state.product.quarterlyData,
    }
}

const mapDispatchtoprops = (dispatch) => {
    return {
        getQuarterlyData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'quarterly'))
    }
}
export default connect(mapStatetoprops, mapDispatchtoprops)(QuarterlyChartComponent)
