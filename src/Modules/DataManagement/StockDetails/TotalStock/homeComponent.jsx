import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Col, Card, CardBody, Row } from "reactstrap";
import { DataGrid } from "@mui/x-data-grid";
import { CDC_GET_TOTALSTOCK } from "../../../endPointConfig";
import { generateDynamicColumns, CustomFooter } from "../../../commonConfig"
import { callCommonGetAPI, callCommonRefreshProps, } from "../../../../store/action/action";
import { initialState, breadcrumbs } from "./config";
import { ToastContainer, toast } from "react-toastify";
import FilterComponent from "../../commonComponent/filter";
import { CircularProgress } from "@mui/material";
import { Buttonsoutline } from "../../../../components/bootstrap/badgespills/data/badgesdata";
import { Badge, Button } from "react-bootstrap";

function HomeComponent(props) {
    const [state, setState] = useState({ ...initialState });
    const { getTotalStockData, totalStockData } = props
    const [endPoint, setEndpoint] = useState(CDC_GET_TOTALSTOCK)
    const [paginationModel, setPaginationModel] = useState({ pageSize: 5, page: 0 });
    const [totalPage, setTotalPage] = useState(0);
    const [loading, setLoading] = useState(false);  // New loading state for the whole component


    useEffect(() => {
        setLoading(true);
        getTotalStockData(`${endPoint}search=`)
        return () => { reset() };
    }, []);

    useEffect(() => {
        if (totalStockData && Object.keys(totalStockData).length > 0) {
            setState({
                ...state,
                totalStockList: totalStockData.data && totalStockData.data.length > 0 ? totalStockData.data : [],
            })
            setLoading(false);
        }
    }, [totalStockData]);

    // const handlePaginationChange = (newPagination) => {
    //     setState((prevState) => ({
    //         ...prevState,
    //         paginationModel: newPagination,
    //     }));
    // };

    const handleSearchData = (fgCodeData, fgCode) => {
        if (fgCodeData && Object.keys(fgCodeData).length > 0) {
            setState({
                ...state,
                fgCode: fgCode,
                totalStockList: (fgCodeData.data)
            })
        }
    }

    const handleInputChange = (e) => {
        setState({ ...state, fgCode: e.target.value.fg_code })
    }
    useEffect(() => {
        if (state.totalStockList && Object.keys(state.totalStockList).length > 0) {
            setState({
                ...state,
                columns: generateDynamicColumns(state.totalStockList && state.totalStockList.length > 0 ? state.totalStockList : [])
            })
        }
    }, [state.totalStockList]);



    
    const handlePaginationChange = (newPagination) => {
        setPaginationModel(newPagination);
        getTotalStockData(`${endPoint}?page=${newPagination.page + 1}`);
    };

    const reset = () => {
        setState(initialState);
    };

    return (
        <div>
            <ToastContainer />
            <Row>
                <Card>
                    <CardBody>
                        <Col md="6">
                            <FilterComponent
                                handleSearchData={handleSearchData}
                                callAPI={CDC_GET_TOTALSTOCK}
                                filterType='fgCode'
                            />
                        </Col>
                        
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                    {Buttonsoutline.filter(
                    (idx) => idx.color === "outline-info"
                  ).map((idx, index) => (
                    <Button
                      type="button"
                      variant={idx.color}
                      className="me-2"
                    >
                      <span style={{fontSize:"14px"}}>Total Records </span>
                      <Badge bg={idx.bg} className="ms-2">
                        {state.totalStockList.length}
                      </Badge>
                    </Button>
                  ))}
                        <Col md="12">
                            <div style={{ marginTop: "15px", display: "grid", height: 500, overflowY: 'auto' }}>
                                
                            {loading ? (
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                        <CircularProgress />
                                    </div>
                                ) : (
                                state.totalStockList && state.totalStockList.length > 0 ? (
                                    <DataGrid
                                        rows={state.totalStockList || []}
                                        columns={state.columns || []}
                                        hideFooterPagination
                                        pagination
                                        paginationMode="server"
                                        rowCount={totalPage}  // Ensure the total number of records is provided
                                        pageSize={paginationModel.pageSize}
                                        page={paginationModel.page}
                                        onPageChange={(newPage) => handlePaginationChange({ ...paginationModel, page: newPage })}
                                        onPageSizeChange={(newPageSize) => handlePaginationChange({ ...paginationModel, pageSize: newPageSize })}
                                        components={{
                                            Footer: () => <CustomFooter total={state.totalStockList.length} />,
                                        }}
                                        getRowId={(row) => row.fg_code}
                                        sx={{
                                            '& .MuiDataGrid-root': {
                                                border: 'none',
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
                                            "& .MuiDataGrid-columnHeaderTitle": {
                                                whiteSpace: "normal", 
                                                textAlign: "center", 
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
                                ) : (
                                    "No Data Found!"
                                )
                                )}
                            </div>
                        </Col>
                    </CardBody>
                </Card>
            </Row>
        </div>
    );
}

const mapStateToProps = (state) => ({
    totalStockData: state.commonReducer.totalStockData,
});

const mapDispatchToProps = (dispatch) => ({
    getTotalStockData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'totalStock')),
    refreshProps: (title) => dispatch(callCommonRefreshProps(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
