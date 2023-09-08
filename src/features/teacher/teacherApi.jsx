import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teacherApi = createApi({
  reducerPath: "teacherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
  }),
  endpoints: (builder) => ({
    getTeachers: builder.query({
      query: () => ({
        url: "/teacher",
      }),
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
        url: `/teacher?email=${email}`,
      }),
    }),
  }),
});

export const {
  useGetTeachersQuery,
  usePostTeacherMutation,
  useGetTeacherByEmailQuery
} = teacherApi;
