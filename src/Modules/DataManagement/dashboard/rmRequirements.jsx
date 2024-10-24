import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Card, CardBody, CardTitle } from "reactstrap";
import { connect } from 'react-redux';
import { GET_RM_REQUIREMENTS } from "../../endPointConfig";
import { generateDynamicColumns } from "../../commonConfig";
import { callCommonGetAPI } from '../../../store/action/action';
import { v4 as uuidv4 } from 'uuid';

function RmRequirements(props) {
    const [rmRequirementsList, setRmRequirementsList] = useState([]);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        props.getRmRequirementsData(GET_RM_REQUIREMENTS);
        return () => { reset(); };
    }, []);

    useEffect(() => {
        if (props.rmRequirementsData && Object.keys(props.rmRequirementsData).length > 0) {
            const updatedData = props.rmRequirementsData.data.map((item) => ({
                ...item,
                id: uuidv4(), // Generate a unique ID for each row
            }));
            setRmRequirementsList(updatedData);
        }
    }, [props.rmRequirementsData]);

    useEffect(() => {
        if (rmRequirementsList && rmRequirementsList.length > 0) {
            setColumns(generateDynamicColumns(rmRequirementsList, 'id'));
        }
    }, [rmRequirementsList]);

    const reset = () => {
        setRmRequirementsList([]);
    };
console.log("props.rmRequirementsData",props.rmRequirementsData)
    return (
        <div style={{ width: '100%', height: '470px', overflowY: 'auto' }}>
                    <DataGrid
                        rows={rmRequirementsList}
                        columns={columns}
                        getRowId={(row) => row.id}
                        hideFooterPagination
                        autoHeight
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
                </div>
        // <Card style={{ margin: '0px', padding: '0px' }}>
        //     <CardTitle
        //         tag="h6"
        //         className="border-bottom p-1 mb-0"
        //         style={{ padding: '0px', margin: '10px' }}>
        //         RM Requirements-Tons(Kg)
        //     </CardTitle>
        //     <CardBody style={{ margin: '0px', padding: '10px' }}>
        //         <div style={{ width: '100%', height: '500px', overflowY: 'auto' }}>
        //             <DataGrid
        //                 rows={rmRequirementsList}
        //                 columns={columns}
        //                 getRowId={(row) => row.id}
        //                 hideFooterPagination
        //                 autoHeight
        //                 sx={{
        //                     '& .MuiDataGrid-root': {
        //                         border: 'none',
        //                         //fontFamily: 'Arial, sans-serif',
        //                     },
        //                     '& .MuiDataGrid-columnHeaders': {
        //                         backgroundColor: 'rgba(255, 255, 255, 0.7)',
        //                         color: 'rgba(0, 0, 0, 0.87)',
        //                         fontSize: '15px',
        //                         borderBottom: '2px solid rgba(60, 90, 120, 0.5)',
        //                         backdropFilter: 'blur(10px)',
        //                         WebkitBackdropFilter: 'blur(10px)',
        //                         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        //                     },
        //                     '& .MuiDataGrid-cell': {
        //                         borderBottom: '1px solid #e0e0e0',
        //                     },
        //                     '& .footer-row': {
        //                         fontWeight: 'bold',
        //                         backgroundColor: '#f7f7f7',
        //                         borderTop: '2px solid #4a6fa1',
        //                     },
        //                     '& .MuiDataGrid-row:hover': {
        //                         backgroundColor: '#e0f7fa',
        //                     },
        //                     '& .MuiDataGrid-selectedRowCount': {
        //                         color: '#4a6fa1',
        //                     },
        //                     "& .MuiDataGrid-virtualScroller": {
        //                         "&::-webkit-scrollbar": {
        //                             width: "10px",
        //                             height: "10px",
        //                         },
        //                         "&::-webkit-scrollbar-thumb": {
        //                             backgroundColor: "#d3d3d3",
        //                             borderRadius: "10px",
        //                         },
        //                         "&::-webkit-scrollbar-thumb:hover": {
        //                             backgroundColor: "#bbb",
        //                         },
        //                     },
        //                     "& .MuiDataGrid-root": {
        //                         "&::-webkit-scrollbar": {
        //                             height: "10px",
        //                         },
        //                         "&::-webkit-scrollbar-thumb": {
        //                             backgroundColor: "#d3d3d3",
        //                             borderRadius: "10px",
        //                         },
        //                         "&::-webkit-scrollbar-thumb:hover": {
        //                             backgroundColor: "#bbb",
        //                         },
        //                     },
        //                     '& .MuiDataGrid-toolbarContainer': {
        //                         backgroundColor: '#f0f0f0',
        //                         borderBottom: '1px solid #d3d3d3',
        //                     },
        //                 }}
        //             />
        //         </div>
        //     </CardBody>
        // </Card>
    );
}

const mapStatetoprops = (state) => {
    return {
        rmRequirementsData: state.commonReducer.rmRequirementsData,
    };
};

const mapDispatchtoprops = (dispatch) => {
    return {
        getRmRequirementsData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'rmRequirements')),
    };
};

export default connect(mapStatetoprops, mapDispatchtoprops)(RmRequirements);
