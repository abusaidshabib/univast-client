import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const sendEmailApi = createApi({
  reducerPath: "sendEmailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}`,
  }),
  endpoints: (builder) => ({
    sendEmail: builder.mutation({
      query: (data) => ({
        url: "/email",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSendEmailMutation } = sendEmailApi;
