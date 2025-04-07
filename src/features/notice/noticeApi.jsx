import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const noticeApi = createApi({
  reducerPath: "noticeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}`,
  }),
  tagTypes: ["notice"],
  endpoints: (builder) => ({
    getNotices: builder.query({
      query: () => ({
        url: "/notice",
      }),
      providesTags: ["notice"],
    }),
  }),
});

export const { useGetNoticesQuery } = noticeApi;
