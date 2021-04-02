import React from "react";
import {Provider} from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {store} from './app/store'
import {Pages} from "./app/routes";
import SecurityLayout from "./app/layouts/SecurityLayout";

const App: React.FC = () => {
    return <Provider store={store}>
        <Router>
            <SecurityLayout>
                <Switch>
                    <Route
                        exact
                        path={Pages.Home.path}
                        component={Pages.Home.component}
                    />
                    <Route
                        exact
                        path={Pages.Login.path}
                        component={Pages.Login.component}
                    />
                    <Route
                        exact
                        path={Pages.BookCourt.path}
                        component={Pages.BookCourt.component}
                    />
                </Switch>
            </SecurityLayout>
        </Router>
    </Provider>;
};

export default App;
