import React from 'react';
import './App.css';
import Navbar from './component/Navbar'
import Welcome from './component/Welcome'
import WalletCreate from './component/WalletPanel/WalletFunction/WalletCreate';
import NotFound from './component/NotFound'
import { Provider } from 'react-redux';
import store from './Store';


import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WalletPanel from './component/WalletPanel/WalletPanel';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Navbar} />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/WalletPanel" exact component={WalletPanel} />
          <Route path="/WalletCreate" exact component={WalletCreate} />
          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
