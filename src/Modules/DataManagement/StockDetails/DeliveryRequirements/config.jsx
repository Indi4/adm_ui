const breadcrumbs = ["Reports","Delivery Requirement"];

const initialState = {
    isSuccess: 0,
    paginationModel: { page: 0, pageSize: 5 },
    totalNetOffList: [],
    totalPage: 0,
    fgCode:"",
    demand_month:"",
    columns:[]
};

export {
    breadcrumbs,
    initialState
}