const quarterlyColumns = [
    { field: 'quarter', headerName: 'Quarter', width: 100, renderCell: (params) => params.row.category === 'Domestic' ? params.value : '' },
    { field: 'category', headerName: 'Category', width: 120 },
    {
        field: 'monthly_sales_plan', headerName: 'Monthly Sales Plan', width: 150,
        renderCell: (params) => (<div>{new Intl.NumberFormat('en-IN').format(params.value)}</div>)
    },
    {
        field: 'rolling_plan', headerName: 'Dispatch Plan', width: 130,
        renderCell: (params) => (<div>{new Intl.NumberFormat('en-IN').format(params.value)}</div>)
    },
    {
        field: 'aop', headerName: 'AOP', width: 120,
        renderCell: (params) => (<div>{new Intl.NumberFormat('en-IN').format(params.value)}</div>)
    },
    {
        field: 'actual_sales', headerName: 'Actual Sales', width: 130,
        renderCell: (params) => (<div>{new Intl.NumberFormat('en-IN').format(params.value)}</div>)
    },
    { field: 'rolling_plan_percentage_change', headerName: 'Dispatch Plan % Change', width: 100 },
    { field: 'actual_sales_percentage_change', headerName: 'Actual Sales % Change', width: 100 },
    { field: 'sales_plan_percentage_change', headerName: 'Sales Plan % Change', width: 90 },
];

export {
    quarterlyColumns,
}