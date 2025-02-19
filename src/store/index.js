import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authentication/authSlice";
import uploadSlice from "./upload/uploadSlice";
import qualitySlice from "./quality/qualitySlice";
import dashboardDetailSlice from "./dashboard/dashboardMainSlice";
import todoSlice from "./Todo/todoSlice";
import safetySlice from "./safety/safetySlice";
import maintenanceSlice from "./Maintenance/maintenanceSlice"
import toolRoomSlice from "./toolRoom/toolRoomSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    upload: uploadSlice,
    quality: qualitySlice,
    dashboardMain: dashboardDetailSlice,
    todo: todoSlice,
    safety: safetySlice,
    maintenance:maintenanceSlice,
    toolRoom: toolRoomSlice,
  },
});

export default store;
