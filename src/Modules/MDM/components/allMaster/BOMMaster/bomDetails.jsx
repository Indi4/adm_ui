import React, { useEffect, useState, useMemo, Fragment } from "react";
import { connect } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Badge, Card, Col, Row, Button } from "react-bootstrap";
import ModalPopUpComponent from "../../../../../commonComponent/modalPopUpComponent";
import { BOMColumns, initialState } from "../../../../DataManagement/config";
import {
  MDM_GET_BOMDETAILS,
  MDM_SAVE_BOMDETAILS,
} from "../../../../endPointConfig";
import { CustomFooter } from "../../../../commonConfig";
import { callCommonGetAPI } from "../../../../../store/action/action";
import { ToastContainer, toast } from "react-toastify";
import EditBOMComponent from "./editBOMComponent";
import DeleteModalComponent from "../../../../../commonComponent/deleteModalComponent";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Iconloader } from "../../../../../components/bootstrap/buttons/data/buttondata";
import { Buttonsoutline } from "../../../../../components/bootstrap/badgespills/data/badgesdata";

function BOMComponent(props) {
  const [state, setState] = useState({ ...initialState });
  const [endPoint] = useState(MDM_GET_BOMDETAILS);
  const [BOMList, setBOMList] = useState([]);

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    props.getBOMData(`${endPoint}`);
    return () => {
      reset();
    };
  }, []);

  useEffect(() => {
    if (props.BOMData && Object.keys(props.BOMData).length > 0) {
      const dataCount = props.BOMData.count || props.BOMData.data.length;

      setBOMList(props.BOMData.data);
      setTotalPage(dataCount);
    }
  }, [props.BOMData]);

  const handleOpenModal = (openModal, success, message = "") => {
    setState({ openModal: openModal, success });
    if (success && message !== "") {
      toast.success(message);
      props.getBOMData(`${endPoint}`);
    } else if (!success && message !== "") {
      toast.error(message);
    }
  };

  const handleEditOpenModal = (open, rowId, success, message = "") => {
    setState({ ...state, openEditModal: open, rowID: rowId, success });
    if (success && message !== "") {
      toast.success(message);
      props.getBOMData(`${endPoint}`);
    } else if (!success && message !== "") {
      toast.error(message);
    }
  };

  const handlePaginationChange = (newPagination) => {
    setPaginationModel(newPagination);

    const offset = newPagination.page * newPagination.pageSize;
    const limit = newPagination.pageSize;

    const paginatedEndPoint = `${endPoint}?offset=${offset}&limit=${limit}`;
    props.getBOMData(paginatedEndPoint);
  };

  const handleDelete = (open, rowId, success, message = "") => {
    setState({ ...state, openDeleteModal: open, rowID: rowId, success });
    if (success && message !== "") {
      toast.success(message);
      props.getBOMData(`${endPoint}`);
    } else if (!success && message !== "") {
      toast.error(message);
    }
  };

  const reset = () => {
    setState({ ...initialState });
    setBOMList([]);
    setTotalPage(0);
  };

  const memoizedColumns = useMemo(() => {
    if (BOMColumns) {
      const actionsColumn = {
        field: "actions",
        headerName: "Actions",
        renderCell: (params) => (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              variant="outlined"
              sx={{
                color: "green",
                margin: "5px",
                borderRadius: "15px",
                maxWidth: "150px",
                fontWeight: "bold",
                fontSize: "12px",
              }}
              onClick={() => handleEditOpenModal(1, params.row.id, 0)}
            >
              <EditIcon />
            </IconButton>
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
              onClick={() => handleDelete(1, params.row.id, 0, "")}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ),
        width: 250,
      };

      return [...BOMColumns, actionsColumn];
    }
    return [];
  }, [BOMColumns]);

  return (
    <Fragment>
      <ToastContainer />
      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header className=" d-flex justify-content-between align-items-center">
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "7px 5px 0 5px" }}>

                <Card.Title style={{ flexGrow: 1, marginTop: "20px", }}>
                  BOM Details
                </Card.Title>
                <Card.Title style={{ marginTop: "10px", padding: "5px"}}>
                  <Button
                    onClick={() => handleOpenModal(1, 0)}
                    variant="contained"
                    className="bg-cyan"
                    sx={{ borderRadius: "20px" }}
                  >
                    Sync ERP Data
                    {Iconloader.filter((idx) => idx.icon === "refresh").map(
                      (load, index) => (
                        <i className={`fa-spin ms-2 fa fa-${load.icon}`}></i>
                      )
                    )}
                  </Button>
                </Card.Title>
              </div>
            </Card.Header>

            <Card.Body className="p-0">
              <div className="card-area">
              <Col md="12" style={{marginTop:"10px" ,marginBottom:"10px"}}>

                {Buttonsoutline.filter(
                  (idx) => idx.color === "outline-info"
                ).map((idx, index) => (
                  <Button type="button" variant={idx.color} className="me-2">
                    <span style={{ fontSize: "14px" }}>Total Records </span>
                    <Badge bg={idx.bg} className="ms-2">
                      {BOMList.length}
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
                  {BOMList && BOMList.length > 0 ? (
                    <DataGrid
                      rows={BOMList}
                      columns={BOMColumns || []}
                      getRowId={(row) => row.id}
                      hideFooterPagination
                      components={{
                        Footer: () => <CustomFooter total={BOMList.length} />,
                      }}
                      initialState={{ pinnedColumns: { right: ["actions"] } }}
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
      <ModalPopUpComponent
        open={state.openModal}
        handleOpenModal={handleOpenModal}
        callEndPoint={MDM_SAVE_BOMDETAILS}
      />
      <EditBOMComponent
        openEdit={state.openEditModal}
        rowId={state.rowID}
        BOMList={BOMList}
        handleEditOpenModal={handleEditOpenModal}
      />
      <DeleteModalComponent
        openDelete={state.openDeleteModal}
        rowId={state.rowID}
        handleDeleteModal={handleDelete}
        callEndPoint={MDM_GET_BOMDETAILS}
      />
    </Fragment>
  );
}

const mapStatetoprops = (state) => {
  return {
    BOMData: state?.commonReducer.bomData,
    saveBOMData: state?.commonReducer.saveBOMData,
  };
};

const mapDispatchtoprops = (dispatch) => {
  return {
    getBOMData: (endPoint) => dispatch(callCommonGetAPI(endPoint, "BOM")),
  };
};

export default connect(mapStatetoprops, mapDispatchtoprops)(BOMComponent);
