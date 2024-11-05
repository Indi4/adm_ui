import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { initialState, breadcrumbs } from "./config";
import { Col, CardHeader, Label, Row, CardTitle } from "reactstrap";
import ModalPopUpComponent from "../../../../commonComponent/modalPopUpComponent";
import {
  GridRowModes,
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import { CDC_SAVE_AOP, CDC_AOP, GETALL_LIST } from "../../../endPointConfig";
import {
  getYearList,
  CustomFooter,
  renderTooltipCell,
} from "../../../commonConfig";
import {
  callCommonGetAPI,
  callCommonRefreshProps,
  callCommonUpdateAPI,
} from "../../../../store/action/action";
import { Button, Dropdown } from "react-bootstrap";

import DeleteModalComponent from "../../../../commonComponent/deleteModalComponent";
import FilterComponent from "../../commonComponent/filter";
import { Autocomplete, Grid, TextField, Tooltip } from "@mui/material";
import { Card } from "react-bootstrap";
import Pageheader from "../../../../layouts/pageheader/pageheader";
import {
  Appbtn,
  Outline,
} from "../../../../components/bootstrap/buttons/data/buttondata";
import TotalRecords from "../../../../commonComponent/totalRecords";
import { Singlesquare } from "../../../../components/Bootstrap/Dropdowns/data/dropdowndata";
import LoaderComponent from "../../../../commonComponent/LoaderComponent";
const style = {
  fontWeight: "bold",
};

function HomeComponent(props) {
  const [state, setState] = useState({ ...initialState });
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [isSave, setIsSave] = useState(0);
  const [loading, setLoading] = useState(false);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  const [endPoint] = useState(GETALL_LIST);
  const [totalPage, setTotalPage] = useState(0);
  const [customerNameorCode, setCustomerNameorCode] = useState("");
  const {
    allDemandData,
    errorData,
    updateMonthlyDemandDetailsData,
    updateMonthlyDemandDetails,
    refreshProps,
    getallDemandData,
    getCustomerNameCode,
  } = props;
  const [allDemandList, setallDemandList] = useState([]);
  const [yearList, setYearList] = useState([]);

  // const yearOptions = yearList.map((year) => ({ year }));
  useEffect(() => {
    // getCustomerNameCode(endPoint)
    setLoading(true);
    getallDemandData(`${CDC_AOP}?year=${state.year}`);
    const years = getYearList(10, 5);
    setYearList(years);
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

  useEffect(() => {
    if (!!isSave && Object.keys(updateMonthlyDemandDetailsData).length > 0) {
      setIsSave(0);
      toast.success(updateMonthlyDemandDetailsData.message);
      customerNameorCode !== ""
        ? getallDemandData(
            `${CDC_AOP}?year=${
              !!state.year ? state.year : ""
            }&search=${customerNameorCode}`
          )
        : getallDemandData(`${CDC_AOP}?year=${!!state.year ? state.year : ""}`);
    }
    if (
      errorData &&
      Object.keys(errorData).length > 0 &&
      !errorData.is_success
    ) {
      setIsSave(0);
      toast.error(errorData.error);
    }
  }, [updateMonthlyDemandDetailsData, errorData]);

  const handleOpenModal = (openModal, success, message = "") => {
    setState({ openModal: openModal, success });
    if (!!success && message !== "") {
      toast.success(message);
      refreshProps("allDemandData");
      customerNameorCode !== ""
        ? getallDemandData(
            `${CDC_AOP}?year=${
              !!state.year ? state.year : ""
            }&search=${customerNameorCode}`
          )
        : getallDemandData(`${CDC_AOP}?year=${!!state.year ? state.year : ""}`);
    } else if (!success && message !== "") {
      toast.error(message);
    }
  };

  const handleChangeEvent = (e, i) => {
    customerNameorCode !== ""
      ? getallDemandData(
          `${CDC_AOP}?year=${e.target.value}&search=${customerNameorCode}`
        )
      : getallDemandData(`${CDC_AOP}?year=${e.target.value}`);
  };

  const handlePaginationChange = (newPagination) => {
    setPaginationModel(newPagination);
    getallDemandData(`${endPoint}?page=${newPagination.page + 1}`);
  };

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDelete = (open, id, success, message) => {
    setState({ ...state, openDeleteModal: open, rowID: id, success });
    if (!!success && message !== "") {
      toast.success(message);
      refreshProps("allDemandData");
      customerNameorCode !== ""
        ? getallDemandData(
            `${CDC_AOP}?year=${
              !!state.year ? state.year : ""
            }&search=${customerNameorCode}`
          )
        : getallDemandData(`${CDC_AOP}?year=${!!state.year ? state.year : ""}`);
    } else if (!success && message !== "") {
      toast.error(message);
    }
  };

  const handleDeleteClick = (id) => () => {
    handleDelete(1, id, 0, "");
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
  };

  const processRowUpdate = (newRow) => {
    const originalRow = rows.find((row) => row.id === newRow.id) || {};
    const updatedRow = { ...newRow };
    const columnsToExclude = ["rowTotal", "revision"];
    columnsToExclude.forEach((column) => {
      if (originalRow[column] !== undefined) {
        updatedRow[column] = originalRow[column];
      }
    });
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    const newArr = [...allDemandList];
    const index1 = newArr.findIndex((item) => item.id === updatedRow.id);
    if (index1 !== -1) {
      newArr[index1] = updatedRow;
      setallDemandList(newArr);
    }
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleSave = () => {
    refreshProps("updateMonthlyDemandDetailsData");
    refreshProps("errorData");
    const payload = allDemandList.filter((item) =>
      [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ].some((month) => typeof item[month] === "string")
    );
    if (payload.length > 0) {
      payload.forEach((item) => {
        [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ].forEach((month) => {
          if (typeof item[month] === "string") {
            item[month] = parseInt(item[month], 10); // Convert string to integer
          }
        });
      });
      updateMonthlyDemandDetails(`${CDC_AOP}`, payload);
      setIsSave(1);
    }
  };

  const handleCancel = () => {
    reset();
  };

  const handleSearchData = (allDemandData, data, customerNameCode) => {
    setCustomerNameorCode(customerNameCode);
    if (allDemandData && Object.keys(allDemandData).length > 0) {
      setallDemandList(allDemandData.data);
      setTotalPage(allDemandData.count);
    }
  };

  const [selectedYear, setSelectedYear] = useState(null);

  const handleSelectYear = (e) => {
    const { name, value } = e.target;
    setSelectedYear(value);
    handleChangeEvent({
      target: { name: "year", value: value },
    });
  };

  const resetYearSelection = () => {
    setSelectedYear(null);
    handleChangeEvent({
      target: { name: "year", value: "" },
    });
  };

  const reset = () => {
    setCustomerNameorCode("");
    setallDemandList([]);
    setState({ ...initialState });
    setRows([]);
    setRowModesModel({});
    refreshProps("allDemandData");
  };

  // Month columns with conditional editing
  const MonthColumns = [
    {
      field: "customer_name",
      headerName: "Customer Name",
      width: 150,
      renderCell: (params) => (
        <Tooltip title={params.value} arrow>
          <span
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "block",
              maxWidth: "100%",
            }}
          >
            {params.value}
          </span>
        </Tooltip>
      ),
    },
    {
      field: "plant_location",
      headerName: "Location",
      width: 120,
      renderCell: (params) => renderTooltipCell(params.value),
    },
    {
      field: "fg_code",
      headerName: "FG Code",
      width: 120,
      getCellClassName: (params) => "fg-code-cell",
      renderCell: (params) => renderTooltipCell(params.value),
    },
    {
      field: "wheel_size",
      headerName: "Wheel Size",
      width: 120,
      renderCell: (params) => renderTooltipCell(params.value),
    },
    {
      field: "Jan",
      headerName: "Jan",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) =>
        renderTooltipCell(
          <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
        ),
    },
    {
      field: "Feb",
      headerName: "Feb",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) =>
        renderTooltipCell(
          <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
        ),
    },
    {
      field: "Mar",
      headerName: "Mar",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) =>
        renderTooltipCell(
          <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
        ),
    },
    {
      field: "Apr",
      headerName: "Apr",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) =>
        renderTooltipCell(
          <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
        ),
    },
    {
      field: "May",
      headerName: "May",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) =>
        renderTooltipCell(
          <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
        ),
    },
    {
      field: "Jun",
      headerName: "Jun",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) =>
        renderTooltipCell(
          <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
        ),
    },
    {
      field: "Jul",
      headerName: "Jul",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) =>
        renderTooltipCell(
          <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
        ),
    },
    {
      field: "Aug",
      headerName: "Aug",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) =>
        renderTooltipCell(
          <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
        ),
    },
    {
      field: "Sep",
      headerName: "Sep",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) =>
        renderTooltipCell(
          <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
        ),
    },
    {
      field: "Oct",
      headerName: "Oct",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) =>
        renderTooltipCell(
          <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
        ),
    },
    {
      field: "Nov",
      headerName: "Nov",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) =>
        renderTooltipCell(
          <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
        ),
    },
    {
      field: "Dec",
      headerName: "Dec",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) =>
        renderTooltipCell(
          <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
        ),
    },
    {
      field: "total_quantity",
      headerName: "Total",
      width: 90,
      renderCell: (params) =>
        renderTooltipCell(
          <div style={{ fontWeight: "bold" }}>
            {new Intl.NumberFormat("en-IN").format(params.value)}
          </div>
        ),
    },
  ];

  const getFooterRow = () => {
    const footerRow = {
      id: "footer", // This ID is crucial for the checks
      customer_name: "Total",
      fg_code: "",
      revision: "",
    };

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const formatter = new Intl.NumberFormat("en-IN");

    let totalRowSum = 0;

    months.forEach((month) => {
      const monthSum = allDemandList.reduce((sum, row) => {
        const value = parseFloat(row[month]);
        return sum + (isNaN(value) ? 0 : value);
      }, 0);
      footerRow[month] = monthSum; // Store raw number
      totalRowSum += monthSum; // Add to total sum
    });
    footerRow["rowTotal"] = totalRowSum;

    return footerRow;
  };

  const rowsWithFooter = [...allDemandList, getFooterRow()];

  return (
    <>
      <Fragment>
        <ToastContainer />
        <Pageheader items={breadcrumbs} />

        <Row>
          <Col xl={12}>
            <Card>
            <Card.Header className=" d-flex justify-content-between align-items-center">
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "7px 5px 0 5px" }}>

                  <Card.Title style={{ flexGrow: 1 }}>
                    <FilterComponent
                      handleSearchData={handleSearchData}
                      callAPI={CDC_AOP}
                    />
                  </Card.Title>
                  <Card.Title style={{ marginLeft: "auto" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Grid item sx={{marginTop:"20px"}}>
                        <Autocomplete
                          id="year-select-autocomplete"
                          options={yearList || []}
                          value={selectedYear || ""}
                          onChange={(event, newValue) => {
                            handleSelectYear({
                              target: {
                                name: "year",
                                value: newValue ? newValue : "",
                              },
                            });
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Years"
                              style={{ width: "120px", height: "60px" }}
                              InputProps={{
                                ...params.InputProps,
                                style: {
                                  height: "70%",
                                  fontSize: "0.9rem",
                                  textAlign: "start",
                                  paddingBottom: "10px",
                                  color: "#28afd0",
                                  
                                  
                                },
                              }}
                              InputLabelProps={{
                                style: {
                                  fontSize: "0.8rem",
                                  textAlign: "start",
                                  width: "100%",
                                  position: "absolute",
                                  paddingBottom: "15px",
                                  color: "#28afd0",
                                },
                              }}
                            />
                          )}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "10px",
                              "& fieldset": {
                                borderColor: "#28afd0 !important", // Default border color
                                borderWidth: "2px !important", // Increase border width
                              },
                              "&:hover fieldset": {
                                borderColor: "#0c98bb !important", // Border color on hover
                                borderWidth: "2px !important", // Ensure hover border width is consistent
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#0c98bb !important", // Border color when focused
                                borderWidth: "2px !important", // Ensure focused border width is consistent
                              },
                            },
                            "& .MuiInputBase-input::placeholder": {
                              color: "cyan !important", // Set placeholder color to cyan
                              fontSize: "0.8rem", // Reduce placeholder font size
                            },
                            width: 150,
                          }}
                        />
                      </Grid>

                      <Button
                        onClick={() => handleOpenModal(1, 0)}
                        variant="upload"
                        className="bg-purple"
                        sx={{ borderRadius: "10px", marginLeft: "10px" }}
                      >
                        <i className="fe fe-upload me-2"></i>
                        Import AOP
                      </Button>
                    </div>
                  </Card.Title>
                </div>
              </Card.Header>
              <Card.Body className="p-0">
                <div className="card-area">
              <Col md="12" style={{marginTop:"10px" ,marginBottom:"10px"}}>

                  <TotalRecords
                    color="outline-success"
                    length={allDemandList && allDemandList.length}
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
                    ) : allDemandList && allDemandList.length > 0 ? (
                      <DataGrid
                        rows={rowsWithFooter}
                        columns={MonthColumns}
                        editMode="row"
                        components={{
                          Footer: () => (
                            <CustomFooter total={allDemandList.length} />
                          ),
                        }}
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

                  {allDemandList && allDemandList.length > 0 && (
                    <div
                      style={{
                        marginTop: "7px",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      {Outline.filter(
                        (idx) => idx.color === "outline-danger"
                      ).map((idx, out) => (
                        <Button
                          key={out}
                          variant={idx.color}
                          onClick={handleCancel}
                          style={{
                            width: "100px",
                            height: "30px",
                            marginRight: "10px",
                          }}
                        >
                          Cancel
                        </Button>
                      ))}

                      {Appbtn.filter((idx) => idx.icon === "save").map(
                        (idx, ap) => (
                          <Button
                            key={ap}
                            variant="secondary"
                            className="btn btn-app"
                            onClick={handleSave}
                            style={{ width: "100px", height: "30px" }}
                          >
                            <i className={`me-2 fs-13 fa fa-${idx.icon}`}></i>
                            Save
                          </Button>
                        )
                      )}
                    </div>
                  )}
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
            callEndPoint={CDC_SAVE_AOP}
          />
        )}
        {!!state.openDeleteModal && (
          <DeleteModalComponent
            openDelete={state.openDeleteModal}
            rowId={state.rowID}
            handleDeleteModal={handleDelete}
            callEndPoint={CDC_AOP}
          />
        )}
      </Fragment>
    </>
  );
}

const mapStatetoprops = (state) => {
  return {
    allDemandData: state.commonReducer.allDemandData,
    updateMonthlyDemandDetailsData:
      state.commonReducer.updateMonthlyDemandDetailsData,
    errorData: state.commonReducer.errorData,
  };
};

const mapDispatchtoprops = (dispatch) => {
  return {
    updateMonthlyDemandDetails: (endPoint, payLoad) =>
      dispatch(callCommonUpdateAPI(endPoint, payLoad, "monthlyDemandDetails")),
    getallDemandData: (endPoint) =>
      dispatch(callCommonGetAPI(endPoint, "allDemand")),
    refreshProps: (title) => dispatch(callCommonRefreshProps(title)),
  };
};
export default connect(mapStatetoprops, mapDispatchtoprops)(HomeComponent);
