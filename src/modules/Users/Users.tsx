import React, { useMemo, useState } from 'react'
import { Spin, Row, Col, Card } from 'antd'
import { useGetUsersQuery } from '../../store/users/actions'
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

  const isLoadingUsers = useMemo(() => isLoading || isFetching, [isFetching, isLoading])

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
    </Wrapper>
  )
}

export default Users
