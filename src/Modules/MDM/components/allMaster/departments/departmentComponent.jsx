import React, { useEffect, useState, useMemo } from "react";
import { connect } from 'react-redux'
import { Col, Card, CardBody, CardHeader, Label, Row, CardTitle } from "reactstrap";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { departmentColumns, initialState } from "../../../../DataManagement/config"
import { MDM_GET_SAVE_DEPARTMENTDETAILS } from "../../../../endPointConfig";
import { callCommonGetAPI } from '../../../../../store/action/action'
import { ToastContainer, toast } from "react-toastify";
import AddEditDepartmentComponent from './addEditDepartmentComponent'
import DeleteModalComponent from "../../../../../commonComponent/deleteModalComponent";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function DepartmentComponent(props) {
    const [state, setState] = useState({ ...initialState })
    const [endPoint] = useState(MDM_GET_SAVE_DEPARTMENTDETAILS)
    const [departmentList, setDepartmentList] = useState([])
    const [paginationModel, setPaginationModel] = useState({ pageSize: 5, page: 0 });
    const [totalPage, setTotalPage] = useState(0)
    const [columns, setColumns] = useState([])

    useEffect(() => {
        props.getDepartmentPlanData(endPoint)
        return () => { reset() }
    }, [])

    const memoizedColumns = useMemo(() => {
        if (departmentColumns) {
            let actionColumns = {
                field: "action", headerName: "Action", width: 100, headerClassName: "wrap-header",
                renderCell: (params) => (
                    <React.Fragment>
                        {params && params.row.id !== 1 ?
                            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                 <Tooltip title="Edit Data">
                                <IconButton
                                    variant="outlined"
                                    sx={{
                                        color: "green",
                                        margin: "5px",
                                        borderRadius: "15px",
                                        maxWidth: "150px", // Adjusted width
                                        fontWeight: "bold", // Bold styling
                                        fontSize: "12px", // Adjusted font size
                                    }}
                                    onClick={() => handleAddEditOpenModal(1, params.row.id, 0, "Edit")}
                                >
                                    <EditIcon />
                                </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete Data">
                                <IconButton
                                    variant="outlined"
                                    sx={{
                                        color: "#bf361b",
                                        margin: "5px",
                                        borderRadius: "15px",
                                        maxWidth: "150px", // Adjusted width
                                        fontWeight: "bold", // Bold styling
                                        fontSize: "12px", // Adjusted font size
                                    }}
                                    onClick={(e) => handleDelete(1, params.row.id, 0, "")}
                                >
                                    <DeleteIcon />
                                </IconButton>
                                </Tooltip>
                            </div>
                            : null
                        }
                    </React.Fragment>
                ),
                width: 200,
            }
            return [...departmentColumns, actionColumns]
        }
    }, [departmentColumns])

    useEffect(() => {
        if (props.departmentDetailsData && Object.keys(props.departmentDetailsData).length > 0) {
            setDepartmentList(props.departmentDetailsData.data)
            setTotalPage(props.departmentDetailsData.count)
        }
    }, [props.departmentDetailsData])

    useEffect(() => {
        if (!!paginationModel && Object.keys(paginationModel).length > 0) {
            props.getDepartmentPlanData(`${endPoint}?page=${paginationModel.page + 1}`)
        }
    }, [paginationModel])

    const handleAddEditOpenModal = (open, rowId, success, type, message) => {
        setState({ ...state, openPopUp: open, rowID: rowId, success, type })
        if (!!success && message !== "") {
            toast.success(message)
            props.getDepartmentPlanData(endPoint)
        } else if (!success && message !== "") {
            toast.error(message)
        }
    }

    const handlePaginationChange = (newPagination) => {
        setPaginationModel(newPagination);
    };

    const handleDelete = (open, rowId, success, message) => {
        setState({ ...state, openDeleteModal: open, rowID: rowId, success })
        if (!!success && message !== "") {
            toast.success(message)
            props.getDepartmentPlanData(endPoint)
        } else if (!success && message !== "") {
            toast.error(message)
        }
    }

    const reset = () => {
        setState(initialState)
        setDepartmentList([])
        setTotalPage(0)
    }

    return (
        <div>
            <ToastContainer />
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader tag="h6" className="border-bottom p-3 mb-0">
                            Departments
                        </CardHeader>
                        <CardBody>
                            <CardBody >
                                <CardTitle>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <label>Total Records: {departmentList.length}</label>
                                        <div className="d-flex align-items-center">
                                            <Button
                                                onClick={() => handleAddEditOpenModal(1, 0, 0, "Add", "")}
                                                variant="contained"
                                                color="primary"
                                                style={{ borderRadius: "15px" }}
                                            >
                                                + Add Department
                                            </Button>
                                        </div>
                                    </div>
                                </CardTitle>

                                <div style={{ marginTop: "15px", display: 'grid' }}>
                                    {departmentList && departmentList.length > 0 ?
                                        <DataGrid
                                            rows={departmentList}
                                            columns={memoizedColumns}
                                            pageSize={7}
                                            getRowId={(row) => row.id}
                                            hideFooterPagination
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
                                                "& .MuiDataGrid-columnHeaderTitle": {
                                                    whiteSpace: "normal",   // Make sure the header title also wraps
                                                    textAlign: "center",    // Center the text
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
                            </CardBody>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <AddEditDepartmentComponent
                openPopUp={state.openPopUp}
                type={state.type}
                rowId={state.rowID}
                departmentList={departmentList}
                handleAddEditOpenModal={handleAddEditOpenModal}
            />

            <DeleteModalComponent
                openDelete={state.openDeleteModal}
                rowId={state.rowID}
                handleDeleteModal={handleDelete}
                callEndPoint={MDM_GET_SAVE_DEPARTMENTDETAILS}
            />
        </div>
    )
}

const mapStatetoprops = (state) => {
    return {
        departmentDetailsData: state?.commonReducer.departmentDetailsData
    }
}
const mapDispatchtoprops = (dispatch) => {
    return {
        getDepartmentPlanData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'departmentDetails'))
    }
}
export default connect(mapStatetoprops, mapDispatchtoprops)(DepartmentComponent);
