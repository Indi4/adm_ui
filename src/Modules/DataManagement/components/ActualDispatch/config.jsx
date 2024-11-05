import {renderTooltipCell} from "../../../commonConfig";

const initialState = {
    openModal: 0,
    success: 0,
}

const actualDispatchColumns = [
    { field: "customer_name", headerName: "Customer Name", width: 250 ,renderCell: (params) => renderTooltipCell(params.value),},
    { field: "plant_location", headerName: "Plant Location", width: 150,renderCell: (params) => renderTooltipCell(params.value), },
    { field: "fg_code", headerName: "FG Code", width: 200,renderCell: (params) => renderTooltipCell(params.value), },
    { field: "month", headerName: "Month", width: 200,renderCell: (params) => renderTooltipCell(params.value), },
    { field: "dispatch_qty", headerName: "Dispatch Qty", width: 200 ,
        renderCell: (params) => renderTooltipCell(<div>{new Intl.NumberFormat('en-IN').format(params.value)}</div>)
    },
];
const breadcrumbs = ["Actual Dispatch"];

export {
    initialState,
    actualDispatchColumns,
    breadcrumbs

}