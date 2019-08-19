import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { store } from './modules/state-mgmt/rootState';
import CakeListContainer from './modules/views/CakeList';
import CakeNewContainer from './modules/views/CakeNew';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Route path="/cakes" exact component={CakeListContainer} />
          <Route path="/cakes/new" exact component={CakeNewContainer} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
