import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import createAccount from "./components/user/createAccount";
import Login from "./components/user/login";
import Home from "./components/home";
import Cities from "./components/cities/cities";
import Itineraries from "./components/itineraries/Itineraries";
import Other from "./components/cities/OtherCity";
import TemsAndConditions from "./components/user/tems&conditions";
import Profile from "./components/user/profile";
import Favorite from "./components/user/favorite";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="centrar">
            <Route path="/favorite" component={Favorite} />
            <Route path="/profile" component={Profile} />
            <Route path="/termsAndConditions" component={TemsAndConditions} />
            <Route path="/cities" component={Cities} />
            <Route path="/itineraries/:idCity" component={Itineraries} />
            <Route path="/itineraries/:city" component={Other} />
            <Route path="/createAccount" component={createAccount} />
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
