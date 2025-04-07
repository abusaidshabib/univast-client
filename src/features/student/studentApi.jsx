import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}`,
  }),
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => ({
        url: "/student",
      }),
    }),
    postStudent: builder.mutation({
      query: (data) => ({
        url: "/student",
        method: "POST",
        body: data,
      }),
    }),
    getStudentByEmail: builder.query({
      query: (email) => ({
        url: `/student?email=${email}`,
      }),
    }),
    getStudentByCourse: builder.query({
      query: (courseCode) => ({
        url: `/student?courseCode=${courseCode}`,
      }),
    }),
    getStudentAttendance: builder.query({
      query: ({ semester, courseCode, studentId }) => ({
        url: `/student-attendance?courseCode=${courseCode}&semester=${semester}&studentId=${studentId}`,
      }),
    }),
    putResult: builder.mutation({
      query: ({ studentId, data }) => ({
        url: `/results/${studentId}`,
        method: "PUT",
        body: data,
      }),
    }),
    postResult: builder.mutation({
      query: ({ studentId, data }) => ({
        url: `/results/${studentId}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetStudentsQuery,
  usePostResultMutation,
  usePostStudentMutation,
  usePutResultMutation,
  useGetStudentByEmailQuery,
  useGetStudentByCourseQuery,
  useGetStudentAttendanceQuery,
} = studentApi;
