import { configureStore } from "@reduxjs/toolkit";
import programApi from "../features/programs/programApi";
import applicationSlice from "../features/application/applicationSlice";
import { applicationApi } from "../features/application/applicationApi";
import { studentApi } from "../features/student/studentApi";
import { userApi } from "../features/user/userApi";

const store = configureStore({
  reducer: {
    [programApi.reducerPath]: programApi.reducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    application: applicationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(programApi.middleware)
      .concat(applicationApi.middleware)
      .concat(studentApi.middleware)
      .concat(userApi.middleware)
});

export default store;
