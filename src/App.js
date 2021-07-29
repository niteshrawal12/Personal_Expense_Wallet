import React from 'react';
import './App.css';
import Navbar from './component/Navbar'
import Welcome from './component/Welcome'
import 'bootstrap/dist/css/bootstrap.min.css';
import WalletCreate from './component/WalletPanel/WalletFunction/WalletCreate';
import NotFound from './component/NotFound'
import { Provider } from 'react-redux';
import store from './Store';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WalletPanel from './component/WalletPanel/WalletPanel';
import WalletUpdate from './component/WalletPanel/WalletFunction/WalletUpdate';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Navbar} />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/WalletPanel" exact component={WalletPanel} />
          <Route path="/WalletCreate" exact component={WalletCreate} />
          <Route path="/WalletUpdate/:id" exact component={WalletUpdate} />
          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
