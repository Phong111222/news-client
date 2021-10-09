import React, { useEffect } from 'react';
import './App.scss';
import { Redirect, Route, Switch, useHistory, withRouter } from 'react-router-dom';

import MakeRoutes from './router/Router';
import { Layout } from 'antd';
import HeaderWeb from './components/Header';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import Login from './components/Login';
import Register from './components/Register';
import FooterWeb from './components/Footer';

function App(props: any) {
  const history = useHistory();
  useEffect(() => {
    // history.push('/home')
  }, [])

  return (

    <Switch>



      {/* <Route
        path="/login"
        component={Login}
      /> */}
      <Layout>
        <Header className="header-main" >
          <HeaderWeb />

        </Header>
        <Content>
          <MakeRoutes />

        </Content>
        <Login />
        <Register />
        <FooterWeb />
      </Layout>
    </Switch>
  );
}

export default withRouter(App);
