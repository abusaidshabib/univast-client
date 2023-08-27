import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const programApi = createApi({
    reducerPath: "programApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000/api/v1"
    }),
    endpoints: (builder) => ({
        getPrograms: builder.query({
            query: () => ({
                url: '/programs',
            }),
        }),
        getProgramsByType: builder.query({
            query: (type) => ({
                url: `/programs?programType=${type}`,
            }),
        }),
    })
})

export const {useGetProgramsQuery, useGetProgramsByTypeQuery} = programApi;

export default programApi;