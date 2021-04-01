import React from "react";
import {Provider} from "react-redux";
import RepositoryList from "./features/repository/RepositoryList";
import {store} from './app/store'

const App: React.FC = () => {
    return <Provider store={store}>
        <div>
            <h1>Search for Package</h1>
            <RepositoryList/>
        </div>
    </Provider>;

};

export default App;
