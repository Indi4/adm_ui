import '../../layouts/styles/Common.css';
const initialState = {
    openModal: 0,
    success: 0,
    openEditModal: 0,
    rowID: 0,
    openDeleteModal: 0,
    openPopUp: 0,
    type: "",
    openLogoModal: 0,
}
const initialRegisterUser = {
    roleList: [],
    departmentList: []
}

const productColumns = [
    { field: "fg_part_no", headerName: "FG Part No.", width: 200 },
    { field: "description", headerName: "FG Part Description", width: 300 },
    { field: "cust_code", headerName: "Customer Code", width: 100 },
    { field: "cust_name", headerName: "Customer Name", width: 300 },
    { field: "plant_location", headerName: "Plant Location", width: 200 },
    { field: "wheel_size", headerName: "Wheel Size (Inch)", width: 125 },
    { field: "category", headerName: "Category", width: 125 },
    { field: "color", headerName: "Color", flex: 0 },
    { field: "vehicle_type", headerName: "Vehicle Type (Truck/Bus)", flex: 0 },
];

const customerColumns = [
    { field: "customer_code", headerName: "Customer Code", width: 150, headerClassName: "wrap-header" },
    { field: "customer_name", headerName: "Customer Name", width: 300, headerClassName: "wrap-header" },
    { field: "plant_location", headerName: "Plant Location", width: 150, headerClassName: "wrap-header" },
    { field: "category", headerName: "Category", width: 125, headerClassName: "wrap-header" },
    { field: "customer_type", headerName: "Customer Type (OEM/Others)", width: 225, headerClassName: "wrap-header" },
    { field: "business_type", headerName: "Business Type (CV/PV)", width: 200, headerClassName: "wrap-header" },
];
const RMColumns = [
    { field: "rm_part_no", headerName: "RM Part No.", width: 200, headerClassName: "wrap-header" },
    { field: "fg_part_no", headerName: "FG Part No.", width: 200, headerClassName: "wrap-header" },
    { field: "material_description", headerName: "Material Description", width: 400, headerClassName: "wrap-header" },
];

const rollingPlanColumns = [
    { field: "part_no", headerName: "Material No", width: 200, headerClassName: "wrap-header" },
    { field: "description", headerName: "Material Desc", width: 300, headerClassName: "wrap-header" },
    { field: "size", headerName: "Size", width: 125, headerClassName: "wrap-header" },
    { field: "grade", headerName: "Grade", width: 125, headerClassName: "wrap-header" },
    { field: "vendor_stock", headerName: "Stock at Vendor", width: 125, headerClassName: "wrap-header" },
    { field: "rolling_plan", headerName: "Rolling Plan", width: 125, headerClassName: "wrap-header" },

];
const WIPColumns = [
    { field: "part_no", headerName: "Material", width: 200, headerClassName: "wrap-header" },
    { field: "description", headerName: "Material Desc", width: 300, headerClassName: "wrap-header" },
    { field: "plant_id", headerName: "Plant ID", width: 125, headerClassName: "wrap-header" },
    { field: "storage_location", headerName: "Storage Location", width: 100, headerClassName: "wrap-header" },
    { field: "unrestricted_stock", headerName: "Unrestricted Stock", width: 125, headerClassName: "wrap-header" },
    { field: "units", headerName: "BUn", width: 125, headerClassName: "wrap-header" },

];

