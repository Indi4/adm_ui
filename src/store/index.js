import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authentication/authSlice"
import uploadSlice  from "./upload/uploadSlice"
import qualitySlice from "./quality/qualitySlice"
import dashboardDetailSlice from "./dashboard/dashboardMainSlice"


const store = configureStore({
    reducer: {
        auth: authSlice,
        upload: uploadSlice,
        quality: qualitySlice,
        dashboardMain: dashboardDetailSlice,
     }

})

export default store;
