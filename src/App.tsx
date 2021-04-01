import React from "react";
import {Provider} from "react-redux";
import RepositoryList from "./features/repository/RepositoryList";
import {store} from './app/store'
import Hello from "./features/hello/Hello";

const App: React.FC = () => {
    return <Provider store={store}>
        <div>
            <h1>Search for Package</h1>
            <RepositoryList/>
            <Hello />
        </div>
    </Provider>;

};

export default App;
