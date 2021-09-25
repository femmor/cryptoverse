import React, { useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Typography, Input, Spin } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'

const { Title } = Typography

const Cryptocurrencies = ({ simplified }) => {
  // Count
  const count = simplified ? 10 : 100

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)

  if (isFetching) {
    return (
      <div className="loader">
        <Spin size="large" />
      </div>
    )
  }

  return (
    <>
      <Title level={2} className="heading">
        Cryptocurrencies
      </Title>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((crypto) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.id}>
            <Link to={`/crypto/${crypto.id}`}>
              <Card
                title={`${crypto.rank}. ${crypto.name}`}
                extra={<img src={crypto.iconUrl} className="crypto-image" />}
                hoverable
              >
                <p>Price: {millify(crypto.price)}</p>
                <p>Market Cap: {millify(crypto.marketCap)}</p>
                <p>Daily Change: {millify(crypto.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies
