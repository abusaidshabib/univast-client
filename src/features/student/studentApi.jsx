import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
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
    })
  }),
});

export const {useGetStudentsQuery, usePostStudentMutation} = studentApi
