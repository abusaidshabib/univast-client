import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const applicationApi = createApi({
  reducerPath: "applicationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
  }),
  tagTypes: ["application"],
  endpoints: (builder) => ({
    getApplications: builder.query({
      query: () => ({
        url: "/admission",
      }),
      providesTags: ["application"],
    }),
    postApplication: builder.mutation({
      query: (data) => ({
        url: "/admission",
        method: "POST",
        body: data,
      }),
    }),
    deleteApplication: builder.mutation({
      query: (email) => ({
        url: `/admission?email=${email}`,
        method: "DELETE",
      }),
      invalidatesTags: ["application"],
    }),
    getApplicationByEmail: builder.query({
      query: (email) => ({
        url: `/admission?email=${email}`,
      }),
    }),
  }),
});

export const {usePostApplicationMutation, useGetApplicationsQuery, useGetApplicationByEmailQuery, useDeleteApplicationMutation} = applicationApi;