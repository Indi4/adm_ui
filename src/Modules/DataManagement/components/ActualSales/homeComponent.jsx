import React, { useEffect, useState, Fragment } from "react";
import { connect } from 'react-redux'
import { Alert, Card, CloseButton, Col, Collapse, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../../layouts/pageheader/pageheader'
// import { AlertswithIcons, Defaultalerts, Dismissing, Icon, Linkwithalert, Style } from './data/alertsdata'
// import { Col, Card, CardBody, Row } from "reactstrap";
// import { DataGrid } from "@mui/x-data-grid";

// import ModalPopUpComponent from '../../../commonComponent/modalPopUpComponent'
// import { Button } from "@mui/material";
import FilterComponent from "../../commonComponent/filter";
import { actualSalesColumns, initialState, breadcrumbs } from "./config"
import { CDC_SAVE_ACTUALSALES, CDC_GET_ACTUALSALES } from "../../../endPointConfig"
// import { CustomFooter } from "../../../commonConfig"
import { callCommonGetAPI } from '../../../../store/action/action'
// import { ToastContainer, toast } from "react-toastify";


function HomeComponent(props) {

    const [state, setState] = useState({ ...initialState })
    const [endPoint] = useState(CDC_GET_ACTUALSALES)
    const [actualSalesList, setActualSalesList] = useState([])
    const [paginationModel, setPaginationModel] = useState({ pageSize: 5, page: 0 });
    const [totalPage, setTotalPage] = useState(0)
    const [columns, setColumns] = useState([])
    const [customerNameorCode, setCustomerNameorCode] = useState("")
    useEffect(() => {
        props.getActualSalesData(endPoint)
        return () => { reset() }
    }, [])

    useEffect(() => {
        if (props.actualSalesData && Object.keys(props.actualSalesData).length > 0) {
            setActualSalesList(props.actualSalesData.data)
            setTotalPage(props.actualSalesData.count)
        }
    }, [props.actualSalesData])

    const handleOpenModal = (openModal, success, message = "") => {
        setState({ openModal: openModal, success })
        if (!!success && message !== "") {
            toast.success(message)
            props.getActualSalesData(endPoint)
        } else if (!success && message !== "") {
            toast.error(message)
        }
    }

    const handleSearchData = (actualSalesData, data, customerNameCode) => {
        setCustomerNameorCode(customerNameCode)
        if (actualSalesData && Object.keys(actualSalesData).length > 0) {
            setActualSalesList(actualSalesData.data)
            setTotalPage(actualSalesData.count)
        }
    }

    const reset = () => {
        setState(initialState)
        setActualSalesList([])
        setTotalPage(0)
    }

    return (
        <Fragment>
            <Pageheader items={breadcrumbs} />
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                <Row>
                                    <Col md="6">
                                        <FilterComponent
                                            handleSearchData={handleSearchData}
                                            callAPI={CDC_GET_ACTUALSALES}
                                        />
                                    </Col>
                                    <Col md="4" >
                                        <Button
                                            onClick={() => handleOpenModal(1, 0)}
                                            variant="contained"
                                            color="primary"
                                            style={{ borderRadius: "15px", margin: "10px" }}
                                        >
                                            Import Actual Sales
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="card-area">

                                <Col md="12">
                                    <div style={{ marginTop: "15px", display: 'grid', height: 500, overflowY: 'auto' }}>
                                        {actualSalesList && actualSalesList.length > 0 ?
                                            <DataGrid
                                                rows={actualSalesList}
                                                columns={actualSalesColumns}
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
                                                    Footer: () => <CustomFooter total={actualSalesList.length} />,
                                                }}
                                                sx={{
                                                    '& .MuiDataGrid-root': {
                                                        border: 'none',
                                                        //fontFamily: 'Arial, sans-serif',
                                                    },
                                                    '& .MuiDataGrid-columnHeaders': {
                                                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                                        color: 'rgba(0, 0, 0, 0.87)',
                                                        fontSize: '15px',
                                                        borderBottom: '2px solid rgba(60, 90, 120, 0.5)',
                                                        backdropFilter: 'blur(10px)',
                                                        WebkitBackdropFilter: 'blur(10px)',
                                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
                                                            backgroundColor: "#d3d3d3",
                                                            borderRadius: "10px",
                                                        },
                                                        "&::-webkit-scrollbar-thumb:hover": {
                                                            backgroundColor: "#bbb",
                                                        },
                                                    },
                                                    "& .MuiDataGrid-root": {
                                                        "&::-webkit-scrollbar": {
                                                            height: "10px",
                                                        },
                                                        "&::-webkit-scrollbar-thumb": {
                                                            backgroundColor: "#d3d3d3",
                                                            borderRadius: "10px",
                                                        },
                                                        "&::-webkit-scrollbar-thumb:hover": {
                                                            backgroundColor: "#bbb",
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

            </Row>

        </Fragment>
    )
}

const mapStatetoprops = (state) => {
    return {
        actualSalesData: state.actualSalesData,
    }
}
const mapDispatchtoprops = (dispatch) => {
    return {
        getActualSalesData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'actualSales'))
    }
}
export default connect(mapStatetoprops, mapDispatchtoprops)(HomeComponent)
