import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {Browse} from './components/';
import { fetchItems } from './store';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    return (
      <Browse />
    );
  }
}

/*///
 CONTAINER
*////
const mapState = null;

const mapDispatch = (dispatch) => ({
  loadInitialData: () => {
    dispatch(fetchItems());
  }
});

// export default withRouter(connect(mapState, mapDispatch)(App));
export default connect(mapState, mapDispatch)(App);
