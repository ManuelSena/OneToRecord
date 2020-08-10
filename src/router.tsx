import * as React from "react";
import { Route, browserHistory, IndexRoute, Router, hashHistory } from "react-router";
import { App } from "./app";
import { Home } from "./components/Home/Home";


export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/home" component={Home} />
            </Route>
        </Router>

    );
}