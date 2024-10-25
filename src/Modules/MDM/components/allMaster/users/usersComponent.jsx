import React, { useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import { Badge, Card, Col, Row, Button } from "react-bootstrap";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, initialState } from "../../../../DataManagement/config";
import { ToastContainer, toast } from "react-toastify";
import { GETALL_USER, UPDATE_USER } from "../../../../endPointConfig";
import { callCommonGetAPI } from "../../../../../store/action/action";
import AddEditUserComponent from "./addEditUserComponent";
import DeleteModalComponent from "../../../../../commonComponent/deleteModalComponent";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Buttonsoutline } from "../../../../../components/bootstrap/badgespills/data/badgesdata";

function UsersComponent(props) {
  const [state, setState] = useState({ ...initialState });
  const [endPoint] = useState(GETALL_USER);
  const [userList, setUserList] = useState([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  const [totalPage, setTotalPage] = useState(0);
  const [columns, setColumns] = useState([]);
  const [roles, setRoles] = useState([]);
  const { getUserData, userDetailsData } = props;

  useEffect(() => {
    const roles = userDetailsData?.data?.map((item) => item.role);
    setRoles(roles);
    return () => {
      reset();
    };
  }, [userDetailsData]);

  const memoizedColumns = useMemo(() => {
    if (userColumns) {
      let actionsColumn = {
        field: "action",
        headerName: "Action",
        width: 100,
        headerClassName: "wrap-header",
        renderCell: (params) => (
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Tooltip title="Edit Data">
              <IconButton
                variant="outlined"
                sx={{
                  color: "#3498db",
                  margin: "5px",
                  borderRadius: "15px",
                  maxWidth: "150px",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
                onClick={() =>
                  handleAddEditOpenModal(1, params.row.id, 0, "Edit")
                }
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
                  maxWidth: "150px",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
                onClick={(e) => {
                  handleDelete(1, params.row.id, 0, "");
                }}
              >
                {params.row.role !== "admin" && <DeleteIcon />}
              </IconButton>
            </Tooltip>
          </div>
        ),
        width: 200,
      };
      return [...userColumns, actionsColumn];
    }
  }, [userColumns]);

  useEffect(() => {
    if (userDetailsData && Object.keys(userDetailsData).length > 0) {
      setUserList(userDetailsData.data);
      setTotalPage(userDetailsData.count);
    }
  }, [userDetailsData]);

  useEffect(() => {
    if (!!paginationModel && Object.keys(paginationModel).length > 0) {
      getUserData(`${endPoint}?page=${paginationModel.page + 1}`);
    }
  }, [paginationModel]);

  const handleAddEditOpenModal = (open, rowId, success, type, message) => {
    setState({ ...state, openPopUp: open, rowID: rowId, success, type });
    if (!!success && message !== "") {
      toast.success(message);
      getUserData(`${endPoint}?page=${paginationModel.page + 1}`);
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
      getUserData(`${endPoint}?page=${paginationModel.page + 1}`);
    } else if (!success && message !== "") {
      toast.error(message);
    }
  };

  const reset = () => {
    setState(initialState);
    setUserList([]);
    setTotalPage(0);
  };

  return (
    <div style={{ marginTop: "80px" }}>
      <ToastContainer />
      <Row>
        <Col md="12">
          <Card className="custom-card">
            <Card.Header>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "0px",
                }}
              >
                <Card.Title style={{ flexGrow: 1, paddingTop: "10px" }}>
                  Users
                </Card.Title>
                <Card.Title style={{ marginLeft: "auto" }}>
                  <Button
                    onClick={() => handleAddEditOpenModal(1, 0, 0, "Add", "")}
                    variant="contained"
                    className="bg-cyan"
                    sx={{ borderRadius: "20px" }}
                  >
                    + Add User
                  </Button>
                </Card.Title>
              </div>
            </Card.Header>

            <Card.Body>
              <div className="card-area">
                {Buttonsoutline.filter(
                  (idx) => idx.color === "outline-info"
                ).map((idx, index) => (
                  <Button type="button" variant={idx.color} className="me-2">
                    <span style={{ fontSize: "14px" }}>Total Records </span>
                    <Badge bg={idx.bg} className="ms-2">
                      {userList.length}
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
                  {userList && userList.length > 0 ? (
                    <DataGrid
                      rows={userList}
                      columns={memoizedColumns}
                      pageSize={7}
                      getRowId={(row) => row.id}
                      hideFooterPagination
                      sx={{
                        "& .MuiDataGrid-root": {
                          border: "none",
                        },
                        "& .MuiDataGrid-columnHeaders": {
                          backgroundColor: "rgba(255, 255, 255, 0.7)",
                          color: "rgba(0, 0, 0, 0.87)",
                          fontSize: "14px",
                          borderBottom: "2px solid rgba(60, 90, 120, 0.5)",
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        },
                        "& .MuiDataGrid-columnHeaderTitle": {
                          whiteSpace: "normal",
                          textAlign: "center",
                        },
                        "& .MuiDataGrid-cell": {
                          borderBottom: "1px solid #e0e0e0",
                        },
                        "& .footer-row": {
                          fontWeight: "bold",
                          backgroundColor: "#f7f7f7",
                          borderTop: "2px solid #4a6fa1",
                        },
                        "& .MuiDataGrid-row:hover": {
                          backgroundColor: "#e0f7fa",
                        },
                        "& .MuiDataGrid-selectedRowCount": {
                          color: "#4a6fa1",
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
                        "& .MuiDataGrid-toolbarContainer": {
                          backgroundColor: "#f0f0f0",
                          borderBottom: "1px solid #d3d3d3",
                        },
                      }}
                    />
                  ) : (
                    "No Data Found"
                  )}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <AddEditUserComponent
        openPopUp={state.openPopUp}
        type={state.type}
        rowId={state.rowID}
        userList={userList}
        handleAddEditOpenModal={handleAddEditOpenModal}
      />

      <DeleteModalComponent
        openDelete={state.openDeleteModal}
        rowId={state.rowID}
        handleDeleteModal={handleDelete}
        callEndPoint={UPDATE_USER}
      />
    </div>
  );
}

const mapStatetoprops = (state) => {
  return {
    userDetailsData: state.commonReducer.userDetailsData,
  };
};
const mapDispatchtoprops = (dispatch) => {
  return {
    getUserData: (endPoint) =>
      dispatch(callCommonGetAPI(endPoint, "userDetails")),
  };
};
export default connect(mapStatetoprops, mapDispatchtoprops)(UsersComponent);
