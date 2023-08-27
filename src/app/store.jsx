import { configureStore } from "@reduxjs/toolkit";
import programApi from "../features/programs/programApi";

const store = configureStore({
  reducer: {
    [programApi.reducerPath]: programApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(programApi.middleware),
});

export default store;
