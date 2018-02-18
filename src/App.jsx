import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import styles from './styles.css';
import Home from './components/Home.jsx';

export default class App extends React.Component {
  render() {
    return (
        <Router>
          <Route exact path='/' component={Home}/>
        </Router>
      );
  }
}
