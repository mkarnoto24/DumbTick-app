import React, { Component } from 'react';
import Home from './components/Home/Home';
import Event from './components/EventDetail';
import PageCategory from './components/PageCategory';
import AddEvent from './components/AddEvent';
import Profile from './components/Profile';
import Payment from './components/Payment';
import MyTickets from './components/MyTickets';
import Header1 from './components/layout/Header1';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/event/:id" component={Event} />
            <Route path="/page-category" component={PageCategory} />
            <Route path="/add-event" component={AddEvent} />
            <Route path="/my-tickets" component={MyTickets} />
            <Route path="/profile" component={Profile} />
            <Route path="/header" component={Header1} />
            <Route path="/payments" component={Payment} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
