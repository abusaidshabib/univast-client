import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}`,
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

    studentEnrollCourse: builder.mutation({
      query: (data) => ({
        url: `course-enroll/student`,
        method: "POST",
        body: data,
      }),
    }),

    teacherEnrollCourse: builder.mutation({
      query: (data) => ({
        url: `course/coursetake`,
        method: "POST",
        body: data,
      }),
    }),

    teacherEnrollCourseDelete: builder.mutation({
      query: (data) => ({
        url: `course/coursetake`,
        method: "DELETE",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetCoursesQuery,
  usePostCourseMutation,
  useDeleteCourseMutation,
  useGetFilteredCoursesQuery,
  useStudentEnrollCourseMutation,
  useTeacherEnrollCourseMutation,
  useTeacherEnrollCourseDeleteMutation,
} = courseApi;
