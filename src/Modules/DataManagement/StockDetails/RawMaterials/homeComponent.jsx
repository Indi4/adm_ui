import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { CircularProgress } from "@mui/material";
import { Card, Button, Col, Row } from "react-bootstrap";
import Pageheader from "../../../../layouts/pageheader/pageheader";
import { DataGrid } from "@mui/x-data-grid";
import FilterComponent from "../../commonComponent/filter";
import {
  initialState,
  breadcrumbs,
  RMColumns,
  generateDynamicColumns,
} from "./config";
import { CDC__GET_RAWMATERIAL } from "../../../endPointConfig";
import { currentMonth } from "../../../commonConfig";
import {
  callCommonGetAPI,
  callCommonRefreshProps,
} from "../../../../store/action/action";
import TotalRecords from "../../../../commonComponent/totalRecords";
import apiService from "../../../../services/apiService";
import { v4 as uuidv4 } from "uuid";
import { saveAs } from "file-saver";
import { ToastContainer, toast } from "react-toastify";
import config from "../../../../config";
import LoaderComponent from "../../../../commonComponent/LoaderComponent";
const BASE_URL = config.apiUrl;

function HomeComponent(props) {
  const [state, setState] = useState({ ...initialState });
  const [downloading, setDownloading] = useState(false);
  const { getRawMaterialData, rawMaterialData, refreshProps } = props;
  const [endPoint] = useState(CDC__GET_RAWMATERIAL);
  const [loading, setLoading] = useState(false); // New loading state for the whole component
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 50,
    page: 0,
  });
  const [totalPage, setTotalPage] = useState(0);
  const [columns, setColumns] = useState([]);
  const [customerNameorCode, setCustomerNameorCode] = useState("");

  useEffect(() => {
    setLoading(true);
    getRawMaterialData(`${endPoint}search=&month=${currentMonth}`);
    return () => {
      reset();
    };
  }, []);

  useEffect(() => {
    if (rawMaterialData && Object.keys(rawMaterialData).length > 0) {
      setLoading(false);
    }
  }, [rawMaterialData]);

  useEffect(() => {
    if (rawMaterialData && Object.keys(rawMaterialData).length > 0) {
      const updatedData = rawMaterialData.data.map((item) => ({
        ...item,
        id: uuidv4(), // Generate a unique ID for each row
      }));

      const dynamicColumns = generateDynamicColumns(rawMaterialData.data);

      setState((prevState) => ({
        ...prevState,
        rawMaterialList: updatedData.length > 0 ? updatedData : [],
        columns: [...RMColumns, ...dynamicColumns],
      }));
    }
  }, [rawMaterialData]);

  const handleSearchData = (rmCodeData, rmCode) => {
    if (rmCodeData && Object.keys(rmCodeData).length > 0) {
      const updatedData = rmCodeData.data.map((item) => ({
        ...item,
        id: uuidv4(), // Generate a unique ID for each row
      }));
      setState((prevState) => ({
        ...prevState,
        month: "",
        rmCode: rmCode,
        rawMaterialList: updatedData || [],
      }));
    }
  };

  // const handleExport = async () => {
  //     //  setDownloading(true);
  //     try {
  //         const response = await apiService.get(`mdm/rm_stock2/?export=xlsx`);
  //         if (!response.ok) {

  //             throw new Error('Failed to download Excel file');

  //         }
  //         const blob = await response.blob();
  //         const reader = new FileReader();
  //         reader.onload = () => {
  //             saveAs(new Blob([reader.result]), `Procurement_Plan.xlsx`);
  //         };
  //         reader.readAsArrayBuffer(blob);
  //         // console.log(response,"^^^^^^^^^^^^^^");

  //         toast.success('Excel file downloaded successfully!');
  //     } catch (error) {

  //         console.error('Error downloading Excel file:', error);
  //         toast.error('Failed to download Excel file!');
  //     }
  // };

  const handleExport = async () => {
    setDownloading(true);
    try {
      const response = await fetch(`${BASE_URL}/mdm/rm_stock2/?export=xlsx`);

      if (!response.ok) {
        throw new Error("Failed to download Excel file");
      }
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onload = () => {
        saveAs(new Blob([reader.result]), `Procurement_Plan.xlsx`);
      };
      reader.readAsArrayBuffer(blob);
      toast.success("Excel file downloaded successfully!");
    } catch (error) {
      console.error("Error downloading Excel file:", error);
      toast.error("Failed to download Excel file!");
    } finally {
      setDownloading(false);
    }
  };
  const reset = () => {
    setState({ ...initialState });
  };

  return (
    <Fragment>
      <ToastContainer />
      <Pageheader items={breadcrumbs} />
      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header className=" d-flex justify-content-between align-items-center">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "7px 5px 0 5px",
                }}
              >
                <Card.Title style={{ flexGrow: 1 }}>
                  <Row>
                    <Col xl={6}>
                      <FilterComponent
                        handleSearchData={handleSearchData}
                        callAPI={CDC__GET_RAWMATERIAL}
                        filterType="fgCode"
                      />
                    </Col>
                  </Row>
                </Card.Title>
                <Card.Title style={{ marginTop: "10px", padding: "5px" }}>
                  <Button
                    className="bg-purple"
                    variant="upload"
                    onClick={handleExport}
                  >
                    <i className="fe fe-download me-2"></i>
                    <span>{downloading ? "Downloading..." : "Export"}</span>
                  </Button>
                </Card.Title>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="card-area">
                <Col md="12">
                  <TotalRecords
                    color="outline-success"
                    length={
                      state.rawMaterialList && state.rawMaterialList.length
                    }
                  />
                  <div
                    style={{
                      marginTop: "15px",
                      display: "grid",
                      height: 500,
                      overflowY: "auto",
                    }}
                  >
                    {loading ? (
                      <LoaderComponent />
                    ) : state.rawMaterialList &&
                      state.rawMaterialList.length > 0 ? (
                      <DataGrid
                        rows={state.rawMaterialList || []}
                        columns={state.columns || []}
                        components={{
                          Footer: () => (
                            <CustomFooter
                              total={state.rawMaterialList.length}
                            />
                          ),
                        }}
                        hideFooterPagination
                        getRowId={(row) => row.id}
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
                      "No Data Found!"
                    )}
                  </div>
                </Col>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
const mapStatetoprops = (state) => {
  return {
    rawMaterialData: state.commonReducer.rawMaterialData,
  };
};
const mapDispatchtoprops = (dispatch) => {
  return {
    getRawMaterialData: (endPoint) =>
      dispatch(callCommonGetAPI(endPoint, "rawMaterial")),
    refreshProps: (title) => dispatch(callCommonRefreshProps(title)),
  };
};
export default connect(mapStatetoprops, mapDispatchtoprops)(HomeComponent);
