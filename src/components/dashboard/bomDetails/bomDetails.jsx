// import React, { useEffect, useState, useMemo } from "react";
// import { connect } from 'react-redux';
// import { Col, Card, CardBody, CardHeader, Row, CardTitle } from "reactstrap";
// import Button from "@mui/material/Button";
// import { DataGrid } from "@mui/x-data-grid";
// import ModalPopUpComponent from './../../../../../commonComponent/modalPopUpComponent';
// import { BOMColumns, initialState } from "../config";
// import { MDM_GET_BOMDETAILS, MDM_SAVE_BOMDETAILS } from "../../../../endPointConfig";
// import { CustomFooter } from "../../../../commonConfig"
// import { callCommonGetAPI } from './../../../store/action/action';
// import { ToastContainer, toast } from "react-toastify";
// import EditBOMComponent from "./editBOMComponent";
// import DeleteModalComponent from "../../../../../commonComponent/deleteModalComponent";
// import { IconButton } from "@mui/material";
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

// function BOMComponent(props) {
//     const [state, setState] = useState({ ...initialState });
//     const [endPoint] = useState(MDM_GET_BOMDETAILS);
//     const [BOMList, setBOMList] = useState([]);

//     const [paginationModel, setPaginationModel] = useState({ pageSize: 20, page: 0 });
//     const [totalPage, setTotalPage] = useState(0);

//     useEffect(() => {
//         props.getBOMData(`${endPoint}`);
//         return () => { reset(); }
//     }, []);

//     useEffect(() => {
//         if (props.BOMData && Object.keys(props.BOMData).length > 0) {
//             const dataCount = props.BOMData.count || props.BOMData.data.length;  

//             setBOMList(props.BOMData.data);
//             setTotalPage(dataCount);  // Use the fallback count
//         }
//     }, [props.BOMData]);


//     const handleOpenModal = (openModal, success, message = "") => {
//         setState({ openModal: openModal, success });
//         if (success && message !== "") {
//             toast.success(message);
//             props.getBOMData(`${endPoint}`);
//         } else if (!success && message !== "") {
//             toast.error(message);
//         }
//     };

//     const handleEditOpenModal = (open, rowId, success, message = "") => {
//         setState({ ...state, openEditModal: open, rowID: rowId, success });
//         if (success && message !== "") {
//             toast.success(message);
//             props.getBOMData(`${endPoint}`);
//         } else if (!success && message !== "") {
//             toast.error(message);
//         }
//     };

//     // const handlePaginationChange = (newPagination) => {
//     //     setPaginationModel(newPagination);
//     // };

//     const handlePaginationChange = (newPagination) => {
//         setPaginationModel(newPagination);
      
//         const offset = newPagination.page * newPagination.pageSize;
//         const limit = newPagination.pageSize;
      
//         const paginatedEndPoint = `${endPoint}?offset=${offset}&limit=${limit}`;
//         props.getBOMData(paginatedEndPoint);  // Call the API with pagination parameters
//       };
      
//     const handleDelete = (open, rowId, success, message = "") => {
//         setState({ ...state, openDeleteModal: open, rowID: rowId, success });
//         if (success && message !== "") {
//             toast.success(message);
//             props.getBOMData(`${endPoint}`);
//         } else if (!success && message !== "") {
//             toast.error(message);
//         }
//     };

//     const reset = () => {
//         setState({ ...initialState });
//         setBOMList([]);
//         setTotalPage(0);
//     };

//     const memoizedColumns = useMemo(() => {
//         if (BOMColumns) {
//             const actionsColumn = {
//                 field: "actions",
//                 headerName: "Actions",
//                 renderCell: (params) => (
//                     <div style={{ display: "flex", justifyContent: "flex-end" }}>
//                         <IconButton
//                             variant="outlined"
//                             sx={{
//                                 color: "green",
//                                 margin: "5px",
//                                 borderRadius: "15px",
//                                 maxWidth: "150px",
//                                 fontWeight: "bold",
//                                 fontSize: "12px",
//                             }}
//                             onClick={() => handleEditOpenModal(1, params.row.id, 0)}
//                         >
//                             <EditIcon />
//                         </IconButton>
//                         <IconButton
//                             variant="outlined"
//                             sx={{
//                                 color: "#bf361b",
//                                 margin: "5px",
//                                 borderRadius: "15px",
//                                 maxWidth: "150px",
//                                 fontWeight: "bold",
//                                 fontSize: "12px",
//                             }}
//                             onClick={() => handleDelete(1, params.row.id, 0, "")}
//                         >
//                             <DeleteIcon />
//                         </IconButton>
//                     </div>
//                 ),
//                 width: 250,
//             };

//             return [...BOMColumns, actionsColumn];
//         }
//         return [];
//     }, [BOMColumns]);

