import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { store } from './modules/state-mgmt/rootState';
import CakeListContainer from './modules/views/CakeList';
import CakeNewContainer from './modules/views/CakeNew';
import CakeInfoContainer from './modules/views/CakeInfo';

const App: React.FC = () => {
    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/cakes" exact component={CakeListContainer} />
                        <Route path="/cakes/new" exact component={CakeNewContainer} />
                        <Route path="/cakes/:id" exact component={CakeInfoContainer} />
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
};

export default App;
