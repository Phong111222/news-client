import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
<<<<<<< HEAD
import Detail from './components/Detail'
=======

>>>>>>> 688cf6362c3fadcf740a2650744c94444cf962b2

const routes = [
  {
    path: '/login',
<<<<<<< HEAD
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
=======
>>>>>>> 688cf6362c3fadcf740a2650744c94444cf962b2
    exact: true,
    component: (props) => <Home {...props} />,
  },
  {
    path: '/Blog',
    exact: false,
    component: (props) => <Detail {...props} />,
  },
<<<<<<< HEAD
=======
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
>>>>>>> 688cf6362c3fadcf740a2650744c94444cf962b2

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
