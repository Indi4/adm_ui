import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import Autocomplete from "@mui/material/Autocomplete";
import { Grid, TextField, ListItem } from "@mui/material";
import { callCommonGetAPI, callCommonRefreshProps } from '../../../store/action/action'
import { GETALL_LIST } from "../../endPointConfig"
import GetAppIcon from "@mui/icons-material/GetApp";
import { useDispatch, useSelector } from "react-redux";
// import apiService from '../../../../services/apiService';
import { saveAs } from 'file-saver';
import { toast, ToastContainer } from "react-toastify";
import { styled } from "@mui/material/styles";
//import { downloadExcelStart, downloadExcelFailure, downloadExcelSuccess } from '../../../../store/authentication/forgotpasswordSlice';
import { useLocation } from 'react-router-dom';
const StyledAutocomplete = styled(Autocomplete)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '15px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'green', // Default border color
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'blue', // Border color on hover
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'red', // Border color when focused
  },
});
const StyledListItem = styled(ListItem)({
    fontSize: "14px", // Adjust font size for list items
});

const FilterComponent = (props) => {
    const { fromPage = '', handleSearchData, getCustomerNameCode, callAPI, getRmCodeData, rmCodeData,
        customerNameCodeData, allDemandData, refreshProps, disable, fgCodeData, getFgCodeData,
        getallDemandData, getPartNoByCustCodeData, partNoByCustCodeData, type, filterType = '' } = props

    const { downloading } = useSelector((state) => state.excelDownloadSlice || {});
    const [endPoint] = useState(GETALL_LIST)
    const [customerNameorCode, setCustomerNameorCode] = useState("")
    const [FGCode, setFGCode] = useState("")
    const [FGCodeList, setFGCodeList] = useState([])
    const [RMCode, setRMCode] = useState("")
    const [RMCodeList, setRMCodeList] = useState([])
    const [customerNameorCodeList, setCustomerNameorCodeList] = useState([])
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        getCustomerNameCode(endPoint)
        return () => { reset(); setCustomerNameorCodeList([]) }
    }, [])

    useEffect(() => {
        if (customerNameCodeData && Object.keys(customerNameCodeData).length > 0) {
            if (customerNameCodeData.data && Object.keys(customerNameCodeData.data).length > 0) {
                setCustomerNameorCodeList(customerNameCodeData.data.customers_list &&
                    customerNameCodeData.data.customers_list.length > 0 && customerNameCodeData.data.customers_list)
                setFGCodeList(customerNameCodeData.data.fg_code_list &&
                    customerNameCodeData.data.fg_code_list.length > 0 && customerNameCodeData.data.fg_code_list)
                setRMCodeList(customerNameCodeData.data.rm_code_list &&
                    customerNameCodeData.data.rm_code_list.length > 0 && customerNameCodeData.data.rm_code_list)
            }
        }
    }, [customerNameCodeData])

    useEffect(() => {
        if (filterType === 'fgCode') {
            handleSearchData(fgCodeData, FGCode)
        }
        else if (filterType === 'rmCode') {
            handleSearchData(rmCodeData, RMCode)
        } else {
            if (allDemandData || partNoByCustCodeData) {
                handleSearchData(allDemandData, partNoByCustCodeData, customerNameorCode)
            }
        }
    }, [allDemandData, partNoByCustCodeData, fgCodeData, rmCodeData])

    const handleInputChange = (e) => {
        if (e.target.value === '---------- All ----------') {
            filterType === 'fgCode' ? setFGCode('') : setCustomerNameorCode('')
        } else {
            if (filterType === 'fgCode')
                setFGCode(e.target.value === null ? '' : e.target.value)
            else if (filterType === 'rmCode')
                setRMCode(e.target.value === null ? '' : e.target.value)
            else {
                const str = e.target.value
                const strArray = str.split(" ");
                setCustomerNameorCode(strArray[0])
            }
        }
    }

    const handleSearch = () => {
        if (filterType === 'fgCode') {
            refreshProps("fgCodeData")
            getFgCodeData(`${callAPI}search=${FGCode}`)
        }
        else if (filterType === 'rmCode') {
            refreshProps("rmCodeData")
            getRmCodeData(`${callAPI}search=${RMCode}`)
        } else {
            refreshProps("allDemandData")
            refreshProps("partNoByCustCodeData")
            fromPage === 'addNewDemand' ? getPartNoByCustCodeData(`${callAPI}${customerNameorCode}`)
                : getallDemandData(`${callAPI}?search=${customerNameorCode}`)
        }
    }

    const reset = () => {
        setFGCode('')
        setFGCodeList([])
        setRMCode('')
        setRMCodeList([])
        setCustomerNameorCode("")
        setCustomerNameorCodeList([])
        refreshProps("customerNameCodeData")
        refreshProps("allDemandData")
        refreshProps("fgCodeData")
        refreshProps("rmCodeData")
        refreshProps("partNoByCustCodeData")
    }

    return (
        <React.Fragment>
            {!disable &&
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        {filterType === 'fgCode' &&
                            //FG Code filter
                            <StyledAutocomplete
                                id="filter-select-autocomplete"
                                options={FGCodeList || []}
                                getOptionLabel={(option) => option || ""}
                                onChange={(event, newValue) => {
                                    handleInputChange({
                                        target: { name: "fg_code", value: newValue },
                                    });
                                }}
                                renderInput={(params) => <TextField {...params} label="FG Code" />}
                                renderOption={(props, option) => (
                                    <StyledListItem {...props} style={{ color: "teal" }}>
                                        {option}
                                    </StyledListItem>
                                )}
                            />
                        }
                        {filterType === '' &&
                            //Customer Name and Code filter
                            <StyledAutocomplete
                                id="cutomerNameOrCode"
                                options={[
                                    fromPage !== "addNewDemand" && "---------- All ----------",
                                    ...(customerNameorCodeList && customerNameorCodeList?.length > 0
                                        ? customerNameorCodeList.map((option) =>
                                            option.customer_code &&
                                                option.customer_name &&
                                                option.plant_location
                                                ? `${option.customer_code} ${option.customer_name} [${option.plant_location}]`
                                                : ""
                                        )
                                        : []),
                                ]}
                                onChange={(event, newValue) => {
                                    handleInputChange({
                                        target: {
                                            name: "cutomerNameOrCode",
                                            value: newValue ? newValue : "",
                                        },
                                    });
                                }}
                                renderInput={(params) => <TextField {...params} label="Customer Name/Code" />}
                                renderOption={(props, option) => (
                                    <StyledListItem {...props} style={{ color: "teal" }}>
                                        {option}
                                    </StyledListItem>
                                )}
                            />
                        }

                        {filterType === 'rmCode' &&
                            //RM Code filter
                            <StyledAutocomplete
                                id="filter-select-autocomplete"
                                options={RMCodeList || []}
                                getOptionLabel={(option) => option || ""}
                                onChange={(event, newValue) => {
                                    handleInputChange({
                                        target: { name: "rm_code", value: newValue },
                                    });
                                }}
                                renderInput={(params) => <TextField {...params} label="RM Code" />}
                                renderOption={(props, option) => (
                                    <StyledListItem {...props} style={{ color: "teal" }}>
                                        {option}
                                    </StyledListItem>
                                )}
                            />
                        }
                    </Grid>
                    <Grid item xs={4} marginTop={1.5}>
                        <button type="button" class="btn btn-primary btn btn-primary" onClick={handleSearch}><i class="fa fa-search"></i></button>
                    </Grid>
                </Grid>
            }
        </React.Fragment>);
};

const mapStatetoprops = (state) => {
    return {
        allDemandData: state.commonReducer.allDemandData,
        customerNameCodeData: state.commonReducer.customerNameCodeData,
        partNoByCustCodeData: state.commonReducer.partNoByCustCodeData,
        fgCodeData: state.commonReducer.fgCodeData,
        rmCodeData: state.commonReducer.rmCodeData,
        errorData: state.commonReducer.errorData
    }
}

const mapDispatchtoprops = (dispatch) => {
    return {
        getCustomerNameCode: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'customerNameCode')),
        getallDemandData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'allDemand')),
        getPartNoByCustCodeData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'partNoByCustCode')),
        getFgCodeData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'fgCode')),
        getRmCodeData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'rmCode')),
        refreshProps: (title) => dispatch(callCommonRefreshProps(title))
    }
}

export default connect(mapStatetoprops, mapDispatchtoprops)(FilterComponent);
