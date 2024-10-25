const breadcrumbs = [
    { title: "Reports", active: 1 },
    { title: "Finished & Unpainted Stock", active: 1 },
];

const initialState = {
    isSuccess: 0,
    paginationModel: { page: 0, pageSize: 5 },
    totalStockList: [],
    totalPage: 0,
    fgCode:""
};

export {
    breadcrumbs,
    initialState,
}