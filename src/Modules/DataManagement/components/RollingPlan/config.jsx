const initialState = {
  openModal: 0,
  success: 0,
  openEditModal: 0,
  rowID: 0,
  customerCode: "",
  openDeleteModal: 0,
  openPopUp: 0,
  type: "",
};

const currentYear = new Date().getFullYear();

const initialAddRowState = {
  demand_year: currentYear,
  demand_month: "",
  quantity: 0,
};

const allDemandColumns = [
  { field: "customer_name", headerName: "Customer Name", width: 300 },
  { field: "plant_location", headerName: "Location", width: 150 },
  { field: "fg_part_no", headerName: "FG Code", width: 150 },
  { field: "wheel_size", headerName: "Wheel Size", width: 125 },
  {
    field: "current_month_qty",
    headerName: "Sep",
    width: 125,
    renderCell: (params) => (
      <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
    ),
  },
  {
    field: "next_month_qty",
    headerName: "Oct",
    width: 125,
    renderCell: (params) => (
      <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
    ),
  },
  {
    field: "next_to_next_month_qty",
    headerName: "Nov",
    width: 125,
    renderCell: (params) => (
      <div>{new Intl.NumberFormat("en-IN").format(params.value)}</div>
    ),
  },
];

const breadcrumbs = ["Demand Capture","Rolling Plan"];

const generateDynamicColumns = (data, excludedFields = []) => {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", {
    month: "short",
  });
  const nextMonth = new Date(
    currentDate.setMonth(currentDate.getMonth() + 1)
  ).toLocaleString("default", { month: "short" });
  const nextToNextMonth = new Date(
    currentDate.setMonth(currentDate.getMonth() + 1)
  ).toLocaleString("default", { month: "short" });

  const monthOrder = [currentMonth, nextMonth, nextToNextMonth];

  const allMonths = data.reduce((acc, item) => {
    if (item.demands) {
      item.demands.forEach((demand) => {
        if (!acc.includes(demand.demand_month)) {
          acc.push(demand.demand_month);
        }
      });
    }
    return acc;
  }, []);

  const sortedMonths = monthOrder.filter((month) => allMonths.includes(month));

  const dynamicColumns = sortedMonths.map((month) => ({
    field: month,
    headerName: month,
    width: 100,
    editable: true,
  }));

  const staticColumns = [
    { field: "customer_name", headerName: "Customer Name", width: 300 },
    { field: "plant_location", headerName: "Location", width: 150 },
    { field: "fg_part_no", headerName: "FG Code", width: 150 },
    { field: "wheel_size", headerName: "Wheel Size", width: 125 },
  ];

  return [...staticColumns, ...dynamicColumns];
};

export {
  initialState,
  allDemandColumns,
  initialAddRowState,
  breadcrumbs,
  generateDynamicColumns,
};
