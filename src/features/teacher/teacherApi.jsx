import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teacherApi = createApi({
  reducerPath: "teacherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
  }),
  tagTypes: ["courseContent", "attendace"],
  endpoints: (builder) => ({
    getTeachers: builder.query({
      query: () => ({
        url: "/teacher",
      }),
    }),
    getFilteredTeachers: builder.query({
      query: ({ teacherQuery, selectedDepartment }) =>
        `/teacher?teacherQuery=${teacherQuery}&department=${selectedDepartment}`,
    }),
    postTeacher: builder.mutation({
      query: (data) => ({
        url: "/teacher",
        method: "POST",
        body: data,
      }),
    }),
    getTeacherByEmail: builder.query({
      query: (email) => ({
        url: `/teacher?teacherQuery=${email}`,
      }),
    }),
    getTeacherById: builder.query({
      query: (id) => ({
        url: `/teacher?teacherQuery=${id}`,
      }),
    }),
    uploadCourseContent: builder.mutation({
      query: (data) => ({
        url: "/course-content",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["courseContent"],
    }),
    getCourseContent: builder.query({
      query: ({ semester, courseCode }) => ({
        url: `/course-content?semester=${semester}&courseCode=${courseCode}`,
      }),
      providesTags: ["courseContent"],
    }),
    getAttendanceDateWise: builder.query({
      query: ({ semester, courseCode, date }) => ({
        url: `/student-attendance?courseCode=${courseCode}&semester=${semester}&date=${date}`,
      }),
      providesTags: ["attendace"],
    }),
    postAttendance: builder.mutation({
      query: (data) => ({
        url: "/student-attendance",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["attendace"],
    }),
    getAttendanceRecordByMonth: builder.query({
      query: ({ semester, courseCode, month }) => ({
        url: `/student-attendance/month?courseCode=${courseCode}&semester=${semester}&date=${month}`,
      }),
      invalidatesTags: ["attendace"],
    }),
  }),
});

export const {
  useGetTeachersQuery,
  usePostTeacherMutation,
  useGetTeacherByEmailQuery,
  useGetFilteredTeachersQuery,
  useGetTeacherByIdQuery,
  useUploadCourseContentMutation,
  useGetCourseContentQuery,
  useGetAttendanceDateWiseQuery,
  usePostAttendanceMutation,
  useGetAttendanceRecordByMonthQuery,
} = teacherApi;
