import { configureStore } from "@reduxjs/toolkit";
import programApi from "../features/programs/programApi";
import applicationSlice from "../features/application/applicationSlice";
import { applicationApi } from "../features/application/applicationApi";

const store = configureStore({
  reducer: {
    [programApi.reducerPath]: programApi.reducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
    application: applicationSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(programApi.middleware).concat(applicationApi.middleware),
});

export default store;
