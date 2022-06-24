import React, { useCallback, useMemo, useState } from 'react'
import { Spin, Row, Col, Card, Button } from 'antd'
import { useGetUsersQuery, useAddUserMutation } from '../../store/users/actions'
import { Wrapper, PaginationWrapper } from './Users.styles'

const {
  Meta,
  Grid,
} = Card

const Users = () => {
  const [limit, setLimit] = useState(1)

  const {
    data = {
      count: 0,
      results: [],
    },
    isLoading,
    isFetching,
  } = useGetUsersQuery(limit)

  const [addUser, { isLoading: isLoadingPostUser }] = useAddUserMutation()

  const isLoadingUsers = useMemo(() => isLoading || isFetching, [isFetching, isLoading])

  const onClickCallback = useCallback(async () => {
    addUser()
  }, [addUser])

  return (
    <Wrapper>
      {isLoadingUsers ? <Spin /> : (
        <Row gutter={[8, 8]}>
          {data.results.map((user) => (
            <Col key={user.name} span={4}>
              <Grid style={{
                width: '100%',
                cursor: 'pointer',
              }}
              >
                <Card>
                  <Meta
                    title={user.name}
                    description="This is the description"
                  />
                </Card>
              </Grid>
            </Col>
          ))}
        </Row>
      )}
      <PaginationWrapper
        total={data.count}
        showSizeChanger={false}
        onChange={setLimit}
      />
      <Button loading={isLoadingPostUser} onClick={onClickCallback}>Check</Button>
    </Wrapper>
  )
}

export default Users
