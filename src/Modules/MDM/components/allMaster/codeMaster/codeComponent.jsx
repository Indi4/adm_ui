import React, { useEffect, useState, useMemo, Fragment } from "react";
import { connect } from "react-redux";
import { Badge, Card, Col, Row, Button } from "react-bootstrap";
import { Tooltip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { codeColumns, initialState } from "../../../../DataManagement/config";
import { ToastContainer, toast } from "react-toastify";
import { MDM_CODE } from "../../../../endPointConfig";
import { callCommonGetAPI } from "../../../../../store/action/action";
import AddEditCodeComponent from "./addEditCodeComponent";
import DeleteModalComponent from "../../../../../commonComponent/deleteModalComponent";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Buttonsoutline } from "../../../../../components/bootstrap/badgespills/data/badgesdata";
import LoaderComponent from "../../../../../commonComponent/LoaderComponent";

function CodeComponent(props) {
  const [state, setState] = useState({ ...initialState });
  const [endPoint] = useState(MDM_CODE);
  const [codeList, setCodeList] = useState([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false); // New loading state for the whole component
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    setLoading(true);
    props.getCodeData(endPoint);
    return () => {
      reset();
    };
  }, []);

  const memoizedColumns = useMemo(() => {
    if (codeColumns) {
      let actionsColumn = {
        field: "action",
        headerName: "Action",
        headerAlign: "center",
        headerClassName: "wrap-header",
        renderCell: (params) => (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Tooltip title="Edit">
              <IconButton
                variant="outlined"
                sx={{
                  color: "#0479a9",
                }}
                onClick={() =>
                  handleAddEditOpenModal(1, params.row.id, 0, "Edit")
                }
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton
                variant="outlined"
                sx={{
                  color: "#bf361b",
                  margin: "5px",
                  borderRadius: "15px",
                  maxWidth: "150px",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
                onClick={(e) => handleDelete(1, params.row.id, 0, "")}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        ),
        width: 200,
      };
      return [...codeColumns, actionsColumn];
    }
  }, [codeColumns]);

  useEffect(() => {
    if (
      props.codeDetailsData &&
      Object.keys(props.codeDetailsData).length > 0
    ) {
      setCodeList(props.codeDetailsData.data);
      setTotalPage(props.codeDetailsData.count);
      setLoading(false);
    }
  }, [props.codeDetailsData]);

  const handleAddEditOpenModal = (open, rowId, success, type, message) => {
    setState({ ...state, openPopUp: open, rowID: rowId, success, type });
    if (!!success && message !== "") {
      toast.success(message);
      props.getCodeData(`${endPoint}`);
    } else if (!success && message !== "") {
      toast.error(message);
    }
  };

  const handlePaginationChange = (newPagination) => {
    setPaginationModel(newPagination);
  };

  const handleDelete = (open, rowId, success, message) => {
    setState({ ...state, openDeleteModal: open, rowID: rowId, success });
    if (!!success && message !== "") {
      toast.success(message);
      props.getCodeData(`${endPoint}`);
    } else if (!success && message !== "") {
      toast.error(message);
    }
  };

  const reset = () => {
    setState(initialState);
    setCodeList([]);
    setTotalPage(0);
  };

  return (
    <Fragment>
      <ToastContainer />
      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header className=" d-flex justify-content-between align-items-center">

              <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "7px 5px 0 5px" }}>

                <Card.Title style={{ flexGrow: 1, marginTop: "20px", }}>
                  Plant Codes
                </Card.Title>
                <Card.Title style={{ marginTop: "10px", padding: "5px" }}>
                  <Button
                    onClick={() => handleAddEditOpenModal(1, 0, 0, "Add", "")}
                    variant="contained"
                    className="bg-cyan"
                    sx={{ borderRadius: "20px" }}
                  >
                    + Add Plant
                  </Button>
                </Card.Title>
              </div>
            </Card.Header>

            <Card.Body className="p-0">
              <div className="card-area">
                <Col md="12" style={{ marginTop: "10px", marginBottom: "10px" }}>

                  {Buttonsoutline.filter(
                    (idx) => idx.color === "outline-info"
                  ).map((idx, index) => (
                    <Button type="button" variant={idx.color} className="me-2">
                      <span style={{ fontSize: "14px" }}>Total Records </span>
                      <Badge bg={idx.bg} className="ms-2">
                        {codeList.length}
                      </Badge>
                    </Button>
                  ))}
                  <div
                    style={{
                      marginTop: "10px",
                      display: "grid",
                      height: 500,
                      overflowY: "auto",
                    }}
                  >
                    {loading ? (
                      <LoaderComponent />
                    ) :
                      codeList && codeList.length > 0 ? (
                        <DataGrid
                          rows={codeList || []}
                          columns={memoizedColumns || []}
                          getRowId={(row) => row.id}
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
                        "No Data Found"
                      )}
                  </div>
                </Col>
              </div>
            </Card.Body>
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
    </Fragment>
  );
}

const mapStatetoprops = (state) => {
  return {
    codeDetailsData: state?.commonReducer.codeDetailsData,
  };
};
const mapDispatchtoprops = (dispatch) => {
  return {
    getCodeData: (endPoint) =>
      dispatch(callCommonGetAPI(endPoint, "codeDetails")),
  };
};
export default connect(mapStatetoprops, mapDispatchtoprops)(CodeComponent);
