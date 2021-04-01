import React from "react";
import {Provider} from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {store} from './app/store'
import {RouteList} from "./app/routes";

const App: React.FC = () => {
    return <Provider store={store}>
        <Router>
            <Switch>
                <Route
                    exact
                    path={RouteList.Hello.path}
                    component={RouteList.Hello.component}
                />
                <Route
                    exact
                    path={RouteList.Login.path}
                    component={RouteList.Login.component}
                />
            </Switch>
        </Router>
    </Provider>;
};

export default App;
