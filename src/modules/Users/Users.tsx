import React from 'react'
import { Spin } from 'antd'
import { useGetUsersQuery } from '../../store/users/actions'

const Users = () => {
  const { data, isLoading } = useGetUsersQuery()

  // eslint-disable-next-line no-console
  console.log(data)

  if (isLoading) return <Spin />

  return <div>123</div>
}

export default Users
