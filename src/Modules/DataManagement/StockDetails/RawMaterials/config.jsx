import '../../../../layouts/styles/Common.css'
import { renderTooltipCell } from '../../../commonConfig'

const breadcrumbs = ["Reports","Procurement Plan"];

const initialState = {
    isSuccess: 0,
    paginationModel: { page: 0, pageSize: 5 },
    rawMaterialList: [],
    totalPage: 0,
    rmCode: "",
    month: "",
    columns: []
};

// Column definitions
const RMColumns = [
    {
        field: "grade", headerName: "Grade", width: 100,
        renderCell: (params) => renderTooltipCell(params.value),

    },
    {
        field: "fg_code",
        headerName: "FG Code",
        width: 200,
        renderCell: (params) => renderTooltipCell(Array.isArray(params.value) ? params.value.join(', ') : params.value),
    },
    {
        field: "description",
        headerName: "Description",
        width: 180,
        renderCell: (params) => renderTooltipCell(params.value),
    },
    {
        field: "rm_code", headerName: "RM Code", width: 150,
        renderCell: (params) => renderTooltipCell(params.value),
    },
    {
        field: "rm_type",
        headerName: "RM Type",
        width: 100,
        headerAlign: "center", // Center the header text
        align: "center", // Center text for better appearance
        renderCell: (params) => (
            <span
                style={{
                    backgroundColor: params.value === "Disc" ? "rgba(255, 195, 0,0.19)" : params.value === "Rim" ? "rgb(0,128,128,0.19)" : "transparent",
                    color: params.value === "Disc" ? "#f39c12" : params.value === "Rim" ? "rgb(0,128,128,0.90)" : "transparent",
                    fontWeight: "500",
                    letterSpacing: '1px',
                    fontSize: '15px',
                    padding: "3px 16px", // Add padding for tablet shape
                    borderRadius: "20px", // Rounded corners for tablet shape
                   // display: "inline-block", // Ensure it displays as a block element for better styling
                    minWidth: "80px", // Set a minimum width to increase background size further
                    textAlign: "center"
                }}
            >
                {params.value}
            </span>
        ),
    },
    {
        field: "weight_per_unit", headerName: "Weight Per Unit", width: 100,
        headerClassName: "wrap-header",
        headerAlign: "center",
        align: "center",
        renderCell: (params) => renderTooltipCell(params.value),
    },
    {
        field: "available_stock_in_MT", headerName: "Available Stock(MT)", width: 100,
        headerClassName: "wrap-header",
        headerAlign: "center",
        align: "center",
        renderCell: (params) => renderTooltipCell(params.value),
    },
    {
        field: "available_stock_in_QTY", headerName: "Available Stock(Qty)", width: 100,
        headerClassName: "wrap-header",
        headerAlign: "center",
        align: "center",
        renderCell: (params) => renderTooltipCell(params.value),
    },
];


//To dynamically generate the columns
const generateDynamicColumns = (data) => {
    const dynamicColumns = [];
    const uniqueKeys = new Set();
    data.forEach((item) => {
        Object.keys(item).forEach((key) => {
            if (key.startsWith("Stock Req. in ") && !uniqueKeys.has(key)) {
                uniqueKeys.add(key);

                const columnConfig = {
                    field: key,
                    headerName: key,
                    width: 130,
                    align: "center",
                    headerClassName: "wrap-header",
                    renderCell: (params) => (
                        <span
                            style={{
                                textAlign: "center",
                                display: "block",
                                width: "100%",
                                color: params.value < 0 ? 'red' : 'green',
                            }}
                        >
                            {params.value}
                        </span>
                    ),
                };
                dynamicColumns.push(columnConfig);
            }
        });
    });

    return dynamicColumns;
};

export {
    breadcrumbs,
    initialState,
    RMColumns,
    generateDynamicColumns
}