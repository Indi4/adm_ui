const breadcrumbs = ["Reports","Finished & Unpainted Stock"];

const initialState = {
  isSuccess: 0,
  paginationModel: { page: 0, pageSize: 5 },
  totalStockList: [],
  totalPage: 0,
  fgCode: "",
};

export { breadcrumbs, initialState };
