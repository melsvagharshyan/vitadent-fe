import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = import.meta.env.VITE_API_URL
console.log('API Base URL:', baseUrl)

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl || 'http://localhost:3000', // fallback to localhost if no env var
  }),
  endpoints: () => ({}),
  tagTypes: ['RECOMMENDATIONS'],
})
