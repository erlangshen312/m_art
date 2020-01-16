import React from 'react';
import Appbar from "./components/header";
import Footer from "./components/footer";
// import {Grid} from "@material-ui/core";
import {Route, Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import {routes} from "../shared/routes";

const history = createBrowserHistory();

history.listen((location) => {
    if (location.action === 'POP') {
        return;
    }
    if (location.pathname !== "/") window.scrollTo(0, 0);
});

export default class App extends React.Component {
    render() {
        const AppRoute = ({component: Component, ...rest}) => {
            return <Route {...rest} render={(props) => {
                return <div>
                    <Appbar/>
                    <div className="container app-body">
                        <main>
                            <Component {...props} {...rest}/>
                        </main>
                        <div className="gototop js-top">
                            <a href="#" className="js-gotop"><i className="icon-arrow-up2">A</i></a>
                        </div>
                    </div>
                    <Footer/>
                </div>;
            }}/>
        };
        return <Router history={history}>
            <div>
                {
                    routes && routes.map((route, index) => (
                        <AppRoute key={index}
                                  path={route.path}
                                  exact={route.exact}
                                  {...this}
                                  component={route.component}
                                  params={route.params}
                        />
                    ))
                }
            </div>
        </Router>;
    }
}
