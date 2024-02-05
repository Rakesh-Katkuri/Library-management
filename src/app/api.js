// api.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3002" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: "users", // Adjust the endpoint based on your API
        method: "GET",
        params: { email, password },
      }),
    }),
    signupUser: builder.mutation({
      query: (userData) => ({
        url: "/users",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useLoginUserMutation, useSignupUserMutation } = api;
