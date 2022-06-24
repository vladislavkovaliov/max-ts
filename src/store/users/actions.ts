import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { message } from 'antd'

export interface User {
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: string,
  films: Array<string>,
  species: Array<string>,
  vehicles: Array<string>,
  starships: Array<string>,
  created: string,
  edited: string,
  url: string
}

export type UsersResponse = {
  count: number,
  results: Array<User>
}

const info = (messageText: string) => message.info(messageText)

export const usersApi = createApi({
  reducerPath: 'usersApi',
  tagTypes: ['USERS'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (build) => ({
    getUsers: build.query<UsersResponse, number>({
      query: (page) => `people/?page=${page}`,
      transformResponse: (response: UsersResponse) => ({
        count: response.count,
        results: response.results,
      }),
      providesTags: () => [{
        type: 'USERS',
        id: 'LIST',
      }],
      async onQueryStarted(
        arg,
        {
          queryFulfilled,
        },
      ) {
        info('Fetching...')
        try {
          await queryFulfilled

          return await info('Received!')
        } catch (err) {
          return info('Error!')
        }
      },
    }),
    addUser: build.mutation<UsersResponse, void>({
      query() {
        return {
          url: 'people',
        }
      },
      invalidatesTags: (result, error) => (!error ? [{
        type: 'USERS',
        id: 'LIST',
      }] : []),
    }),
  }),
})

export const {
  useGetUsersQuery,
  useAddUserMutation,
} = usersApi
