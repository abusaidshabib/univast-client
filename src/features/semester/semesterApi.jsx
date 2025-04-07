import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const semesterApi = createApi({
  reducerPath: "semesterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}`,
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
