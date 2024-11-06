import React, { useEffect, useState, Fragment } from "react";
import { connect } from 'react-redux'
import { CircularProgress } from "@mui/material";
import { Card, Button, Col, Row } from 'react-bootstrap'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import { DataGrid } from "@mui/x-data-grid";
import FilterComponent from "../../commonComponent/filter";
import { initialState, breadcrumbs } from "./config"
import { CDC_GET_TOTALNETOFF } from "../../../endPointConfig"
import { generateDynamicColumns, currentMonth } from "../../../commonConfig"
import { callCommonGetAPI, callCommonRefreshProps } from '../../../../store/action/action'
import TotalRecords from '../../../../commonComponent/totalRecords'
import apiService from "../../../../services/apiService";
import { v4 as uuidv4 } from 'uuid';
import { saveAs } from 'file-saver';
import { ToastContainer, toast } from "react-toastify";
import LoaderComponent from "../../../../commonComponent/LoaderComponent";

function HomeComponent(props) {
    const [state, setState] = useState({ ...initialState });
    const { getTotalNetOffData, totalNetOffData } = props
    const [endPoint, setEndpoint] = useState(CDC_GET_TOTALNETOFF)
    const [paginationModel, setPaginationModel] = useState({ pageSize: 5, page: 0 });
    const [totalPage, setTotalPage] = useState(0);
    const [loading, setLoading] = useState(false);  // New loading state for the whole component


    useEffect(() => {
        setLoading(true);
        getTotalNetOffData(`${endPoint}search=&demand_month=${currentMonth}`)
        return () => { reset() };
    }, [])

    // useEffect(() => {
    //     if (!!state.paginationModel && Object.keys(state.paginationModel).length > 0) {
    //         props.refreshProps("totalNetOffData");
    //         getTotalNetOffData(`${endPoint}demand_month=${state.demand_month}&page=${state.paginationModel.page + 1}`)
    //     }
    // }, [state.paginationModel]);

    useEffect(() => {
        if (totalNetOffData && Object.keys(totalNetOffData).length > 0) {
            setState({
                ...state,
                totalNetOffList: totalNetOffData.data && totalNetOffData.data.length > 0 ? totalNetOffData.data : [],
                //  totalPage: totalNetOffData.count
            })
            setLoading(false);
        }
    }, [totalNetOffData]);

    useEffect(() => {
        if (state.totalNetOffList && Object.keys(state.totalNetOffList).length > 0) {
            setState({
                ...state,
                columns: generateDynamicColumns(state.totalNetOffList && state.totalNetOffList.length > 0 ? state.totalNetOffList : [])
            })
        }
    }, [state.totalNetOffList]);

    const handleSearchData = (fgCodeData, fgCode) => {
        if (fgCodeData && Object.keys(fgCodeData).length > 0) {
            setState({
                ...state,
                demand_month: '',
                fgCode: fgCode,
                totalNetOffList: (fgCodeData.data)
            })
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
        if (name === "demand_month") {
            state.fgCode === '' ? getTotalNetOffData(`${endPoint}search=&demand_month=${value}`) :
                getTotalNetOffData(`${endPoint}search=${state.fgCode}&demand_month=${value}`)
        }
    }

    const reset = () => {
        setState(initialState);
    };

    const handlePaginationChange = (newPagination) => {
        setPaginationModel(newPagination);
        getTotalNetOffData(`${endPoint}?page=${newPagination.page + 1}`);
    };
    return (
        <Fragment>
            <ToastContainer />
            <Pageheader items={breadcrumbs} />
            <Row>
                <Col xl={12}>
                    <Card>
                        <Card.Header className=" d-flex justify-content-between align-items-center">
                            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "7px 5px 0 5px" }}>
                                <Card.Title style={{ flexGrow: 1 }}>
                                    <Row>
                                        <Col xl={6}>
                                            <FilterComponent
                                                handleSearchData={handleSearchData}
                                                callAPI={CDC_GET_TOTALNETOFF}
                                                filterType='fgCode'
                                            />
                                        </Col>
                                    </Row>
                                </Card.Title>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="card-area">
                                <Col md="12">
                                    <TotalRecords color='outline-success' length={state.totalNetOffList && state.totalNetOffList.length} />
                                    <div style={{ marginTop: "15px", display: 'grid', height: 460, overflowY: 'auto' }}>
                                        {loading ? (
                                            <LoaderComponent />
                                        ) : (
                                            state.totalNetOffList && state.totalNetOffList.length > 0 ? (
                                                <DataGrid
                                                    rows={state.totalNetOffList || []}
                                                    pagination
                                                    paginationMode="server"
                                                    rowCount={totalPage}  // Ensure the total number of records is provided
                                                    pageSize={paginationModel.pageSize}
                                                    page={paginationModel.page}
                                                    onPageChange={(newPage) => handlePaginationChange({ ...paginationModel, page: newPage })}
                                                    onPageSizeChange={(newPageSize) => handlePaginationChange({ ...paginationModel, pageSize: newPageSize })}
                                                    columns={state.columns}
                                                    components={{
                                                        Footer: () => <CustomFooter total={state.totalNetOffList.length} />,
                                                    }}
                                                    getRowId={(row) => row.fg_code}
                                                    hideFooterPagination
                                                    sx={{
                                                        '& .MuiDataGrid-root': {
                                                            border: 'none',
                                                        },
                                                        '& .MuiDataGrid-columnHeaders': {
                                                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                                                            color: "rgba(0, 0, 0, 0.87)",
                                                            fontSize: "15px",
                                                            borderBottom: "2px solid rgba(60, 90, 120, 0.5)",
                                                            backdropFilter: "blur(10px)",
                                                            boxShadow: "0 14px 8px rgba(0, 0, 0, 0.1)",
                                                        },
                                                        '& .MuiDataGrid-cell': {
                                                            borderBottom: '1px solid #e0e0e0',
                                                        },
                                                        '& .footer-row': {
                                                            fontWeight: 'bold',
                                                            backgroundColor: '#f7f7f7',
                                                            borderTop: '2px solid #4a6fa1',
                                                        },
                                                        '& .MuiDataGrid-row:hover': {
                                                            backgroundColor: '#e0f7fa',
                                                        },
                                                        '& .MuiDataGrid-selectedRowCount': {
                                                            color: '#4a6fa1',
                                                        },
                                                        "& .MuiDataGrid-virtualScroller": {
                                                            "&::-webkit-scrollbar": {
                                                                width: "10px",
                                                                height: "10px",
                                                            },
                                                            "&::-webkit-scrollbar-thumb": {
                                                                backgroundColor: "darkgrey", // Set scrollbar color to dark grey
                                                                borderRadius: "10px",
                                                            },
                                                            "&::-webkit-scrollbar-thumb:hover": {
                                                                backgroundColor: "#8c8c8c", // Darker grey on hover
                                                            },
                                                        },
                                                        "& .MuiDataGrid-root": {
                                                            "&::-webkit-scrollbar": {
                                                                height: "10px",
                                                            },
                                                            "&::-webkit-scrollbar-thumb": {
                                                                backgroundColor: "darkgrey", // Set scrollbar color to dark grey
                                                                borderRadius: "10px",
                                                            },
                                                            "&::-webkit-scrollbar-thumb:hover": {
                                                                backgroundColor: "#8c8c8c", // Darker grey on hover
                                                            },
                                                        },
                                                        '& .MuiDataGrid-toolbarContainer': {
                                                            backgroundColor: '#f0f0f0',
                                                            borderBottom: '1px solid #d3d3d3',
                                                        },
                                                    }}
                                                />

                                            ) : (
                                                "No Data Found!"
                                            )
                                        )}
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row >
        </Fragment >
    )
} const mapStatetoprops = (state) => {
    return {
        totalNetOffData: state.commonReducer.totalNetOffData,
    }
}
const mapDispatchtoprops = (dispatch) => {
    return {
        getTotalNetOffData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'totalNetOff')),
        refreshProps: (title) => dispatch(callCommonRefreshProps(title)),
    }
}
export default connect(mapStatetoprops, mapDispatchtoprops)(HomeComponent)
