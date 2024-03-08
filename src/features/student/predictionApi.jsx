import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const predictionApi = createApi({
  reducerPath: "predictionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8001/api/v4",
  }),
  endpoints: (builder) => ({
    getDropoutPrediction: builder.mutation({
      query: (data) => ({
        url: "/predict/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetDropoutPredictionMutation,
} = predictionApi;
