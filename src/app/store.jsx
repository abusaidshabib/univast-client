import { configureStore } from "@reduxjs/toolkit";
import programApi from "../features/programs/programApi";
import applicationSlice from "../features/application/applicationSlice";
import { applicationApi } from "../features/application/applicationApi";
import { studentApi } from "../features/student/studentApi";
import { userApi } from "../features/user/userApi";
import lecturerApplicationSlice from "../features/application/lecturerApplicationSlice";
import { lecturerApplicationApi } from "../features/application/lecturerApplicationApi";
import { teacherApi } from "../features/teacher/teacherApi";

const store = configureStore({
  reducer: {
    [programApi.reducerPath]: programApi.reducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
    [lecturerApplicationApi.reducerPath]: lecturerApplicationApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
    [teacherApi.reducerPath]: teacherApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    application: applicationSlice,
    lecturerApplication: lecturerApplicationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(programApi.middleware)
      .concat(applicationApi.middleware)
      .concat(lecturerApplicationApi.middleware)
      .concat(studentApi.middleware)
      .concat(teacherApi.middleware)
      .concat(userApi.middleware),
});

export default store;
