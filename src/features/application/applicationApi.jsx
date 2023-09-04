import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const applicationApi = createApi({
  reducerPath: "applicationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
  }),
  endpoints: (builder) => ({
    getApplications: builder.query({
      query: () => ({
        url: "/admission",
      }),
    }),
    postApplication: builder.mutation({
      query: (data) => ({
        url: "/admission",
        method: "POST",
        body: data,
      }),
    }),
    getApplicationByEmail: builder.query({
      query: (email) => ({
        url: `/admission?email=${email}`,
      }),
    }),
  }),
});

export const {usePostApplicationMutation, useGetApplicationsQuery, useGetApplicationByEmailQuery} = applicationApi;