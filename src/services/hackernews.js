import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const hackerNewsApi = createApi({
  reducerPath: 'hackerNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://hn.algolia.com/api/v1/' }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: (id) => `items/${id}`,
    }),

    getItemsFrontPage: builder.query({
      query: () => 'search?tags=front_page',
    }),

    getUsers: builder.query({
      query: (username) => `users/${username}`,
    }),

    search: builder.query({
      query: (queryText) => `search?query=${queryText}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetItemsQuery,
  useGetItemsFrontPageQuery,
  useGetUsersQuery,
  useSearchQuery,
} = hackerNewsApi;
