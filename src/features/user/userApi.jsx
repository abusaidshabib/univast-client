import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}`,
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

export const {
  useGetUserByFirebaseIdQuery,
  useGetUsersQuery,
  usePostUserMutation,
} = userApi;
