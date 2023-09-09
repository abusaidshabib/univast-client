import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const departmentApi = createApi({
  reducerPath: "departmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
  }),
  endpoints: (builder) => ({
    getDepartments: builder.query({
      query: () => ({
        url: "/department",
      }),
    }),
    getDepartmentsByFacultyCode: builder.query({
      query: (facultyCode) => ({
        url: `/department?facultyCode=${facultyCode}`,
      }),
    }),
  }),
});

export const {useGetDepartmentsQuery, useGetDepartmentsByFacultyCodeQuery} = departmentApi;