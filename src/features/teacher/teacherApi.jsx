import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teacherApi = createApi({
  reducerPath: "teacherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
  }),
  tagTypes: ["courseContent"],
  endpoints: (builder) => ({
    getTeachers: builder.query({
      query: () => ({
        url: "/teacher",
      }),
    }),
    getFilteredTeachers: builder.query({
      query: ({ teacherQuery, selectedDepartment }) =>
        `/teacher?teacherQuery=${teacherQuery}&department=${selectedDepartment}`,
    }),
    postTeacher: builder.mutation({
      query: (data) => ({
        url: "/teacher",
        method: "POST",
        body: data,
      }),
    }),
    getTeacherByEmail: builder.query({
      query: (email) => ({
        url: `/teacher?teacherQuery=${email}`,
      }),
    }),
    getTeacherById: builder.query({
      query: (id) => ({
        url: `/teacher?teacherQuery=${id}`,
      }),
    }),
    uploadCourseContent: builder.mutation({
      query: (data) => ({
        url: "/course-content",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["courseContent"],
    }),
    getCourseContent: builder.query({
      query: ({ semester, courseCode }) => ({
        url: `/course-content?semester=${semester}&courseCode=${courseCode}`,
      }),
      providesTags: ["courseContent"],
    }),
  }),
});

export const {
  useGetTeachersQuery,
  usePostTeacherMutation,
  useGetTeacherByEmailQuery,
  useGetFilteredTeachersQuery,
  useGetTeacherByIdQuery,
  useUploadCourseContentMutation,
  useGetCourseContentQuery
} = teacherApi;
