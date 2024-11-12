import { camelCase } from "lodash";
export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};
const initialstate = {
  loading: true,
  productData: {},
  saveUploadData: {},
  saveProductData: {},
  updateProductDetailsData: {},
  customerData: {},
  customerSearchData: {},
  saveCustomerData: {},
  updateCustomerDetailsData: {},
  rmDetailsData: {},
  saveRmDetailsData: {},
  updateRmDetailsData: {},
  departmentDetailsData: {},
  saveDepartmentDetailsData: {},
  updateDepartmentDetailsData: {},
  deleteRmDetails: {},
  rollingPlanData: {},
  saveRollingPlanData: {},
  updaterollingPlanDetailsData: {},
  wipData: {},
  updateWipDetailsData: {},
  saveWipData: {},
  allDemandData: {},
  customerNameCodeData: {},
  saveDemandDetailsData: {},
  updateDemandDetailsData: {},
  saveBOMData: {},
  bomData: {},
  updateBomDetailsData: {},
  updateMonthlyDemandDetails: {},
  updateWeeklyDemandDetailsData: {},
  deleteData: {},
  logoScreenData: {},
  totalStockData: {},
  totalNetOffData:{},
  rawMaterialData:{},
  codeDetailsData:{},
  saveCodeDetailsData:{},
  updateCodeDetailsData:{},
  userDetailsData:{},
  partNoByCustCodeData:{},
  actualSalesData:{},
  actualDispatchData:{},
  fgCodeData:{},
  rmCodeData:{},
  quarterlyData:{},
  rmRequirementsData:{},
  planByMonthData:{},
  changesMadeByCustomerCodeData:{},
  changesMadeByProductCodeData:{},
  weekDemandData:null,
  cardsData:{},
  errorData: {},
};

const handleSuccessCommonData = (state, action, storeStateName) => {
  return updateObject(state, {
    loading: false,
    [storeStateName]: action.payload,
  });
};

const handleFailureCommonData = (state, action) => {
  return updateObject(state, {
    loading: false,
    errorData: action.payload,
  });
};
const handleRefreshCommonData = (state, storeStateName) => {
  return updateObject(state, {
    loading: false,
    [storeStateName]: {},
  });
};

export const CommonReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "COMMON_GET": return handleSuccessCommonData(state, action, camelCase(`${action.title}_data`));
    case "COMMON_SAVE": return handleSuccessCommonData(state, action, camelCase(`save_${action.title}_data`));
    case "COMMON_UPDATE": return handleSuccessCommonData(state, action, camelCase(`update_${action.title}_data`));
    case "COMMON_DELETE": return handleSuccessCommonData(state, action, "deleteData");
    case "FAILURE_MESSAGE": return handleFailureCommonData(state, action);
    case "REFRESH_PROPS": return handleRefreshCommonData(state, action.title);
    default: return state;
  }
};
