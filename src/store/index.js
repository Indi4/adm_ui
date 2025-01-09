import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authentication/authSlice"
import uploadSlice  from "./upload/uploadSlice"


const store = configureStore({
    reducer: {
        auth: authSlice,
        upload: uploadSlice,
     }

})

export default store;
