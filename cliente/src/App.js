import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Users from './components/user';
import Login from './components/login';
import Home from './components/home';
import Cities from './components/cities';
import Itineraries from './components/Itineraries';

import { Provider } from 'react-redux';
import store from './redux/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <div className="centrar">
            <Route path="/cities" component={Cities} />
            <Route path="/itineraries" component={Itineraries} />
            <Route path="/users" component={Users} />
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
