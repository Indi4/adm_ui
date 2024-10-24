import React, { useEffect, useState, useMemo } from "react";
import { connect } from 'react-redux'
import { Col, Card, CardBody, CardHeader, Label, Row, CardTitle } from "reactstrap";
import Button from "@mui/material/Button";
import { Grid, TextField, MenuItem, Autocomplete, Select, TableCell, Tooltip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { codeColumns, initialState } from "../../../../DataManagement/config"
import { ToastContainer, toast } from "react-toastify";
import { MDM_CODE } from "../../../../endPointConfig"
import { callCommonGetAPI } from '../../../../../store/action/action'
import AddEditCodeComponent from './addEditCodeComponent'
import DeleteModalComponent from '../../../../../commonComponent/deleteModalComponent'
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CustomFooter } from "../../../../commonConfig"

function CodeComponent(props) {
    const [state, setState] = useState({ ...initialState })
    const [endPoint] = useState(MDM_CODE)
    const [codeList, setCodeList] = useState([])
    const [paginationModel, setPaginationModel] = useState({ pageSize: 5, page: 0 });
    const [totalPage, setTotalPage] = useState(0)
    const [columns, setColumns] = useState([])

    useEffect(() => {
        props.getCodeData(endPoint)
        return () => { reset() }
    }, [])

    const memoizedColumns = useMemo(() => {
        
        if (codeColumns) {

            let actionsColumn = {
                field: "action", headerName: "Action", width: 100, headerClassName: "wrap-header",
                renderCell: (params) => (
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
                ),
                width: 200,
            }
            return [...codeColumns, actionsColumn];
        }
    }, [codeColumns])

    useEffect(() => {
        if (props.codeDetailsData && Object.keys(props.codeDetailsData).length > 0) {
            setCodeList(props.codeDetailsData.data)
            setTotalPage(props.codeDetailsData.count)
        }
    }, [props.codeDetailsData])

    // useEffect(() => {
    //     if (!!paginationModel && Object.keys(paginationModel).length > 0) {
    //         props.getCodeData(`${endPoint}?page=${paginationModel.page + 1}`)
    //     }
    // }, [paginationModel])

    const handleAddEditOpenModal = (open, rowId, success, type, message) => {
        setState({ ...state, openPopUp: open, rowID: rowId, success, type })
        if (!!success && message !== "") {
            toast.success(message)
            props.getCodeData(`${endPoint}`)
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
            props.getCodeData(`${endPoint}`)
        } else if (!success && message !== "") {
            toast.error(message)
        }
    }

    const reset = () => {
        setState(initialState)
        setCodeList([])
        setTotalPage(0)
    }

    return (
        <div>
            <ToastContainer />
            <Row>
                <Col md="12">
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                            Plant Codes
                        </CardTitle>
                        <CardBody>
                            <CardBody >
                                <CardHeader>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <label>All Plant Code Records</label>
                                        <div className="d-flex align-items-center">
                                            <Button
                                                onClick={() => handleAddEditOpenModal(1, 0, 0, "Add", "")}
                                                variant="contained"
                                                color="primary"
                                                style={{ borderRadius: "15px" }}
                                            >
                                                + Add Plant
                                            </Button>
                                        </div>
                                    </div>
                                </CardHeader>
                                <div style={{ marginTop: "15px", display: 'grid', height: 400, overflowY: 'auto' }}>
                                    {codeList && codeList.length > 0 ?
                                        <DataGrid
                                            rows={codeList || []}
                                            columns={memoizedColumns || []}
                                            //pageSize={7}
                                            getRowId={(row) => row.id}
                                            hideFooterPagination
                                            components={{
                                                Footer: () => <CustomFooter total={codeList.length} />,
                                            }}
                                            // pagination
                                            // paginationMode="server"
                                            // paginationModel={paginationModel}
                                            // rowCount={totalPage}
                                            // onPaginationModelChange={handlePaginationChange}
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

            <AddEditCodeComponent
                openPopUp={state.openPopUp}
                type={state.type}
                rowId={state.rowID}
                codeList={codeList}
                handleAddEditOpenModal={handleAddEditOpenModal}
            />

            <DeleteModalComponent
                openDelete={state.openDeleteModal}
                rowId={state.rowID}
                handleDeleteModal={handleDelete}
                callEndPoint={endPoint}
            />
        </div>
    )
}

const mapStatetoprops = (state) => {
    return {
        codeDetailsData: state?.codeDetailsData
    }
}
const mapDispatchtoprops = (dispatch) => {
    return {
        getCodeData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'codeDetails'))
    }
}
export default connect(mapStatetoprops, mapDispatchtoprops)(CodeComponent);
