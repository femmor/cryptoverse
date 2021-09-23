import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic, Spin } from 'antd'
import { Link } from 'react-router-dom'
import Loading from 'react-loading'

import { useGetCryptosQuery } from '../services/cryptoApi'

const { Title } = Typography

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery()

  const globalStats = data?.data?.stats

  if (isFetching) {
    return (
      <div className="loader">
        <Spin size="large" />
      </div>
    )
  }

  console.log(globalStats)

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats - {globalStats.base}
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Crypto Currencies"
            value={millify(globalStats.total)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={globalStats.totalExchanges}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24hr Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
    </>
  )
}

export default Homepage
