import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {Browse, BrowseFavorites, Item} from './components';
import {fetchItems} from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

/*///
 COMPONENT
*////
class App extends Component {

  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    return (
      <MuiThemeProvider>
        <Switch>
          <Route path="/browse" exact component={Browse} />
          <Route path="/browse/favorites" component={BrowseFavorites} />
          <Route path="/item/:id" component={Item} />
          <Redirect to="/browse" />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

/*///
 CONTAINER
*////
const mapState = null;

const mapDispatch = dispatch => ({
  loadInitialData: () => {
    dispatch(fetchItems({start: 0}));
  },
});

export default withRouter(connect(mapState, mapDispatch)(App));
