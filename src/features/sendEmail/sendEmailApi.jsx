import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const sendEmailApi = createApi({
  reducerPath: "sendEmailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
  }),
  endpoints: (builder) => ({
    sendEmail: builder.mutation({
        query: (data) => ({
            url: "/email",
            method: "POST",
            body: data
        })
    })
  })
});

export const {useSendEmailMutation} = sendEmailApi;