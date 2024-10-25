import React, { useEffect, useState, Fragment } from "react";
import { connect } from 'react-redux'
import { Alert, Card, Button, Col, Collapse, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import { DataGrid } from "@mui/x-data-grid";
import ModalPopUpComponent from '../../../../commonComponent/modalPopUpComponent'
import FilterComponent from "../../commonComponent/filter";
import { actualDispatchColumns, initialState, breadcrumbs } from "./config"
import { CDC_SAVE_ACTUALDISPATCH, CDC_GET_ACTUALDISPATCH } from "../../../endPointConfig"
import { callCommonGetAPI } from '../../../../store/action/action'
import TotalRecords from '../../../../commonComponent/totalRecords'
import { toast } from "react-toastify";

function HomeComponent(props) {
    const [state, setState] = useState({ ...initialState })
    const [endPoint] = useState(CDC_GET_ACTUALDISPATCH)
    const [actualDispatchList, setActualDispatchList] = useState([])
    const [paginationModel, setPaginationModel] = useState({ pageSize: 50, page: 0 });
    const [totalPage, setTotalPage] = useState(0)
    const [columns, setColumns] = useState([])
    const [customerNameorCode, setCustomerNameorCode] = useState("")
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        props.getActualDispatchData(endPoint)
        return () => { reset() }
    }, [])

    useEffect(() => {
        if (props.actualDispatchData && Object.keys(props.actualDispatchData).length > 0) {
            if (props.actualDispatchData.data && props.actualDispatchData.data.length > 0) {
                setActualDispatchList(props.actualDispatchData.data)
                setTotalPage(props.actualDispatchData.count || props.actualDispatchData.data.length)
            }
        }
    }, [props.actualDispatchData])

    const handleOpenModal = (openModal, success, message = "") => {
        setState({ openModal: openModal, success })
        if (!!success && message !== "") {
            toast.success(message)
            props.getActualDispatchData(endPoint)
        } else if (!success && message !== "") {
            toast.error(message)
        }
    }

    const handlePaginationChange = (newPagination) => {
        setPaginationModel(newPagination);
        props.getActualDispatchData(`${endPoint}?page=${newPagination.page + 1}`);
    };


    const handleSearchData = (actualDispatchData, data, customerNameCode) => {
        setCustomerNameorCode(customerNameCode)
        if (actualDispatchData && Object.keys(actualDispatchData).length > 0) {
            setActualDispatchList(actualDispatchData.data)
            setTotalPage(actualDispatchData.count)
        }
    }

    const reset = () => {
        setState(initialState)
        setActualDispatchList([])
        setTotalPage(0)
    }

    return (
        <Fragment>
            <Pageheader items={breadcrumbs} />
            <Row>
                <Col xl={12}>
                    <Card>
                        <Card.Header className=" d-flex justify-content-between align-items-center">
                            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "7px 5px 0 5px" }}>
                                <Card.Title style={{ flexGrow: 1 }}>
                                    <FilterComponent
                                        handleSearchData={handleSearchData}
                                        callAPI={CDC_SAVE_ACTUALDISPATCH}
                                    />
                                </Card.Title>
                                <Card.Title style={{ marginLeft: "auto", padding: "5px" }}>
                                    <Button
                                        onClick={() => handleOpenModal(1, 0)}
                                        variant="upload"
                                        className="bg-purple"
                                        sx={{ borderRadius: "20px" }}
                                    >
                                        <i className="fe fe-upload me-2"></i>
                                        Import Actual Dispatch
                                    </Button>
                                </Card.Title>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="card-area">
                                <Col md="12">
                                    <TotalRecords color='outline-success' length={actualDispatchList && actualDispatchList.length} />
                                    <div style={{ marginTop: "15px", display: 'grid', height: 500, overflowY: 'auto' }}>
                                        {actualDispatchList && actualDispatchList.length > 0 ?
                                            <DataGrid
                                                rows={actualDispatchList}
                                                columns={actualDispatchColumns}
                                                pagination
                                                paginationMode="server"
                                                rowCount={totalPage}  // Ensure the total number of records is provided
                                                pageSize={paginationModel.pageSize}
                                                page={paginationModel.page}
                                                onPageChange={(newPage) => handlePaginationChange({ ...paginationModel, page: newPage })}
                                                onPageSizeChange={(newPageSize) => handlePaginationChange({ ...paginationModel, pageSize: newPageSize })}
                                                getRowId={(row) => row.id}
                                                hideFooterPagination
                                                components={{
                                                    Footer: () => <CustomFooter total={actualDispatchList.length} />,
                                                }}
                                                sx={{
                                                    '& .MuiDataGrid-root': {
                                                        border: 'none',
                                                    },
                                                    '& .MuiDataGrid-columnHeaders': {
                                                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                                                        color: "rgba(0, 0, 0, 0.87)",
                                                        fontSize: "14px",
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

                                            :
                                            "No Data Found"}
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row >
            <ModalPopUpComponent open={state.openModal}
                handleOpenModal={handleOpenModal}
                callEndPoint={CDC_SAVE_ACTUALDISPATCH}
            />
        </Fragment >
    )
}

const mapStatetoprops = (state) => {
    return {
        actualDispatchData: state.commonReducer.actualDispatchData,
    }
}
const mapDispatchtoprops = (dispatch) => {
    return {
        getActualDispatchData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'actualDispatch'))
    }
}
export default connect(mapStatetoprops, mapDispatchtoprops)(HomeComponent)
