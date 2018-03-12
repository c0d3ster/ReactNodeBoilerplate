import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import styles from './styles.css';
import Home from './components/Home.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <ScrollContext>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='*' component={NotFoundPage}/>
          </Switch>
        </ScrollContext>
      </Router>
    );
  }
}
