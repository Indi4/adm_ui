const initialState = {
    openModal: 0,
    success: 0,
    rowID: 0,
    openDeleteModal: 0,
    year:''
}

const breadcrumbs = [
    { title: "Demand Details", active: 1 },
    { title: "Annual Plan", active: 0 },
]

export {
    initialState,
    breadcrumbs
}