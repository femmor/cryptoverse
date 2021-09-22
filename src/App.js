import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import './App.css'
import {Navbar, Homepage, Cryptocurrencies, CryptoDetails, Exchanges, News} from './components'

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route path="/" exact component={Homepage}/>
              <Route path="/cryptocurrencies" component={Cryptocurrencies}/>
              <Route path="/crypto/:coinId" component={CryptoDetails}/>
              <Route path="/exchanges" component={Exchanges}/>
              <Route path="/news" component={News}/>
            </Switch>
          </div>
        </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{
          color: 'white',
          textAlign: 'center'
        }}>
          Cryptoverse <br />
          All rights reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
      </div>
    </div>
  )
}

export default App
