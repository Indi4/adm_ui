import React, { useState, useEffect } from "react";
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
import { getYearList, CustomFooter } from "../../../commonConfig";
import {
  callCommonGetAPI,
  callCommonRefreshProps,
  callCommonUpdateAPI,
} from "../../../../store/action/action";
import { Button, Dropdown } from "react-bootstrap";

import DeleteModalComponent from "../../../../commonComponent/deleteModalComponent";
import FilterComponent from "../../commonComponent/filter";
import { Tooltip } from "@mui/material";
import { Card } from "react-bootstrap";
import Pageheader from "../../../../layouts/pageheader/pageheader";
import {
  Appbtn,
  Outline,
} from "../../../../components/bootstrap/buttons/data/buttondata";
import TotalRecords from "../../../../commonComponent/totalRecords";
import { Singlesquare } from "../../../../components/Bootstrap/Dropdowns/data/dropdowndata";
const style = {
  fontWeight: "bold",
};

function HomeComponent(props) {
  const [state, setState] = useState({ ...initialState });
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [isSave, setIsSave] = useState(0);
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

  useEffect(() => {
    // getCustomerNameCode(endPoint)
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

  const handleSelectYear = (year) => {
    setSelectedYear(year);
    handleChangeEvent({
      target: { name: "year", value: year },
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
    { field: "plant_location", headerName: "Location", width: 120 },
    {
      field: "fg_code",
      headerName: "FG Code",
      width: 120,
      getCellClassName: (params) => "fg-code-cell",
    },
    {
      field: "wheel_size",
      headerName: "Wheel Size",
      width: 120,
    },
    {
      field: "Jan",
      headerName: "Jan",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) => (
        <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
      ),
    },
    {
      field: "Feb",
      headerName: "Feb",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) => (
        <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
      ),
    },
    {
      field: "Mar",
      headerName: "Mar",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) => (
        <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
      ),
    },
    {
      field: "Apr",
      headerName: "Apr",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) => (
        <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
      ),
    },
    {
      field: "May",
      headerName: "May",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) => (
        <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
      ),
    },
    {
      field: "Jun",
      headerName: "Jun",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) => (
        <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
      ),
    },
    {
      field: "Jul",
      headerName: "Jul",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) => (
        <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
      ),
    },
    {
      field: "Aug",
      headerName: "Aug",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) => (
        <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
      ),
    },
    {
      field: "Sep",
      headerName: "Sep",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) => (
        <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
      ),
    },
    {
      field: "Oct",
      headerName: "Oct",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) => (
        <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
      ),
    },
    {
      field: "Nov",
      headerName: "Nov",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) => (
        <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
      ),
    },
    {
      field: "Dec",
      headerName: "Dec",
      width: 90,
      editable: (params) => params.row.id !== "footer",
      renderCell: (params) => (
        <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
      ),
    },
    {
      field: "total_quantity",
      headerName: "Total",
      width: 90,
      renderCell: (params) => (
        <div style={{ fontWeight: "bold" }}>
          {new Intl.NumberFormat("en-IN").format(params.value)}
        </div>
      ),
    },
    // {
    //     field: 'rowTotal',
    //     headerName: 'Total',
    //     width: 120,
    //     valueGetter: (params) => {
    //         const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    //         return months.reduce((sum, month) => sum + (params.row[month] || 0), 0);
    //     },
    //     renderCell: (params) => (
    //         <div style={{ fontWeight: 'bold' }}>{new Intl.NumberFormat().format(params.value)}</div>
    //     ),
    //     editable: false, // Total column is not editable
    // },
    // {
    //     field: 'revision',
    //     headerName: 'Revision',
    //     width: 90,
    //     valueGetter: (params) => {
    //         if (params.row.id === 'footer') {
    //             return ''; // Footer row should have no revision value
    //         }
    //         // Ensure `params.row.revision` is a string
    //         const revision = params.row.revision || '';
    //         // Check if it's a string and contains 'R', otherwise append ' R'
    //         return typeof revision === 'string' && revision.includes('R')
    //             ? revision
    //             : `${revision} R`;
    //     },
    // },
    // {
    //     field: 'actions',
    //     type: 'actions',
    //     width: 100,
    //     cellClassName: 'actions',
    //     getActions: ({ id }) => {
    //         const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
    //         if (isInEditMode) {
    //             return [
    //                 <GridActionsCellItem
    //                     icon={<SaveIcon />}
    //                     label="Save"
    //                     sx={{ color: 'primary.main' }}
    //                     onClick={handleSaveClick(id)}
    //                     disabled={id === 'footer'} // Disable actions for footer row
    //                 />,
    //                 <GridActionsCellItem
    //                     icon={<CancelIcon />}
    //                     label="Cancel"
    //                     className="textPrimary"
    //                     onClick={handleCancelClick(id)}
    //                     color="inherit"
    //                 // disabled={id === 'footer'} // Disable actions for footer row
    //                 />,
    //             ];
    //         }

    //         return [
    //             <GridActionsCellItem
    //                 icon={<EditIcon />}
    //                 label="Edit"
    //                 className="textPrimary"
    //                 onClick={handleEditClick(id)}
    //                 color="inherit"
    //                 sx={{ color: 'green' }}
    //                 disabled={id === 'footer'} // Disable actions for footer row
    //             />,
    //             <GridActionsCellItem
    //                 icon={<DeleteIcon />}
    //                 label="Delete"
    //                 onClick={handleDeleteClick(id)}
    //                 color="inherit"
    //                 sx={{ color: '#bf361b' }}
    //                 disabled={id === 'footer'} // Disable actions for footer row
    //             />,
    //         ];
    //     },
    // },
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
    // Debugging: log the raw values before formatting

    // Format the numbers after all calculations are done
    // months.forEach((month) => {
    //     if (typeof footerRow[month] === 'number') {
    //         console.log("footerRow[month]",footerRow[month])
    //         footerRow[month] = formatter.format(footerRow[month]);
    //     }
    // });
    // if (typeof footerRow['rowTotal'] === 'number') {
    //     footerRow['rowTotal'] = formatter.format(footerRow['rowTotal']);
    // }

    // console.log("Formatted Footer Row:", footerRow);
    return footerRow;
  };

  const rowsWithFooter = [...allDemandList, getFooterRow()];

  return (
    <>
      <div style={{ marginTop: "80px" }}>
        <ToastContainer />
        <Pageheader items={breadcrumbs} />

        <Row>
          <Col xl={12}>
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
                  <Card.Title style={{ flexGrow: 1 }}>
                    <FilterComponent
                      handleSearchData={handleSearchData}
                      callAPI={CDC_AOP}
                    />
                  </Card.Title>
                  <Card.Title style={{ marginLeft: "auto" }}>
                    <div
                      style={{
                        marginTop: "7px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div className="btn-group mt-2 mb-2 flex-wrap">
                        {Singlesquare.filter(
                          (item) => item.color === "outline-primary"
                        ).map((item, index) => (
                          <Dropdown className="me-2 my-2" key={index}>
                            <Dropdown.Toggle
                              variant={item.color}
                              type="button"
                              className={`btn btn-${item.color} dropdown-toggle d-flex align-items-center`}
                            >
                              {selectedYear || "Year"}
                              {selectedYear && (
                                <span
                                  className="ms-2"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    resetYearSelection();
                                  }}
                                  style={{
                                    cursor: "pointer",
                                    color: "red",
                                    fontSize: "0.8rem",
                                    marginLeft: "5px",
                                  }}
                                >
                                  &#10005;
                                </span>
                              )}
                            </Dropdown.Toggle>
                            <Dropdown.Menu role="menu">
                              {yearList.map((year, idx) => (
                                <li key={idx}>
                                  <Dropdown.Item
                                    onClick={() => handleSelectYear(year)}
                                  >
                                    {year}
                                  </Dropdown.Item>
                                </li>
                              ))}
                            </Dropdown.Menu>
                          </Dropdown>
                        ))}
                      </div>

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
              <Card.Body>
                <div className="card-area">
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
                    {allDemandList && allDemandList.length > 0 ? (
                      <DataGrid
                        rows={rowsWithFooter}
                        columns={MonthColumns}
                        editMode="row"
                        components={{
                          Footer: () => (
                            <CustomFooter total={allDemandList.length} />
                          ),
                        }}
                        // hideFooterPagination
                        // rowModesModel={rowModesModel}
                        // onRowModesModelChange={handleRowModesModelChange}
                        // onRowEditStop={handleRowEditStop}

                        // processRowUpdate={processRowUpdate}
                        // pagination
                        // paginationMode="server"
                        // rowCount={totalPage}  // Ensure the total number of records is provided
                        // pageSize={paginationModel.pageSize}
                        // page={paginationModel.page}
                        // onPageChange={(newPage) => handlePaginationChange({ ...paginationModel, page: newPage })}
                        // onPageSizeChange={(newPageSize) => handlePaginationChange({ ...paginationModel, pageSize: newPageSize })}
                        // slotProps={{
                        //     toolbar: { setRows, setRowModesModel },
                        // }}
                        // getRowClassName={(params) =>
                        //     params.id === `${rowsWithFooter.length - 1}` ? 'footer-row' : ''
                        // }

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
      </div>
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