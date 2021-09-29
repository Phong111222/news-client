import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';


const routes = [
  {
    path: '/login',
    exact: true,
    component: (props) => <Login {...props} />,
  },
  {
    path: '/register',
    exact: false,
    component: (props) => <Register {...props} />,
  },
  {
    path: '/',
    exact: false,
    component: (props) => <Home {...props} />,
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
