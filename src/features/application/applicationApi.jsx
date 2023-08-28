import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const applicationApi = createApi({
  reducerPath: "applicationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
  }),
  endpoints: (builder) => ({
    postApplication: builder.mutation({
      query: (data) => ({
        url: "/admission",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {usePostApplicationMutation} = applicationApi;