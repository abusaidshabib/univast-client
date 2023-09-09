import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const noticeApi = createApi({
  reducerPath: "noticeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
  }),
  tagTypes: ["notice"],
  endpoints: (builder) => ({

    getNotices: builder.query({
        query: () => ({
            url: "/notice"
        }),
        providesTags: ["notice"]
    }),
    
  })
});

export const {useGetNoticesQuery} = noticeApi