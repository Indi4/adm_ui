import React, { useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import {
  Alert,
  Card,
  CloseButton,
  Col,
  Collapse,
  Form,
  Row,
} from "react-bootstrap";
// import { Col, Card, CardBody, CardHeader, Label, Row, CardTitle } from "reactstrap";
import {
  //   Card,
  //   CardHeader,
  //   CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";
// import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";
import ModalPopUpComponent from "../../../../../commonComponent/modalPopUpComponent";
import {
  customerColumns,
  initialState,
} from "../../../../DataManagement/config";
import {
  MDM_GET_CUSTOMER,
  MDM_SAVE_CUSTOMER,
  GETALL_LIST,
} from "../../../../endPointConfig";
import { CustomFooter } from "../../../../commonConfig";
import { callCommonGetAPI } from "../../../../../store/action/action";
import EditCustomerComponent from "./editCustomerComponent";
import { ToastContainer, toast } from "react-toastify";
import DeleteModalComponent from "../../../../../commonComponent/deleteModalComponent";
import LogoPopupComponent from "./logoPopupComponent";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { IconButton } from "@mui/material";
import { Iconloader } from "../../../../../components/bootstrap/buttons/data/buttondata";
// import { Iconloader } from "../../bootstrap/buttons/data/buttondata";
import { Badge } from "react-bootstrap";

function CustomerDetails(props) {
  console.log({ props });
  // debugger;
  const [show, setShow] = useState(true);
  const [state, setState] = useState({ ...initialState });
  const [endPoint] = useState(MDM_GET_CUSTOMER);
  const [customerList, setCustomerList] = useState([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  const [totalPage, setTotalPage] = useState(0);
  const [categoryList, setCategoryList] = useState([]);
  const {
    customerData,
    getCustomerData,
    getCustomerNameCode,
    customerNameCodeData,
  } = props;

  useEffect(() => {
    getCustomerNameCode(GETALL_LIST);
    getCustomerData(`${endPoint}`);
    return () => {
      reset();
    };
  }, []);

  useEffect(() => {
    if (customerData && Object.keys(customerData).length > 0) {
      if (customerData.data && customerData.data.length > 0) {
        // console.log(customerData.data, customerData.length,"===================")
        setCustomerList(customerData.data);
        setTotalPage(customerData.length);
        setCategoryList(
          customerData.data.category &&
            customerData.data.category.length > 0 &&
            customerData.data.category
        );
      }
    }
  }, [customerData]);

  useEffect(() => {
    if (customerNameCodeData && Object.keys(customerNameCodeData).length > 0) {
      setCategoryList(
        customerNameCodeData.data &&
          Object.keys(customerNameCodeData.data).length > 0 &&
          customerNameCodeData.data.category &&
          customerNameCodeData.data.category.length > 0 &&
          customerNameCodeData.data.category
      );
    }
  }, [customerNameCodeData]);

  // useEffect(() => {
  //     if (paginationModel && Object.keys(paginationModel).length > 0) {
  //         getCustomerData(`${endPoint}?page=${paginationModel.page + 1}`);
  //         getCustomerNameCode(GETALL_LIST);
  //     }
  // }, [paginationModel]);

  const handleOpenModal = (openModal, success, message = "") => {
    // debugger;
    setState({ openModal: openModal, success });
    if (success && message !== "") {
      toast.success(message);
      getCustomerData(`${endPoint}`);
    } else if (!success && message !== "") {
      toast.error(message);
    }
  };

  const handlePaginationChange = (newPagination) => {
    setPaginationModel(newPagination);
  };

  const handleDelete = (open, rowId, success, message = "") => {
    setState({ ...state, openDeleteModal: open, rowID: rowId, success });
    if (success && message !== "") {
      toast.success(message);
      getCustomerData(`${endPoint}`);
    } else if (!success && message !== "") {
      toast.error(message);
    }
  };

  const memoizedColumns = useMemo(() => {
    if (customerColumns) {
      const objLogo = {
        field: "company_logo",
        headerName: "Company Logo",
        renderCell: (params) => (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              sx={{ color: "#0080FF" }}
              onClick={() =>
                handleLogoOpenModal(1, params.row.customer_code, 0)
              }
            >
              <FileUploadOutlinedIcon />
            </IconButton>
          </div>
        ),
        width: 130,
      };

      const updatedColumns = customerColumns.map((column) => {
        if (column.field === "category") {
          // Replace "category" with the actual field name for category
          return {
            ...column,
            renderCell: (params) => {
              const category = params.value;
              return (
                <Badge
                  bg={
                    category === "Domestic"
                      ? "primary-transparent"
                      : category === "Export"
                      ? "warning-transparent"
                      : category === "After Market"
                      ? "secondary-transparent"
                      : "black"
                  }
                  className="me-1 my-1"
                  style={{
                    padding: "5px",
                    fontSize: "0.9rem",
                    fontWeight: "400",
                    width: "90%",
                  }}
                >
                  {category}
                </Badge>
              );
            },
          };
        }
        return column;
      });

      const obj = {
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
              onClick={() =>
                handleEditOpenModal(1, params.row.customer_code, 0)
              }
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
              onClick={() => handleDelete(1, params.row.customer_code, 0, "")}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ),
        width: 200,
      };

      return [...updatedColumns];
    }
    return [];
  }, [customerColumns]);

  const handleLogoOpenModal = (openModal, rowId, success) => {
    setState({ openLogoModal: openModal, rowID: rowId, success });
    if (success) {
      getCustomerData(`${endPoint}`);
    }
  };

  const handleEditOpenModal = (open, rowId, success, message = "") => {
    setState({ ...state, openEditModal: open, rowID: rowId, success });
    if (success && message !== "") {
      toast.success(message);
      // getCustomerData(`${endPoint}?page=${paginationModel.page + 1}`);
      getCustomerData(`${endPoint}`);
      getCustomerNameCode(GETALL_LIST);
    } else if (!success && message !== "") {
      toast.error(message);
    }
  };

  const reset = () => {
    setState({ ...initialState });
    setCustomerList([]);
    setTotalPage(0);
  };
  useEffect(() => {
    console.log({ customerData, customerNameCodeData });
  }, [customerData, customerNameCodeData]);

  console.log({ customerList });
  return (
    <div style={{ marginTop: "80px" }}>
      <ToastContainer />

      <Row>
        <Col xl={12}>
          <Card className=" custom-card">
            <Card.Header>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  padding:"0px",
                }}
              >
                <Card.Title style={{ flexGrow: 1, paddingTop:"10px" }}>
                  Customer Details
                </Card.Title>
                <Card.Title style={{ marginLeft: "auto" }}>
                <Button
                    onClick={() => handleOpenModal(1, 0)}
                    variant="contained"
                    className="bg-cyan"
                    sx={{ borderRadius: "20px" }}
                  >
                    {/* <i className={`fa-spin ms-2 fa fa-${Iconloader.icon==="refresh"} `}></i> */}
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
            <Card.Body>
              <div className="card-area">
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="body1">
                    Total Records :{customerList.length}
                  </Typography>
                </Grid>
                <div
                  style={{ marginTop: "10px", height: 500, overflowY: "auto" }}
                >
                  {customerList && customerList.length > 0 ? (
                    <DataGrid
                      rows={customerList}
                      columns={memoizedColumns || []}
                      getRowId={(row) => row.customer_code}
                      hideFooterPagination
                      sx={{
                        "& .MuiDataGrid-root": {
                          border: "none",
                        },
                        "& .MuiDataGrid-columnHeaders": {
                          backgroundColor: "rgba(255, 255, 255, 0.7)",
                          color: "rgba(0, 0, 0, 0.87)",
                          fontSize: "15px",
                          borderBottom: "2px solid rgba(60, 90, 120, 0.5)",
                          backdropFilter: "blur(10px)",
                          boxShadow: "0 14px 8px rgba(0, 0, 0, 0.1)",
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
                        "& .MuiDataGrid-toolbarContainer": {
                          backgroundColor: "#f0f0f0",
                          borderBottom: "1px solid #d3d3d3",
                        },
                      }}
                    />
                  ) : (
                    <Typography>No Data Found</Typography>
                  )}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <ModalPopUpComponent
        open={state.openModal}
        handleOpenModal={handleOpenModal}
        callEndPoint={MDM_SAVE_CUSTOMER}
      />

      <LogoPopupComponent
        open={state.openLogoModal}
        rowId={state.rowID}
        customerList={customerList}
        handleOpenModal={handleLogoOpenModal}
        callEndPoint={MDM_SAVE_CUSTOMER}
      />

      <EditCustomerComponent
        openEdit={state.openEditModal}
        rowId={state.rowID}
        customerList={
          customerList && customerList.length > 0 ? customerList : []
        }
        categoryList={
          categoryList && categoryList.length > 0 ? categoryList : []
        }
        handleEditOpenModal={handleEditOpenModal}
      />

      <DeleteModalComponent
        openDelete={state.openDeleteModal}
        rowId={state.rowID}
        handleDeleteModal={handleDelete}
        callEndPoint={MDM_GET_CUSTOMER}
      />
    </div>
  );
}

const mapStatetoprops = (state) => {
  console.log({ state });
  return {
    customerData: state?.customerData,
    customerNameCodeData: state?.customerNameCodeData,
  };
};

const mapDispatchtoprops = (dispatch) => {
  return {
    getCustomerData: (endPoint) =>
      dispatch(callCommonGetAPI(endPoint, "customer")),
    getCustomerNameCode: (endPoint) =>
      dispatch(callCommonGetAPI(endPoint, "customerNameCode")),
  };
};

export default connect(mapStatetoprops, mapDispatchtoprops)(CustomerDetails);

// import React from 'react'

// function customerDetails() {
//   return (
//     <div>customerDetails</div>
//   )
// }

// export default customerDetails
