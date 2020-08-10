import * as React from "react";
import { Route, browserHistory, IndexRoute, Router } from "react-router";
import { App } from "./app";
import { Home } from "./components/Home/Home";
export const AppRouter = () => {
    return (React.createElement(Router, { history: browserHistory },
        React.createElement(Route, { path: "/", component: App },
            React.createElement(IndexRoute, { component: Home }),
            React.createElement(Route, { path: "/home", component: Home }))));
};
//# sourceMappingURL=router.js.map