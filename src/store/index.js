import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authentication/authSlice"
import uploadSlice  from "./upload/uploadSlice"
import qualitySlice from "./quality/qualitySlice"


const store = configureStore({
    reducer: {
        auth: authSlice,
        upload: uploadSlice,
        quality: qualitySlice,
     }

})

export default store;
