import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import AnimalShow from './pages/animal_show/animal_show.js';


class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact component={Home} path='/' />
          <Route exact component={AnimalShow} path='/animals/:id' />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
