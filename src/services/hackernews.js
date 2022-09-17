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
      query: () => 'search?tags=front_page&hitsPerPage=30',
    }),

    getUsers: builder.query({
      query: (username) => `users/${username}`,
    }),

    search: builder.query({
      query: (queryText) => `search?query=${queryText}`,
    }),

    getNewestItems: builder.query({
      query: () => 'search_by_date?tags=story&hitsPerPage=30',
    }),

      getPastItems: builder.query({
        query: () => `search_by_date?tags=story&numericFilters=created_at_i=${}`,
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
    useGetNewestItemsQuery,
    useGetPastItemsQuery,
} = hackerNewsApi;
