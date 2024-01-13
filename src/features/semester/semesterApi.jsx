import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const semesterApi = createApi({
  reducerPath: "semesterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
  }),
  endpoints: (builder) => ({
    getSemesters: builder.query({
      query: ({ startDate, endDate }) => ({
        url: `/semester?start=${startDate}&end=${endDate}`,
      }),
    }),
  }),
});

export const { useGetSemestersQuery } = semesterApi;