const BOMColumns = [
    { field: "plant_id", headerName: "Plant", width: 100, headerClassName: "wrap-header" },
    { field: "fg_code", headerName: "FG Code", width: 150, headerClassName: "wrap-header" },
    { field: "wip_unpainted_wheel", headerName: "WIP Unpainted Wheels", width: 150, headerClassName: "wrap-header" },
    // { field: "unpainted_wheel_stock", headerName: "Unpainted Wheel Stock", width: 100, headerClassName: "wrap-header" },
    { field: "material_code_rim1", headerName: "Material Code Rim1", width: 150, headerClassName: "wrap-header" },
    { field: "material_description_rim1", headerName: "Material Description Rim1", width: 300, headerClassName: "wrap-header" },
    {
        field: "material_weight_rim1", headerName: "Material Wt Rim1", width: 100, headerClassName: "wrap-header", headerAlign: "center",
        align: "center"
    },
    // { field: "plant_stock_rim", headerName: "Plant Stock Rim", width: 100 },
    { field: "material_code_rim2", headerName: "Material Code Rim2", width: 200, headerClassName: "wrap-header" },
    { field: "material_description_rim2", headerName: "Material Description Rim2", width: 300, headerClassName: "wrap-header" },
    {
        field: "material_weight_rim2", headerName: "Material Wt Rim2", width: 100, headerClassName: "wrap-header", headerAlign: "center",
        align: "center"
    },
    // { field: "stock_at_kmwpl_rim", headerName: "Stock @Kmwpl Rim", width: 100 },
    // { field: "stock_at_rm_supplier_rim", headerName: "Stock @Rm Supp", width: 100 },
    // { field: "btr_wip_at_supplier_rim", headerName: "BTR/WIP @RM Supp", width: 100 },
    // { field: "fg_stock", headerName: "FG Stock", width: 100 },
    { field: "wip_rim_part", headerName: "WIP Rim Part", width: 150, headerClassName: "wrap-header" },
    // { field: "wip_rim_part_stock", headerName: "WIP Rim Part Stock", width: 100 },
    { field: "wip_rim_blanks", headerName: "WIP Rim Blanks", width: 150, headerClassName: "wrap-header" },
    // { field: "wip_rim_blank_stock", headerName: "WIP Rim Blank Stock", width: 100 },
    { field: "material_code_disc1", headerName: "Material Code Disc1", width: 150, headerClassName: "wrap-header" },
    { field: "material_description_disc1", headerName: "Material Description Disc1", width: 300, headerClassName: "wrap-header" },
    {
        field: "material_weight_disc1", headerName: "Material Wt Disc1", width: 100, headerClassName: "wrap-header", headerAlign: "center",
        align: "center",
    },
    // { field: "plant_stock_disc", headerName: "Plant Stock Disc", width: 100 },
    { field: "material_code_disc2", headerName: "Material Code Disc2", width: 150, headerClassName: "wrap-header" },
    { field: "material_description_disc2", headerName: "Material Description Disc2", width: 300, headerClassName: "wrap-header" },
    {
        field: "material_weight_disc2", headerName: "Material Wt Disc2", width: 100, headerClassName: "wrap-header", headerAlign: "center",
        align: "center",
    },
    // { field: "stock_at_kmwpl_disc", headerName: "Stock @kmwpl Disc", width: 100 },
    // { field: "stock_at_rm_supplier_disc", headerName: "Stock @Rm Supplier Disc", width: 100 },
    // { field: "btr_wip_at_supplier_disc", headerName: "BTR/WIP @Supplier Disc", width: 100 },
    { field: "wip_disc_part", headerName: "WIP Disc Part", width: 150, headerClassName: "wrap-header" },
    // { field: "wip_disc_part_stock", headerName: "WIP Disc Part Stock", width: 100 },
    { field: "wip_shearing_sheets", headerName: "WIP Shearing Sheets", width: 150, headerClassName: "wrap-header" },
    // { field: "wip_shearing_sheet_stock", headerName: "WIP Shearing Sheet Stock", width: 100 },
]

const departmentColumns = [
    { field: "department_name", headerName: "Department Name", width: 200, headerClassName: "wrap-header" },
];

const codeColumns = [
    { field: "code", headerName: "Code", width: 150, headerClassName: "wrap-header" },
    { field: "description", headerName: "Description", width: 200, headerClassName: "wrap-header" },
];
const userColumns = [
    { field: "full_name", headerName: "Full Name", width: 150, headerClassName: "wrap-header" },
    { field: "email", headerName: "Email", width: 200, headerClassName: "wrap-header" },
    { field: "mobile_no", headerName: "Mobile No.", width: 150, headerClassName: "wrap-header" },
    {
        field: "role", headerName: "Role", width: 200, headerClassName: "wrap-header",
        valueGetter: (params) =>
            params.row.role
                ? params.row.role.charAt(0).toUpperCase() + params.row.role.slice(1).toLowerCase()
                : "",
    },
    { field: "department_name", headerName: "Department", width: 150, headerClassName: "wrap-header" },

];

export {
    initialState,
    productColumns,
    customerColumns,
    rollingPlanColumns,
    WIPColumns,
    codeColumns,
    RMColumns,
    departmentColumns,
    BOMColumns,
    userColumns,
    initialRegisterUser
}