//     return (
//         <div>
//             <ToastContainer />
//             <Row>
//                 <Col md="12">
//                     <Card>
//                         <CardTitle tag="h6" className="border-bottom p-3 mb-0">
//                             BOM Details
//                         </CardTitle>
//                         <CardBody>
//                             <CardBody>
//                                 <CardHeader>
//                                     <div className="d-flex align-items-center justify-content-between">
//                                         <label>All BOM Records</label>
//                                         <div className="d-flex align-items-center">
//                                             <Button
//                                                 onClick={() => handleOpenModal(1, 0)}
//                                                 variant="contained"
//                                                 color="primary"
//                                                 style={{ borderRadius: "15px" }}
//                                             >
//                                                 Sync ERP Data
//                                             </Button>
//                                         </div>
//                                     </div>
//                                 </CardHeader>
//                                 <div style={{ marginTop: "15px", display: 'grid', height: 500, overflowY: 'auto' }}>
//                                     {BOMList && BOMList.length > 0 ? (
//                                         <DataGrid
//                                             rows={BOMList}
//                                             columns={BOMColumns || []}
//                                             getRowId={(row) => row.id }
//                                             pageSize={paginationModel.pageSize}  // Set page size from pagination model
//                                             rowCount={totalPage}  // Total number of records
//                                             paginationMode="server"  // Enable server-side pagination
//                                             onPageChange={(newPage) => handlePaginationChange({ ...paginationModel, page: newPage })}  // Handle page change
//                                             onPageSizeChange={(newPageSize) => handlePaginationChange({ ...paginationModel, pageSize: newPageSize })}  // Handle page size change
//                                             pagination
//                                             // hideFooterPagination
//                                             components={{
//                                                 Footer: () => <CustomFooter total={BOMList.length} />,
//                                             }}

//                                             initialState={{ pinnedColumns: { right: ['actions'] } }}
//                                             sx={{
//                                                 '& .MuiDataGrid-root': {
//                                                     border: 'none',
//                                                 },
//                                                 '& .MuiDataGrid-columnHeaders': {
//                                                     backgroundColor: 'rgba(255, 255, 255, 0.7)',
//                                                     color: 'rgba(0, 0, 0, 0.87)',
//                                                     fontSize: '15px',
//                                                     borderBottom: '2px solid rgba(60, 90, 120, 0.5)',
//                                                     backdropFilter: 'blur(10px)',
//                                                     WebkitBackdropFilter: 'blur(10px)',
//                                                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                                                 },
//                                                 "& .MuiDataGrid-columnHeaderTitle": {
//                                                     whiteSpace: "normal",   // Make sure the header title also wraps
//                                                     textAlign: "center",    // Center the text
//                                                 },
//                                                 '& .MuiDataGrid-cell': {
//                                                     borderBottom: '1px solid #e0e0e0',
//                                                 },
//                                                 '& .footer-row': {
//                                                     fontWeight: 'bold',
//                                                     backgroundColor: '#f7f7f7',
//                                                     borderTop: '2px solid #4a6fa1',
//                                                 },
//                                                 '& .MuiDataGrid-row:hover': {
//                                                     backgroundColor: '#e0f7fa',
//                                                 },
//                                                 '& .MuiDataGrid-selectedRowCount': {
//                                                     color: '#4a6fa1',
//                                                 },
//                                                 "& .MuiDataGrid-virtualScroller": {
//                                                     "&::-webkit-scrollbar": {
//                                                         width: "10px",
//                                                         height: "10px",
//                                                     },
//                                                     "&::-webkit-scrollbar-thumb": {
//                                                         backgroundColor: "#d3d3d3",
//                                                         borderRadius: "10px",
//                                                     },
//                                                     "&::-webkit-scrollbar-thumb:hover": {
//                                                         backgroundColor: "#bbb",
//                                                     },
//                                                 },
//                                                 "& .MuiDataGrid-root": {
//                                                     "&::-webkit-scrollbar": {
//                                                         height: "10px",
//                                                     },
//                                                     "&::-webkit-scrollbar-thumb": {
//                                                         backgroundColor: "#d3d3d3",
//                                                         borderRadius: "10px",
//                                                     },
//                                                     "&::-webkit-scrollbar-thumb:hover": {
//                                                         backgroundColor: "#bbb",
//                                                     },
//                                                 },
//                                                 '& .MuiDataGrid-toolbarContainer': {
//                                                     backgroundColor: '#f0f0f0',
//                                                     borderBottom: '1px solid #d3d3d3',
//                                                 },
//                                             }}
//                                         />
//                                     ) : (
//                                         "No Data Found"
//                                     )}
//                                 </div>
//                             </CardBody>
//                         </CardBody>
//                     </Card>
//                 </Col>
//             </Row>
//             <ModalPopUpComponent
//                 open={state.openModal}
//                 handleOpenModal={handleOpenModal}
//                 callEndPoint={MDM_SAVE_BOMDETAILS}
//             />
//             <EditBOMComponent
//                 openEdit={state.openEditModal}
//                 rowId={state.rowID}
//                 BOMList={BOMList}
//                 handleEditOpenModal={handleEditOpenModal}
//             />
//             <DeleteModalComponent
//                 openDelete={state.openDeleteModal}
//                 rowId={state.rowID}
//                 handleDeleteModal={handleDelete}
//                 callEndPoint={MDM_GET_BOMDETAILS}
//             />
//         </div>
//     );
// }

// const mapStatetoprops = (state) => {
//     return {
//         BOMData: state.commonReducer.bomData,
//         saveBOMData: state.commonReducer.saveBOMData,
//     };
// };

// const mapDispatchtoprops = (dispatch) => {
//     return {
//         getBOMData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'BOM')),
//     };
// };

// export default connect(mapStatetoprops, mapDispatchtoprops)(BOMComponent);
