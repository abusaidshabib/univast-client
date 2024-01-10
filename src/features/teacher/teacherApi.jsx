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
  }),
});

export const {
  useGetTeachersQuery,
  usePostTeacherMutation,
  useGetTeacherByEmailQuery,
  useGetFilteredTeachersQuery,
  useGetTeacherByIdQuery
} = teacherApi;
