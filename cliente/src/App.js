import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import createAccount from './components/user/createAccount';
import Login from './components/user/login';
import Home from './components/home';
import Cities from './components/cities/cities';
import Itineraries from './components/itineraries/Itineraries';
import Other from './components/cities/OtherCity';
import Activities from './components/activities/activities';

import { Provider } from 'react-redux';
import store from './redux/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <div className="centrar">
            <Route path="/activities" component={Activities} />
            <Route path="/cities" component={Cities} />
            <Route path="/itineraries/London" component={Itineraries} />
            <Route path="/itineraries/:city" component={Other} />
            <Route path="/users" component={createAccount} />
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
