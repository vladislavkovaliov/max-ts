import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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

type UsersResponse = {
  count: number,
  next: string,
  previous: null,
  results: Array<User>
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (build) => ({
    getUsers: build.query<UsersResponse, void>({
      query: () => 'people',
      transformResponse: (response) => response,
    }),
  }),
})

export const { useGetUsersQuery } = usersApi
