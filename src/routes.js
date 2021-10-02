import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Detail from './components/Detail'

const routes = [
  {
    path: '/login',
    exact: false,
    component: (props) => <Login {...props} />,
  },
  {
    path: '/register',
    exact: false,
    component: (props) => <Register {...props} />,
  },
  {
    path: '/',
    exact: true,
    component: (props) => <Home {...props} />,
  },
  {
    path: '/Blog',
    exact: false,
    component: (props) => <Detail {...props} />,
  },



];

const MakeRoutes = (props) => {
  return (
    <div className='Routes'>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default MakeRoutes;
