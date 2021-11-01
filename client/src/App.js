import React, { Component } from 'react';
import './App.css';
import TodoApp from './Components/TodoApp';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './Actions'
import Landing from './Components/Landing';
import Header from './Components/Header';


class App extends Component {

  /**
 * Verifies if user is logged in
 */
componentDidMount() {
  this.props.fetchUser()
}

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/todolist' component={TodoApp} />

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

/**
 * connects actions creators to App Component
 */
export default connect(null, actions)(App);
