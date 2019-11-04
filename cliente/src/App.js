import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Users from './components/user';
import Login from './components/login';
import Home from './components/home';
import Cities from './components/cities';



class App extends React.Component {
  render() {
    return (
      <Router>
        
        <div className="centrar">
          
          <Route path="/cities" component={Cities} />
          <Route path="/users" component={Users} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          
        </div>
        
      </Router>
    );
  }
}

export default App;