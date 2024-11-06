import React, { useEffect, useState, useMemo, Fragment } from "react";
import { Row } from "reactstrap";
import {

  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  allDemandColumns,
  initialState,
  breadcrumbs,
  generateDynamicColumns,
} from "./config";
import ModalPopUpComponent from "../../../../commonComponent/modalPopUpComponent";
import {
  callCommonGetAPI,
  callCommonRefreshProps,
} from "../../../../store/action/action";
import EditIcon from "@mui/icons-material/Edit";
import { toast, ToastContainer } from "react-toastify";
import AddEditNewDemandComponent from "./addEditNewDemandComponent";
import DeleteModalComponent from "../../../../commonComponent/deleteModalComponent";
import FilterComponent from "../../commonComponent/filter";
import { CustomFooter } from "../../../commonConfig";
import { CDC_ALLDEMANDS, CDC_GET_ALLDEMANDS } from "../../../endPointConfig";
import { connect } from "react-redux";
import { Card, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import TotalRecords from "../../../../commonComponent/totalRecords";
import Pageheader from "../../../../layouts/pageheader/pageheader";
import LoaderComponent from "../../../../commonComponent/LoaderComponent";

function HomeComponent(props) {
  const [state, setState] = useState({ ...initialState });
  const [anchorEl, setAnchorEl] = useState(null);
  const [endPoint] = useState(CDC_GET_ALLDEMANDS);
  const [allDemandList, setallDemandList] = useState([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  const [totalPage, setTotalPage] = useState(0);
  const [columns, setColumns] = useState([]);
  const [flag, setFlag] = useState([false]);
  const [loading, setLoading] = useState(false);

  const [customerNameorCodeList, setCustomerNameorCodeList] = useState([]);
  const [customerNameorCode, setCustomerNameorCode] = useState("");
  const {
    customerNameCodeData,
    allDemandData,
    refreshProps,
    errorData,
    getallDemandData,
    getCustomerNameCode,
  } = props;
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    setLoading(true);
    getallDemandData(`${endPoint}`);
    return () => {
      reset();
    };
  }, []);

  useEffect(() => {
    if (allDemandData && Object.keys(allDemandData).length > 0) {
      if (allDemandData.data && allDemandData.data.length > 0) {
        setallDemandList(allDemandData.data);
        setTotalPage(allDemandData.count || allDemandData.data.length);
      }
      setLoading(false);
    }
  }, [allDemandData]);

  const editColumns = [
    {
      field: "actions",
      type: "actions",
      headerName: "Action",
      width: 100,
      renderCell: (params) => (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            variant="outlined"
            sx={{
              color: "#5875ea",
              margin: "5px",
              borderRadius: "15px",
              maxWidth: "150px",
              fontWeight: "bold",
              fontSize: "12px",
            }}
            onClick={() =>
              handleAddEditOpenModal(
                1,
                params.row.id,
                0,
                "Edit",
                "",
                params.row.customer_code
              )
            }
          >
            <EditIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (allDemandList && Object.keys(allDemandList).length > 0) {
      setColumns([
        ...generateDynamicColumns(allDemandList, [
          "id",
          "customer_code",
          "demands",
          "color",
          "description",
          "category",
        ]),
        ...editColumns,
      ]);
    }
  }, [allDemandList]);

  useEffect(() => {
    if (customerNameCodeData && Object.keys(customerNameCodeData).length > 0) {
      if (
        customerNameCodeData.data &&
        Object.keys(customerNameCodeData.data).length > 0
      ) {
        setCustomerNameorCodeList(
          customerNameCodeData.data.customers_list &&
          customerNameCodeData.data.customers_list.length > 0 &&
          customerNameCodeData.data.customers_list
        );
        setCategoryList(
          customerNameCodeData.data.category &&
          customerNameCodeData.data.category.length > 0 &&
          customerNameCodeData.data.category
        );
        setCustomerNameorCode("");
      }
    }
  }, [customerNameCodeData]);

  useEffect(() => {
    if (
      errorData &&
      Object.keys(errorData).length > 0 &&
      !errorData.is_success
    ) {
      toast.error(errorData.error);
    }
  }, [errorData]);

  const handleOpenModal = (open, success, message = "") => {
    setState({ ...state, openModal: open, success });
    if (!!success && message !== "") {
      toast.success(message);
      refreshProps(allDemandData);
      getallDemandData(`${endPoint}?page=${paginationModel.page + 1}`);
    } else if (!success && message !== "") {
      toast.error(message);
    }
  };
  const handlePaginationChange = (newPagination) => {
    setPaginationModel(newPagination);
    getallDemandData(`${endPoint}?page=${newPagination.page + 1}`);
  };

  const memoizedColumns = useMemo(() => {
    if (allDemandColumns && allDemandColumns.length > 0) {
      let obj = {
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
                handleAddEditOpenModal(
                  1,
                  params.row.id,
                  0,
                  "Edit",
                  "",
                  params.row.customer_code
                )
              }
            >
              <EditIcon />
            </IconButton>
          </div>
        ),
        width: 200,
      };
      return [...allDemandColumns, obj];
    }
    return allDemandColumns;
  }, [allDemandColumns]);

  const handleAddEditOpenModal = (
    open,
    rowId,
    success,
    type,
    message,
    customerCode
  ) => {
    setState({
      ...state,
      openPopUp: open,
      rowID: rowId,
      success,
      type,
      customerCode,
    });
    if (!!success && message !== "") {
      toast.success(message);
      customerNameorCode !== ""
        ? getallDemandData(`${endPoint}?search=${customerNameorCode}`)
        : getallDemandData(`${endPoint}`);
    } else if (!success && message !== "") {
      toast.error(message);
    }
    setAnchorEl(null);
  };

  const handleDelete = (open, rowId, success, message) => {
    setState({ ...state, openDeleteModal: open, rowID: rowId, success });
    if (!!success && message !== "") {
      toast.success(message);
      customerNameorCode !== ""
        ? getallDemandData(`${endPoint}?search=${customerNameorCode}`)
        : getallDemandData(`${endPoint}`);
    } else if (!success && message !== "") {
      toast.error(message);
    }
  };

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleImportExcelClick = (open, success, message) => {
    setState({ ...state, openModal: open, success });
    if (!!success && message !== "") {
      toast.success(message);
      customerNameorCode !== ""
        ? getallDemandData(`${endPoint}?search=${customerNameorCode}`)
        : getallDemandData(`${endPoint}`);
    } else if (!success && message !== "") {
      toast.error(message);
    }
  };

  const handleSearchData = (allDemandData, data, customerNameCode) => {
    setCustomerNameorCode(customerNameCode);
    if (allDemandData && Object.keys(allDemandData).length > 0) {
      setallDemandList(allDemandData.data);
      setTotalPage(allDemandData.count);
    }
    setFlag(true);
  };

  const reset = () => {
    setState({ ...initialState });
    setallDemandList([]);
    setTotalPage(0);
    setCustomerNameorCode("");
    refreshProps(allDemandData);
    setColumns([]);
  };

  return (
    <Fragment>
      <ToastContainer />
      <Pageheader items={breadcrumbs} />
      <Row>
      <Col xl={12}>
        <Card >
          <Card.Header  className=" d-flex justify-content-between align-items-center">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                padding: "7px 5px 0 0px",
              }}
            >
              <Card.Title style={{ flexGrow: 1 }}>
                <Row>
                  <Col xl={6}>
                    <FilterComponent
                      handleSearchData={handleSearchData}
                      callAPI={CDC_GET_ALLDEMANDS}
                    />
                  </Col>
                </Row>
              </Card.Title>
              <Card.Title style={{ marginLeft: "auto" }}>
                <Button
                  onClick={handleButtonClick}
                  variant="contained"
                  className="bg-purple"
                  style={{ borderRadius: "10px", marginTop: "10px" }}
                >
                  + Add New Demand/s
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={() => handleImportExcelClick(1, 0)}>
                    Import From Excel
                  </MenuItem>
                  <MenuItem
                    onClick={() =>
                      handleAddEditOpenModal(1, 0, 0, "Add", "", "")
                    }
                  >
                    Add New Demand
                  </MenuItem>
                </Menu>
              </Card.Title>
            </div>
          </Card.Header>

          <Card.Body className="p-0">
            <div className="card-area">
            <Col md="12" style={{marginTop:"10px" ,marginBottom:"10px"}}>

              <TotalRecords
                color="outline-success"
                length={allDemandList && allDemandList?.length}
              />

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
                  allDemandList && allDemandList.length > 0 ? (
                    <DataGrid
                      rows={allDemandList || []}
                      columns={columns}
                      hideFooterPagination
                      pagination
                      paginationMode="server"
                      rowCount={totalPage} // Ensure the total number of records is provided
                      pageSize={paginationModel.pageSize}
                      page={paginationModel.page}
                      onPageChange={(newPage) =>
                        handlePaginationChange({
                          ...paginationModel,
                          page: newPage,
                        })
                      }
                      onPageSizeChange={(newPageSize) =>
                        handlePaginationChange({
                          ...paginationModel,
                          pageSize: newPageSize,
                        })
                      }
                      components={{
                        Footer: () => (
                          <CustomFooter total={allDemandList.length} />
                        ),
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

      {!!state.openModal && (
        <ModalPopUpComponent
          open={state.openModal}
          handleOpenModal={handleOpenModal}
          callEndPoint={CDC_ALLDEMANDS}
        />
      )}

      {!!state.openPopUp && (
        <AddEditNewDemandComponent
          openPopUp={state.openPopUp}
          type={state.type}
          rowId={state.rowID}
          customerCode={state.customerCode}
          allDemandList={
            allDemandList && allDemandList.length > 0 ? allDemandList : []
          }
          categoryList={
            categoryList && categoryList.length > 0 ? categoryList : []
          }
          handleAddEditOpenModal={handleAddEditOpenModal}
        />
      )}

      {!!state.openDeleteModal && (
        <DeleteModalComponent
          openDelete={state.openDeleteModal}
          rowId={state.rowID}
          handleDeleteModal={handleDelete}
          callEndPoint={CDC_GET_ALLDEMANDS}
        />
      )}
    </Fragment>
  );
}

const mapStatetoprops = (state) => {
  return {
    allDemandData: state.commonReducer.allDemandData,
    customerNameCodeData: state.commonReducer.customerNameCodeData,
    errorData: state.commonReducer.errorData,
  };
};

const mapDispatchtoprops = (dispatch) => {
  return {
    getallDemandData: (endPoint, queryParams) =>
      dispatch(callCommonGetAPI(endPoint, "allDemand", queryParams)),
    getallDemandSearchData: (endPoint) =>
      dispatch(callCommonGetAPI(endPoint, "allDemand")),
    getCustomerNameCode: (endPoint) =>
      dispatch(callCommonGetAPI(endPoint, "customerNameCode")),
    refreshProps: (title) => dispatch(callCommonRefreshProps(title)),
  };
};
export default connect(mapStatetoprops, mapDispatchtoprops)(HomeComponent);
