import { configureStore } from "@reduxjs/toolkit";
import programApi from "../features/programs/programApi";
import applicationSlice from "../features/application/applicationSlice";
import { applicationApi } from "../features/application/applicationApi";
import { studentApi } from "../features/student/studentApi";
import { userApi } from "../features/user/userApi";
import lecturerApplicationSlice from "../features/application/lecturerApplicationSlice";
import { lecturerApplicationApi } from "../features/application/lecturerApplicationApi";
import { teacherApi } from "../features/teacher/teacherApi";
import { facultyApi } from "../features/faculty/facultyApi";
import { departmentApi } from "../features/department/department";
import { courseApi } from "../features/course/courseApi";
import { noticeApi } from "../features/notice/noticeApi";
import { sendEmailApi } from "../features/sendEmail/sendEmailApi";
import { semesterApi } from "../features/semester/semesterApi";
import { predictionApi } from "../features/student/predictionApi";

const store = configureStore({
  reducer: {
    [programApi.reducerPath]: programApi.reducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
    [lecturerApplicationApi.reducerPath]: lecturerApplicationApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
    [teacherApi.reducerPath]: teacherApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [facultyApi.reducerPath]: facultyApi.reducer,
    [departmentApi.reducerPath]: departmentApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    [noticeApi.reducerPath]: noticeApi.reducer,
    [sendEmailApi.reducerPath]: sendEmailApi.reducer,
    [semesterApi.reducerPath]: semesterApi.reducer,
    [predictionApi.reducerPath]: predictionApi.reducer,
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
      .concat(userApi.middleware)
      .concat(facultyApi.middleware)
      .concat(departmentApi.middleware)
      .concat(courseApi.middleware)
      .concat(noticeApi.middleware)
      .concat(sendEmailApi.middleware)
      .concat(semesterApi.middleware)
      .concat(predictionApi.middleware),
});

export default store;
