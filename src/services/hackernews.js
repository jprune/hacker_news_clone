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

    getSearch: builder.query({
      query: (queryText) => `search_by_date?query=${queryText}&tags=story&hitsPerPage=30`,
    }),

    getNewestItems: builder.query({
      query: () => 'search_by_date?tags=story&hitsPerPage=30',
    }),

    getCommentsOfStory: builder.query({
      query: (id) => `search?tags=comment,story_${id}&hitsPerPage=30`,
    }),

    getNewComments: builder.query({
      query: () => 'search_by_date?tags=comment&hitsPerPage=30',
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetItemsQuery,
  useGetItemsFrontPageQuery,
  useGetUsersQuery,
  useGetSearchQuery,
  useGetNewestItemsQuery,
  useGetCommentsOfStoryQuery,
  useGetNewCommentsQuery,
} = hackerNewsApi;
