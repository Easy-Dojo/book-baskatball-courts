import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {store} from './app/store'
import {Pages} from "./app/routes";
// import SecurityLayout from "./app/layouts/SecurityLayout";

const App: React.FC = () => {
    return <Provider store={store}>
        <Router>
            {/*<SecurityLayout>*/}
            <Switch>
                <Route
                    exact
                    path={Pages.Home.path}
                    component={Pages.Home.component}
                />
                <Route
                    path={Pages.Login.path}
                    component={Pages.Login.component}
                />
                <Route
                    path={Pages.BookCourt.path}
                    component={Pages.BookCourt.component}
                />
                <Route
                    path={Pages.OrderConfirmation.path}
                    component={Pages.OrderConfirmation.component}
                />
                <Route
                    path={Pages.OrderResult.path}
                    component={Pages.OrderResult.component}
                />
            </Switch>
            {/*</SecurityLayout>*/}
        </Router>
    </Provider>;
};

export default App;
