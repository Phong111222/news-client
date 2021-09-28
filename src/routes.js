import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/Login';
// import Register from './components/Register';


const routes = [
  {
    path: '/',
    exact: true,
    component: (props) => <Login {...props} />,
  },
  // {
  //   path: '/register',
  //   exact: false,
  //   component: (props) => <Register {...props} />,
  // },

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
