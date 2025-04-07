import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const facultyApi = createApi({
  reducerPath: "facultyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}`,
  }),
  tagTypes: ["FACULTY"],
  endpoints: (builder) => ({
    getFaculties: builder.query({
      query: () => ({
        url: "/faculty",
      }),
      providesTags: ["FACULTY"],
    }),
    postFaculty: builder.mutation({
      query: (data) => ({
        url: "/faculty",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["FACULTY"],
    }),
    updateFaculty: builder.mutation({
      query: (data) => ({
        url: `/faculty?facultyCode=${data.facultyCode}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["FACULTY"],
    }),
    deleteFaculty: builder.mutation({
      query: (facultyCode) => ({
        url: `/faculty?facultyCode=${facultyCode}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FACULTY"],
    }),
  }),
});

export const {
  useGetFacultiesQuery,
  usePostFacultyMutation,
  useUpdateFacultyMutation,
  useDeleteFacultyMutation,
} = facultyApi;
