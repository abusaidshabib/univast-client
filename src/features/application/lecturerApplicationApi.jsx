import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const lecturerApplicationApi = createApi({
  reducerPath: "lecturerApplicationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}`,
  }),
  tagTypes: ["application"],
  endpoints: (builder) => ({
    getLecturerApplications: builder.query({
      query: () => ({
        url: "/teachAdd",
      }),
      providesTags: ["application"],
    }),
    postLecturerApplication: builder.mutation({
      query: (data) => ({
        url: "/teachAdd",
        method: "POST",
        body: data,
      }),
    }),
    deleteLecturerApplication: builder.mutation({
      query: (email) => ({
        url: `/teachAdd?email=${email}`,
        method: "DELETE",
      }),
      invalidatesTags: ["application"],
    }),
    getLecturerApplicationByEmail: builder.query({
      query: (email) => ({
        url: `/teachAdd?email=${email}`,
      }),
    }),
  }),
});

export const {
  useGetLecturerApplicationsQuery,
  useGetLecturerApplicationByEmailQuery,
  usePostLecturerApplicationMutation,
  useDeleteLecturerApplicationMutation,
} = lecturerApplicationApi;
