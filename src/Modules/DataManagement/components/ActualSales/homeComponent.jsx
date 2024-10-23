import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
// import { Col, Card, CardBody, Row } from "reactstrap";
import { DataGrid } from "@mui/x-data-grid";

import ModalPopUpComponent from '../../../commonComponent/modalPopUpComponent'
import { Button } from "@mui/material";
import FilterComponent from "../commonComponents/filter";
import { actualSalesColumns, initialState, breadcrumbs } from "./config"
import { CDC_SAVE_ACTUALSALES, CDC_GET_ACTUALSALES } from "../../endPointConfig"
import { CustomFooter } from "../../commonConfig"
import { callCommonGetAPI } from './../../../store/action/action'
import { ToastContainer, toast } from "react-toastify";


function HomeComponent(props) {
    const [state, setState] = useState({ ...initialState })
    const [endPoint] = useState(CDC_GET_ACTUALSALES)
    const [actualSalesList, setActualSalesList] = useState([])
    const [paginationModel, setPaginationModel] = useState({ pageSize: 5, page: 0 });
    const [totalPage, setTotalPage] = useState(0)
    const [columns, setColumns] = useState([])
    const [customerNameorCode, setCustomerNameorCode] = useState("")
    useEffect(() => {
        props.getActualSalesData(endPoint)
        return () => { reset() }
    }, [])

    useEffect(() => {
        if (props.actualSalesData && Object.keys(props.actualSalesData).length > 0) {
            setActualSalesList(props.actualSalesData.data)
            setTotalPage(props.actualSalesData.count)
        }
    }, [props.actualSalesData])

    const handleOpenModal = (openModal, success, message = "") => {
        setState({ openModal: openModal, success })
        if (!!success && message !== "") {
            toast.success(message)
            props.getActualSalesData(endPoint)
        } else if (!success && message !== "") {
            toast.error(message)
        }
    }

    const handleSearchData = (actualSalesData, data, customerNameCode) => {
        setCustomerNameorCode(customerNameCode)
        if (actualSalesData && Object.keys(actualSalesData).length > 0) {
            setActualSalesList(actualSalesData.data)
            setTotalPage(actualSalesData.count)
        }
    }

    const reset = () => {
        setState(initialState)
        setActualSalesList([])
        setTotalPage(0)
    }

    return (
        <></>
    )
}
const mapStatetoprops = (state) => {
    return {
        actualSalesData: state.product.actualSalesData,
    }
}
const mapDispatchtoprops = (dispatch) => {
    return {
        getActualSalesData: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'actualSales'))
    }
}
export default connect(mapStatetoprops, mapDispatchtoprops)(HomeComponent)
