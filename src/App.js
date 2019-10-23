import React from 'react';
import BodyText from './components/texto_body';
import Head from './components/header';
import Account from './components/account';
import BodyImage from './components/imagen_body';
import Home from './components/home';


class App extends React.Component {
  render() {
    return (
      <div>
        <Head />
        <BodyText />
        <BodyImage />
        <Account />
        <Home />
      </div>
    );
  }
}

export default App;

