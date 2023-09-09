import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const facultyApi = createApi({
  reducerPath: "facultyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
  }),
  endpoints: (builder) => ({
    getFaculties: builder.query({
        query: () => ({
            url: "/faculty"
        })
    })
  })
});

export const {useGetFacultiesQuery} = facultyApi;