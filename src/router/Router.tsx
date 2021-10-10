import { Route } from "react-router";
import LayoutHome from "../screens/web";
import Category from "../screens/web/Category";
import Detail from "../screens/web/Detail";


export const Router = {



}

const routes = [

    {
        path: '/',
        exact: true,
        component: (props: any) => <LayoutHome {...props} />,


    },
    {
        path: '/detail/:id',
        exact: false,
        component: (props: any) => <Detail {...props} />,


    },
    {
        path: '/category/:id',
        exact: false,
        component: (props: any) => <Category {...props} />,


    },





];
const MakeRoutes = () => {
    return (
        <div className='Routes'>
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
        </div>
    );
};


export default MakeRoutes