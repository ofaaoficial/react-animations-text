import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

// import GameOne from './components/GameOne'
// import GameTwo from './components/GameTwo'
// import GameThree from './components/GameThree'

import 'bootstrap/dist/css/bootstrap-grid.min.css'
// import 'antd/dist/antd.css'
import './assets/css/antd.css'
import './assets/css/app.css'
import './App.css'

import { Layout } from 'antd'

import logo from './assets/img/logo-white.png'
import Home from './views/Home'
import Game from './views/Game'

const { Header, Footer, Content } = Layout

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Router>
        <Header>
          <Link to='/'>
            <div style={{ position: 'absolute' }}>
              <img src={logo} alt='Brand logo' className='app-logo' />
            </div>
          </Link>
        </Header>
        <Content className='container d-flex justify-content-center align-items-center flex-column py-4'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/game/:_id' component={Game} />
          </Switch>
        </Content>
        <Footer className='d-flex justify-content-center'>
          Avanc &copy; 2020 derechos reservados
        </Footer>
      </Router>
    </Layout>
  )
}

export default App
