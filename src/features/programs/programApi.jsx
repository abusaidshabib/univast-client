import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const programApi = createApi({
  reducerPath: "programApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
  }),
  tagTypes: ["PROGRAMS"],
  endpoints: (builder) => ({
    getPrograms: builder.query({
      query: () => ({
        url: "/programs",
      }),
      providesTags: ["PROGRAMS"],
    }),
    getProgramsByType: builder.query({
      query: (type) => ({
        url: `/programs?programType=${type}`,
      }),
    }),
    getProgramsByDepartmentCode: builder.query({
      query: (departmentCode) => ({
        url: `/programs?departmentCode=${departmentCode}`,
      }),
    }),
    postProgram: builder.mutation({
      query: (data) => ({
        url: "/program",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["PROGRAMS"],
    }),
    updateProgram: builder.mutation({
      query: (data) => ({
        url: `/program?programCode=${data.programCode}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["PROGRAMS"],
    }),
    deleteProgram: builder.mutation({
      query: (programCode) => ({
        url: `/program?programCode=${programCode}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PROGRAMS"],
    }),
  }),
});

export const {
  useGetProgramsQuery,
  useGetProgramsByTypeQuery,
  useGetProgramsByDepartmentCodeQuery,
  usePostProgramMutation,
  useUpdateProgramMutation,
  useDeleteProgramMutation,
} = programApi;

export default programApi;
