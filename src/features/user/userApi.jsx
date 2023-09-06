import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/users",
      }),
    }),
    postUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
    }),
    getUserByFirebaseId: builder.query({
      query: (uid) => ({
        url: `/users?firebaseId=${uid}`,
      }),
    }),
  }),
});

export const {} = userApi;