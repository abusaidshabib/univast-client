import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
  }),
  tagTypes: ["course"],
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => ({
        url: "/course",
      }),
      providesTags: ["course"],
    }),
    getFilteredCourses: builder.query({
      query: (facultyCode, departmentCode, programCode) => ({
        url: `/course`,
        params: {
          facultyCode: facultyCode,
          departmentCode: departmentCode,
          programCode: programCode,
        },
      }),
    }),
    postCourse: builder.mutation({
      query: (data) => ({
        url: "/course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["course"],
    }),
    deleteCourse: builder.mutation({
      query: (courseCode) => ({
        url: `/course?courseCode=${courseCode}`,
        method: "DELETE",
      }),
      invalidatesTags: ["course"],
    }),
  }),
});

export const {useGetCoursesQuery, usePostCourseMutation, useDeleteCourseMutation, useGetFilteredCoursesQuery} = courseApi