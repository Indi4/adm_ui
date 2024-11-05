import React, { useEffect, useState, Fragment } from "react";
import { connect } from 'react-redux'
import { Card, Button, Col, Row } from 'react-bootstrap'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import { DataGrid } from "@mui/x-data-grid";
import ModalPopUpComponent from '../../../../commonComponent/modalPopUpComponent'
import FilterComponent from "../../commonComponent/filter";
import { actualSalesColumns, initialState, breadcrumbs } from "./config"
import { CDC_SAVE_ACTUALSALES, CDC_GET_ACTUALSALES } from "../../../endPointConfig"
import { callCommonGetAPI } from '../../../../store/action/action'
import { toast } from "react-toastify";
import TotalRecords from '../../../../commonComponent/totalRecords'
import LoaderComponent from "../../../../commonComponent/LoaderComponent";

function HomeComponent(props) {

    const [state, setState] = useState({ ...initialState })
    const [endPoint] = useState(CDC_GET_ACTUALSALES)
    const [actualSalesList, setActualSalesList] = useState([])
    const [paginationModel, setPaginationModel] = useState({ pageSize: 5, page: 0 });
    const [totalPage, setTotalPage] = useState(0)
    const [columns, setColumns] = useState([])
    const [customerNameorCode, setCustomerNameorCode] = useState("")
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        props.getActualSalesData(endPoint)
        return () => { reset() }
    }, [])

    useEffect(() => {
        if (props.actualSalesData && Object.keys(props.actualSalesData).length > 0) {
            setActualSalesList(props.actualSalesData.data)
            setTotalPage(props.actualSalesData.count)
            setLoading(false);
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
                    <Card>
                        <Card.Header className=" d-flex justify-content-between align-items-center">
                            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "7px 5px 0 5px" }}>
                                <Card.Title style={{ flexGrow: 1 }}>
                                    <FilterComponent
                                        handleSearchData={handleSearchData}
                                        callAPI={CDC_GET_ACTUALSALES}
                                    />
                                </Card.Title>
                                <Card.Title style={{ marginTop: "10px", padding: "5px" }}>
                                    <Button
                                        onClick={() => handleOpenModal(1, 0)}
                                        variant="upload"
                                        className="bg-purple"
                                        sx={{ borderRadius: "20px" }}
                                    >
                                        <i className="fe fe-upload me-2"></i>
                                        Import Actual Sales
                                    </Button>
                                </Card.Title>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="card-area">
                                <Col md="12">
                                    <TotalRecords color='outline-success' length={actualSalesList && actualSalesList.length} />
                                    <div style={{ marginTop: "15px", display: 'grid', height: 500, overflowY: 'auto' }}>
                                        {loading ? (

                                            <LoaderComponent />
                                        ) :
                                             actualSalesList && actualSalesList.length > 0 ?
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
                callEndPoint={CDC_SAVE_ACTUALSALES}
            />
        </Fragment >
    )
}

const mapStatetoprops = (state) => {
    return {
        actualSalesData: state.commonReducer.actualSalesData,
    }
}
const mapDispatchtoprops = (dispatch) => {
    return {
        getActualSalesData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'actualSales'))
    }
}
export default connect(mapStatetoprops, mapDispatchtoprops)(HomeComponent)
