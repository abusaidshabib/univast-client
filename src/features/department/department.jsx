import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const departmentApi = createApi({
  reducerPath: "departmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
  }),
  tagTypes: ["DEPARTMENT"],
  endpoints: (builder) => ({
    getDepartments: builder.query({
      query: () => ({
        url: "/department",
      }),
      providesTags: ["DEPARTMENT"],
    }),
    getDepartmentsByFacultyCode: builder.query({
      query: (facultyCode) => ({
        url: `/department?facultyCode=${facultyCode}`,
      }),
    }),
    postDepartment: builder.mutation({
      query: (data) => ({
        url: "/department",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["DEPARTMENT"],
    }),
    updateDepartment: builder.mutation({
      query: (data) => ({
        url: `/department?departmentCode=${data.departmentCode}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["DEPARTMENT"],
    }),
    deleteDepartment: builder.mutation({
      query: (departmentCode) => ({
        url: `/department?departmentCode=${departmentCode}`,
        method: "DELETE",
      }),
      invalidatesTags: ["DEPARTMENT"],
    }),
  }),
});

export const {
  useGetDepartmentsQuery,
  useGetDepartmentsByFacultyCodeQuery,
  usePostDepartmentMutation,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentApi;
