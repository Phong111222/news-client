import React, { useEffect, useState } from 'react';
import MakeRoutes from './routes';
import HeaderWeb from './antComponent/Header'
import FooterWeb from './antComponent/Footer'
import { Layout, Input, message, notification, Spin } from "antd";
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
const { Content } = Layout;
export default function App() {
  useEffect(() => {
  }, [])
  return (

    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <div className='App'>
          {
            window.location.pathname != "/Login" && window.location.pathname != "/register" ? (<Layout>
              <HeaderWeb />
              <Content style={{ padding: '30px 150px' }}>
                <MakeRoutes />
              </Content>
              <FooterWeb />
            </Layout>)
              :
              (<MakeRoutes />)


          }


        </div>
      </Provider>
    </PersistGate>
  );
}
