import React, { useEffect, useState, Fragment } from "react";
import { connect } from 'react-redux'
import { Alert, Card, Button, Col, Row } from 'react-bootstrap'
import { Grid, Autocomplete, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import Pageheader from '../../../../../layouts/pageheader/pageheader'
import ModalPopUpComponent from '../../../../../commonComponent/modalPopUpComponent'
import { GridRowModes, DataGrid, GridActionsCellItem, GridRowEditStopReasons } from "@mui/x-data-grid";
import FilterComponent from "../../../commonComponent/filter";
import { initialState, breadcrumbs } from "./config"
import { months, years, currentYear, currentMonth, renderTooltipCell } from "../../../../commonConfig";
import { CDC_SAVE_WEEKWISE_DEMANDS, CDC_WEEKWISE_DEMANDS, GETALL_LIST } from "../../../../endPointConfig"
import { callCommonGetAPI, callCommonRefreshProps, callCommonUpdateAPI } from '../../../../../store/action/action'
import { toast } from "react-toastify";
import debounce from 'lodash/debounce';
import TotalRecords from '../../../../../commonComponent/totalRecords'
import { Appbtn, Outline } from "../../../../../components/bootstrap/buttons/data/buttondata";

import LoaderComponent from "../../../../../commonComponent/LoaderComponent";

import '../../../../../layouts/styles/Common.css'


function HomeComponent(props) {
    const [state, setState] = useState({ ...initialState });
    const [rows, setRows] = useState([]);
    const [rowModesModel, setRowModesModel] = useState({});
    const [customerList, setCustomerList] = useState([]);
    const [paginationModel, setPaginationModel] = useState({ pageSize: 5, page: 0 });
    const [data, setData] = useState([]);
    const [endPoint] = useState(GETALL_LIST);
    const [totalPage, setTotalPage] = useState(0);
    const [fgRmStockList, setFgRmStockList] = useState([]);
    const [customerNameorCode, setCustomerNameorCode] = useState("")
    const { customerNameCodeData, weekDemandData, errorData, refreshProps, getweekDemandData, updateWeeklyDemandDetails, updateWeeklyDemandDetailsData } = props;
    const [allDemandList, setallDemandList] = useState([]);
    const [columns, setColumns] = useState([]);
    const [rowss, setRowss] = useState([]);
    const [isSet, setIsSet] = useState(0);
    //const [onPageLoad, setOnpageLoad] = useState(1);
    const [isSave, setIsSave] = useState(0)
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        if (state.demand_year !== "" && state.demand_month !== "") {
            getweekDemandData(`${CDC_WEEKWISE_DEMANDS}?demand_month=${state.demand_month}&demand_year=${state.demand_year}`)
        } else if (state.demand_year === "" && state.demand_month === "") {
            getweekDemandData(`${CDC_WEEKWISE_DEMANDS}?demand_month=${currentMonth}&demand_year=${currentYear.demand_year}`)
        }
        //setCurrentYear("")
        return () => { reset() }
    }, []);

    useEffect(() => {
        if (weekDemandData && weekDemandData?.data?.length > 0) {
            setIsSet(1)
            setallDemandList(weekDemandData.data);
            let tempArr = []
            weekDemandData.data.length > 0 && weekDemandData.data.map((item) => {
                tempArr.push({ 'id': item._id, 'fg_stock_qty': item.fg_stock_qty, 'rm_stock_qty': item.rm_stock_qty })
            })
            setFgRmStockList(tempArr)
            setLoading(false);
        }
    }, [weekDemandData]);

    useEffect(() => {
        if (errorData && Object.keys(errorData).length > 0 && !errorData.is_success) {
            toast.error(errorData.error);
        }
    }, [errorData]);

    useEffect(() => {
        if (!!isSave && Object.keys(updateWeeklyDemandDetailsData).length > 0) {
            setIsSave(0)
            toast.success(updateWeeklyDemandDetailsData.message)
            customerNameorCode !== '' ?
                getweekDemandData(`${CDC_WEEKWISE_DEMANDS}?demand_month=${state.demand_month !== "" ? state.demand_month : currentMonth}&demand_year=${state.demand_month !== "" ? state.demand_year : currentYear.demand_year}&search=${customerNameorCode}`)
                : getweekDemandData(`${CDC_WEEKWISE_DEMANDS}?demand_month=${state.demand_month !== "" ? state.demand_month : currentMonth}&demand_year=${state.demand_month !== "" ? state.demand_year : currentYear.demand_year}`)
        }
        if (errorData && Object.keys(errorData).length > 0 && !errorData.is_success) {
            setIsSave(0)
            toast.error(errorData.error)
        }
    }, [updateWeeklyDemandDetailsData, errorData])

    useEffect(() => {
        if (transformData && allDemandList && allDemandList.length > 0 && isSet) {
            setIsSet(0);
            const rowst = transformData(allDemandList);
            setRowss(rowst);
            let tempArr = []
            allDemandList.length > 0 && allDemandList.map((item) => {
                tempArr.push({ 'id': item._id, 'fg_stock_qty': item.fg_stock_qty, 'rm_stock_qty': item.rm_stock_qty })
            })
            setFgRmStockList(tempArr)
        }
    }, [allDemandList]);

    const handleOpenModal = (openModal, success, message = "") => {
        setState({ openModal: openModal, success });
        if (!!success && message !== "") {
            toast.success(message);
            customerNameorCode !== '' ?
                getweekDemandData(`${CDC_WEEKWISE_DEMANDS}?demand_month=${state.demand_month}&demand_year=${state.demand_year}&search=${customerNameorCode}`)
                : getweekDemandData(`${CDC_WEEKWISE_DEMANDS}?demand_month=${state.demand_month}&demand_year=${state.demand_year}`)
        } else if (!success && message !== "") {
            toast.error(message);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
        if (name === "demand_month") {
            getweekDemandData(`${CDC_WEEKWISE_DEMANDS}?demand_month=${value}&demand_year=${state.demand_year}`)
        }
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

    const handleCancelClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });
    };

    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    const handlePaginationChange = (newPagination) => {
        setPaginationModel(newPagination);
        getweekDemandData(`${endPoint}?page=${newPagination.page + 1}`);
    };

    const handleSearchData = (weekDemandData, data, customerNameorCode) => {
        if (weekDemandData && Object.keys(weekDemandData).length > 0) {
            setCustomerNameorCode(customerNameorCode)
            setIsSet(1);
            refreshProps("allDemandList")
            setallDemandList(weekDemandData.data)
        } else
            setallDemandList([])
    }

    const handleSave = () => {
        const keysToRemove = ["customer_name", "plant_location", "editable", "fg_stock_qty", "rm_stock_qty", "rolling_plan_qty", "total_quantity", "fg_part_no", "isNew", "id"];
        // Create payload by filtering records where any demand contains string data
        const payload = allDemandList.map((item, index) => {
            // Ensure demands is an array, and handle cases where it might not be
            const demands = rowss[index] ? convertToArrayOfObjects(rowss[index]) : (item.demands || []);
            // Find all keys that include "Color" in the demands
            const colorKeys = demands.reduce((acc, demand) => {
                const keysWithColor = Object.keys(demand).filter(key => key.includes("Color"));
                return [...acc, ...keysWithColor];
            }, []);
            // Remove duplicate keys
            const uniqueColorKeys = [...new Set(colorKeys)];
            // Add all "Color" keys to keysToRemove
            const updatedKeysToRemove = [...keysToRemove, ...uniqueColorKeys];
            // Remove unnecessary keys from each demand object
            const cleanedDemands = removeKeys(demands, updatedKeysToRemove);

            // Check if any of the cleaned demands contain string data
            const hasStringData = cleanedDemands.some(demand =>
                Object.values(demand).some(value => typeof value === "string")
            );
            // If any demand has string data, return the full item with all cleaned demands
            if (hasStringData) {
                return {
                    ...item,
                    demands: cleanedDemands, // Include all cleaned demands
                };
            }
            return null; // Return null if no demands with string data
        }).filter(item => item !== null); // Remove any null entries from the payload

        // Call the function to update the weekly demand details with the filtered payload
        updateWeeklyDemandDetails(`${CDC_WEEKWISE_DEMANDS}`, payload);
        setIsSave(1);
    };

    const handleDeleteClick = (id) => () => {
        handleDelete(1, id, 0, "")
    };

    const handleDelete = (open, id, success, message) => {
        //const result = allDemandList.find(item => item._id = id)
        setState({ ...state, openDeleteModal: open, rowID: id, success })
        if (!!success && message !== "") {
            toast.success(message)
            refreshProps("weekDemandData")
            customerNameorCode !== '' ?
                getweekDemandData(`${CDC_WEEKWISE_DEMANDS}?search=${customerNameorCode}`)
                : getweekDemandData(`${CDC_WEEKWISE_DEMANDS}?demand_month=${state.demand_month}&demand_year=${state.demand_year}`)
        } else if (!success && message !== "") {
            toast.error(message)
        }
    }

    const handleCancel = () => {
        reset()
    }

    const processRowUpdate = (newRow) => {
        const rowIndex = rowss.findIndex((item) => item.id === newRow.id);
        let tempArray = [...fgRmStockList];
        if (newRow.hasOwnProperty('isNew'))
            tempArray[rowIndex] = { 'id': newRow.id, 'fg_stock_qty': newRow.fg_stock_qty, 'rm_stock_qty': newRow.rm_stock_qty }

        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        let newArr = [...rowss]
        let index1 = newArr.findIndex((item) => item.id === updatedRow.id)
        newArr[index1] = updatedRow
        const keysToCheck = ['W1(1-5)', 'W2(6-12)', 'W3(13-19)', 'W4(20-26)', 'W5(27-31)', 'W1(1-2)', 'W2(3-9)', 'W3(10-16)', 'W4(17-23)', 'W5(24-30)']; // Specify the keys you want to check
        let result = tempArray.find((item) => item.id === newRow.id);
        keysToCheck.forEach(key => {
            if (updatedRow.hasOwnProperty(key)) {
                let color = '';
                let newValue = updatedRow[key]
                if (newValue > 0) {
                    if (newValue <= result.fg_stock_qty) {
                        color = 'green';
                        tempArray[rowIndex].fg_stock_qty = parseInt(result.fg_stock_qty, 10) - newValue;
                    } else if (newValue <= result.rm_stock_qty) {
                        if (result.fg_stock_qty > 0) {
                            let tempVal = newValue - parseInt(result.fg_stock_qty, 10);
                            tempArray[rowIndex].fg_stock_qty = 0;
                            tempArray[rowIndex].rm_stock_qty = parseInt(result.rm_stock_qty, 10) - tempVal;
                        } else {
                            tempArray[rowIndex].rm_stock_qty = parseInt(result.rm_stock_qty, 10) - newValue;
                        }
                        color = 'green';
                    } else {
                        color = 'red';
                        tempArray[rowIndex].fg_stock_qty = 0;
                        tempArray[rowIndex].rm_stock_qty = 0;
                    }
                } else { color = 'red'; }
                setFgRmStockList(tempArray);
                let cellColumn = key + "Color";
                newArr[rowIndex][cellColumn] = color
                // console.log(`Object contains key '${key}' with value ${updatedRow[key]}.`);
            } else {
                //console.log(`Object does not contain key '${key}'.`);
            }
        });
        setRowss(newArr)
        return updatedRow;
    };

    const editColumns = [{
        field: 'actions',
        type: 'actions',
        width: 100,
        cellClassName: 'actions',
        getActions: (params) => {
            const { id, editable } = params.row;
            const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

            if (editable) { // Only show edit/delete actions if editable is true
                return isInEditMode ? [
                    <GridActionsCellItem
                        icon={<SaveIcon />}
                        label="Save"
                        sx={{
                            color: 'primary.main',
                        }}
                        onClick={handleSaveClick(id)}
                        key="save"
                    />,
                    <GridActionsCellItem
                        icon={<CancelIcon />}
                        label="Cancel"
                        className="textPrimary"
                        onClick={handleCancelClick(id)}
                        color="inherit"
                        key="cancel"
                    />,
                ] : [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        sx={{ color: "green" }} // Setting the color to green
                        key="edit"
                    />,
                    // <GridActionsCellItem
                    //   icon={<DeleteIcon />}
                    //   label="Delete"
                    //   onClick={handleDeleteClick(id)}
                    //   sx={{ color: "#bf361b" }} // Setting the color to red
                    //   key="delete"
                    // />,
                ];
            }

            // Return an empty array if the row is not editable
            return [];
        },
    }];

    const extractDemandColumns = (data) => {
        const demandPeriods = new Set();
        data && data.length > 0 && data.forEach(item => {
            item.demands && item.demands.length > 0 && item.demands.forEach(demand => {
                Object.keys(demand).forEach(key => demandPeriods.add(key));
            });
        });
        return Array.from(demandPeriods).map(key => ({
            field: key,
            headerName: key,
            width: 100,

            renderCell: (params) => {
                const demandValue = params.value; // The demand value for this column
                if (typeof demandValue === 'number') {
                    return <div style={{ color: params.row[`${key}Color`] ? params.row[`${key}Color`] + ' !important' : "" }}>
                        {new Intl.NumberFormat('en-IN').format(demandValue)}</div>
                }
            },
            editable: true,
        }));
    };

    const dynamicMonthName = state.demand_month !== "" ? state.demand_month + " Qty (Nos.)" : currentMonth + " Qty (Nos.)"
    // Define other static columns
    const staticColumns = [
        { field: 'customer_name', headerName: 'Customer Name', width: 200 ,renderCell: (params) => renderTooltipCell(params.value),},
        { field: 'plant_location', headerName: 'Location', width: 120,renderCell: (params) => renderTooltipCell(params.value), },
        { field: 'fg_part_no', headerName: 'FG Code', width: 120 ,renderCell: (params) => renderTooltipCell(params.value),},
        {
            field: 'rolling_plan_qty', headerName: dynamicMonthName, width: 120,
            renderCell: (params) => renderTooltipCell(<div style={{ fontWeight: "bold" }}>{new Intl.NumberFormat('en-IN').format(params.value)}</div>)
        },
        {
            field: 'total_quantity', headerName: "Total Qty", width: 120,
            renderCell: (params) => renderTooltipCell(<div style={{ fontWeight: "bold" }}>{new Intl.NumberFormat('en-IN').format(params.value)}</div>)
        },
    ];

    // Transform data into the format expected by DataGrid
    const transformData = (data) => {
        // Track the previous combination and count occurrences of each combination
        let prevCombination = "";
        let lastGroupIndices = [];
        let combinationCounts = {};

        // Count the occurrences of each combination
        data.forEach((item) => {
            const combinationKey = `${item.customer_name}-${item.plant_location}-${item.fg_part_no}`;
            combinationCounts[combinationKey] = (combinationCounts[combinationKey] || 0) + 1;
        });

        // Identify the last index of each group
        data.forEach((item, index) => {
            const combinationKey = `${item.customer_name}-${item.plant_location}-${item.fg_part_no}`;
            const isLastInGroup =
                index === data.length - 1 || // Last row in the data
                combinationKey !== `${data[index + 1].customer_name}-${data[index + 1].plant_location}-${data[index + 1].fg_part_no}`;

            if (isLastInGroup) {
                lastGroupIndices.push(index);
            }
        });

        // Transform data and mark rows as editable or not
        return data.map((item, index) => {
            const combinationKey = `${item.customer_name}-${item.plant_location}-${item.fg_part_no}`;
            const isLastInGroup = lastGroupIndices.includes(index);
            const isSingleOccurrence = combinationCounts[combinationKey] === 1;
            // Determine if the values should be displayed
            const shouldDisplay =
                isSingleOccurrence ||
                combinationKey !== prevCombination; // Always display if the combination changes
            // Update the previous combination for the next iteration
            prevCombination = combinationKey;
            // Flatten the demands array into a single object
            const demands = item.demands
                ? item.demands.reduce((acc, demand) => {
                    Object.entries(demand).forEach(([key, value]) => {
                        acc[key] = value;
                    });
                    return acc;
                }, {})
                : {};
            return {
                id: item._id,
                customer_name: shouldDisplay ? item.customer_name : "", // Conditionally display
                plant_location: shouldDisplay ? item.plant_location : "", // Conditionally display
                fg_part_no: shouldDisplay ? item.fg_part_no : "", // Conditionally display
                rolling_plan_qty: item.rolling_plan_qty,
                total_quantity: item.total_quantity, // Conditionally display
                fg_stock_qty: item.fg_stock_qty,
                rm_stock_qty: item.rm_stock_qty,
                editable: isLastInGroup, // Flag to indicate if the row is editable
                ...demands, // Spread demand data into the transformed object
            };
        });
    };
    // Combine static and dynamic columns
    const columnss = [...staticColumns, ...extractDemandColumns(allDemandList), ...editColumns];
    // Convert into array of objects
    const convertToArrayOfObjects = (obj) => {
        return Object.keys(obj).map(key => ({
            [key]: obj[key]
        }));
    };

    function removeKeys(demands, keys) {
        // Ensure demands is an array
        if (!Array.isArray(demands)) {
            return []; // Return an empty array if demands is not an array
        }
        // Filter demands by removing the specified keys
        return demands.map(demand => {
            // Create a copy of the demand object without the keys that should be removed
            const cleanedDemand = { ...demand };
            keys.forEach(key => {
                delete cleanedDemand[key];
            });
            return cleanedDemand;
        });
    }

    const reset = () => {
        setallDemandList([]);
        setColumns([]);
        setRowss([]);
        setTotalPage(0);
        setState({ ...initialState });
        setRows([]);
        setRowModesModel({});
        setIsSet(0);
    }

    // // Function to handle cell keydown event and update row color
    const handleCellKeyDown = debounce((params, event) => {
        const { field, id, row } = params;
        const inputValue = event.target.value; // Get the raw input value from the event

        // Use regex to allow only numbers and commas, and filter out other characters
        const sanitizedValue = inputValue.replace(/[^0-9,]/g, '');

        // Convert the sanitized value to an integer
        const newValue = parseInt(sanitizedValue, 10);

        if (isNaN(newValue)) {
            // If newValue is NaN (not a valid number), do not proceed
            return;
        }

        const rowIndex = rowss.findIndex((item) => item.id === id); // Find the index of the current row
        let result = fgRmStockList.find((item) => item.id === id);
        let color = '';
        let tempArray = [...fgRmStockList];

        if (result) {
            if (newValue > 0) {
                if (newValue <= result.fg_stock_qty) {
                    color = 'green';
                    tempArray[rowIndex].fg_stock_qty = parseInt(result.fg_stock_qty, 10) - newValue;
                } else if (newValue <= result.rm_stock_qty) {
                    if (result.fg_stock_qty > 0) {
                        let tempVal = newValue - parseInt(result.fg_stock_qty, 10);
                        tempArray[rowIndex].fg_stock_qty = 0;
                        tempArray[rowIndex].rm_stock_qty = parseInt(result.rm_stock_qty, 10) - tempVal;
                    } else {
                        tempArray[rowIndex].rm_stock_qty = parseInt(result.rm_stock_qty, 10) - newValue;
                    }
                    color = 'green';
                } else {
                    color = 'red';
                    tempArray[rowIndex].fg_stock_qty = 0;
                    tempArray[rowIndex].rm_stock_qty = 0;
                }
            } else { color = 'red'; }
            setFgRmStockList(tempArray);
        }

        // Update the specific row with the new value and color
        const updatedData = rowss.map((item, idx) => {
            if (idx === rowIndex) {
                let cellColumn = field + "Color";
                return { ...item, [field]: sanitizedValue, [cellColumn]: color }; // Update the relevant field and color
            }
            return item;
        });

        setRowss(updatedData); // Update state with the new data
    }, 1500); // Adjust debounce time (in milliseconds)

    return (
        <Fragment>
            <Pageheader items={breadcrumbs} />
            <Row>
                <Col xl={12}>
                    <Card>
                        <Card.Header className=" d-flex justify-content-between align-items-center">
                            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "7px 5px 0 5px" }}>
                            <Col xl={6}>
                                    <FilterComponent
                                        handleSearchData={handleSearchData}
                                        callAPI={CDC_WEEKWISE_DEMANDS}
                                    />
                                  </Col>
                                <Card.Title style={{ marginTop: "10px", padding: "5px" }}>
                                    <Grid container alignItems="center" justifyContent="flex-end">
                                        {/* Year Select Autocomplete */}
                                        <Grid item>
                                            <Autocomplete
                                                id="year-select-autocomplete"
                                                options={years || []}
                                                getOptionLabel={(option) => option.demand_year || ""}
                                                value={
                                                    years.find((year) => year.demand_year === state.demand_year) || null
                                                }
                                                onChange={(event, newValue) => {
                                                    handleInputChange({
                                                        target: {
                                                            name: "demand_year",
                                                            value: newValue ? newValue.demand_year : "",
                                                        },
                                                    });
                                                }}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        label="Years"
                                                        style={{ width: "120px", height: "56px" }} // Adjust height as needed
                                                        InputProps={{
                                                            ...params.InputProps,
                                                            style: {
                                                                height: "70%", fontSize: "0.9rem", textAlign: "left",
                                                                paddingBottom: "10px",
                                                                color: '#28afd0'
                                                            }, // Center align text
                                                        }}
                                                        InputLabelProps={{
                                                            style: {
                                                                fontSize: "0.8rem", // Adjust label size if needed
                                                                textAlign: "left", // Center the label
                                                                width: "100%", // Ensure label takes full width for centering
                                                                position: "absolute", // Required for centering
                                                                paddingBottom: "15px",
                                                                color: '#28afd0'
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
                                        

                                        {/* Demand Month Autocomplete */}
                                        <Grid item>
                                            <Autocomplete
                                                id="demand_month"
                                                name="demand_month"
                                                value={
                                                    months.find((months) => months.demand_month === state.demand_month) || null
                                                }
                                                options={months || []}
                                                getOptionLabel={(month) => month.demand_month || ""}
                                                onChange={(event, newValue) => {
                                                    handleInputChange({
                                                        target: {
                                                            name: "demand_month",
                                                            value: newValue ? newValue.demand_month : "",
                                                        },
                                                    });
                                                }}
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Month"
                                                        style={{ width: "120px", height: "56px" }} // Adjust height as needed
                                                        InputProps={{
                                                            ...params.InputProps,
                                                            style: {
                                                                height: "70%", fontSize: "0.9rem", textAlign: "left",
                                                                paddingBottom: "10px",
                                                                color: '#dea90b'
                                                            }, // Center align text
                                                        }}
                                                        InputLabelProps={{
                                                            style: {
                                                                fontSize: "0.8rem", // Adjust label size if needed
                                                                textAlign: "left", // Center the label
                                                                width: "100%", // Ensure label takes full width for centering
                                                                position: "absolute", // Required for centering
                                                                paddingBottom: "15px",
                                                                color: '#dea90b'
                                                            },
                                                        }} />
                                                )}
                                                sx={{
                                                    "& .MuiOutlinedInput-root": {
                                                        borderRadius: "10px",
                                                        "& fieldset": {
                                                            borderColor: "#ffc107 !important", // Default border color
                                                            borderWidth: "2px !important", // Increase border width
                                                        },
                                                        "&:hover fieldset": {
                                                            borderColor: "#dea90b !important", // Border color on hover
                                                            borderWidth: "2px !important", // Ensure hover border width is consistent
                                                        },
                                                        "&.Mui-focused fieldset": {
                                                            borderColor: "#dea90b !important", // Border color when focused
                                                            borderWidth: "2px !important", // Ensure focused border width is consistent
                                                        },
                                                    },
                                                    "& .MuiInputBase-input::placeholder": {
                                                        color: "#dea90b !important", // Set placeholder color to cyan
                                                        fontSize: "0.8rem", // Reduce placeholder font size
                                                    },
                                                    width: 150,
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Card.Title>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="card-area">
                                <Col md="12">
                                    <TotalRecords color='outline-success' length={rowss && rowss.length} />
                                    <div style={{ marginTop: "15px", display: 'grid', height: 500, overflowY: 'auto' }}>
                                        {loading ? (

                                            <LoaderComponent />
                                        ) :
                                             rowss && rowss.length > 0 ? (
                                                <DataGrid
                                                    rows={rowss || []}
                                                    columns={columnss}
                                                    editMode="row" // Use cell edit mode
                                                    // onCellKeyDown={handleCellKeyDown} // Handle cell keydown event
                                                    components={{
                                                        Footer: () => <CustomFooter total={rowss.length} />,
                                                    }}
                                                    //  onCellEditCommit={handleCellEditCommit} // Handle cell edit commit event
                                                    headerHeight={56}
                                                    isCellEditable={(params) => params.row.editable === true}
                                                    rowModesModel={rowModesModel}
                                                    onRowModesModelChange={handleRowModesModelChange}
                                                    onRowEditStop={handleRowEditStop}
                                                    processRowUpdate={processRowUpdate}
                                                    pagination
                                                    paginationMode="server"
                                                    rowCount={totalPage}  // Ensure the total number of records is provided
                                                    pageSize={paginationModel.pageSize}
                                                    page={paginationModel.page}
                                                    onPageChange={(newPage) => handlePaginationChange({ ...paginationModel, page: newPage })}
                                                    onPageSizeChange={(newPageSize) => handlePaginationChange({ ...paginationModel, pageSize: newPageSize })}
                                                    getRowId={(row) => row.id}
                                                    getRowClassName={(params) =>
                                                        params.row.editable === false ? "light-grey-row" : "" // Apply the light-grey-row class to all rows except the last in the group
                                                    }
                                                    getCellClassName={(params) => {
                                                        const colorField = `${params.field}Color`; // Field to check for color
                                                        return params.row[colorField] || ''; // Return the color class if present
                                                    }}
                                                    hideFooterPagination
                                                    slotProps={{
                                                        toolbar: { setRows, setRowModesModel },
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
                                                "No Data Found!"
                                            )}
                                    </div>
                                </Col>
                                {allDemandList && allDemandList.length > 0 && (
                                    <div
                                        style={{
                                            margin: "20px",
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
            </Row >
            {!!state.openModal && (
                <ModalPopUpComponent
                    open={state.openModal}
                    handleOpenModal={handleOpenModal}
                    callEndPoint={CDC_SAVE_WEEKWISE_DEMANDS}
                />
            )}
            {!!state.openDeleteModal &&
                <DeleteModalComponent
                    openDelete={state.openDeleteModal}
                    rowId={state.rowID}
                    handleDeleteModal={handleDelete}
                    callEndPoint={CDC_WEEKWISE_DEMANDS}
                />
            }
        </Fragment >
    )
}
const mapStatetoprops = (state) => {
    return {
        customerNameCodeData: state.commonReducer.customerNameCodeData,
        weekDemandData: state.commonReducer.weekDemandData,
        updateWeeklyDemandDetailsData: state.commonReducer.updateWeeklyDemandDetailsData,
        errorData: state.commonReducer.errorData,
    };
};

const mapDispatchtoprops = (dispatch) => {
    return {
        updateWeeklyDemandDetails: (endPoint, payLoad) => dispatch(callCommonUpdateAPI(endPoint, payLoad, 'weeklyDemandDetails')),
        getCustomerNameCode: (endPoint) => dispatch(callCommonGetAPI(endPoint, "customerNameCode")),
        getweekDemandData: (endPoint) => dispatch(callCommonGetAPI(endPoint, "weekDemand")),
        refreshProps: (title) => dispatch(callCommonRefreshProps(title)),
    };
};
export default connect(mapStatetoprops, mapDispatchtoprops)(HomeComponent)
