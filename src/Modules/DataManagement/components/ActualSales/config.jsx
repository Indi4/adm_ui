
const initialState = {
    openModal: 0,
    success: 0,
}

const actualSalesColumns = [
    { field: "customer_name", headerName: "Customer Name", width: 250 },
    { field: "plant_location", headerName: "Plant Location", width: 150 },
    { field: "fg_code", headerName: "FG Code", width: 200 },
    { field: "month", headerName: "Month", width: 200 },
    { field: "sales_qty", headerName: "Sales Qty", width: 200 ,
        renderCell: (params) => (<div>{new Intl.NumberFormat('en-IN').format(params.value)}</div>)
    },
];
const breadcrumbs = ["Actual Sales"];
export {
    initialState,
    actualSalesColumns,
    breadcrumbs
}