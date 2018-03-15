import React from 'react';
import history from '../history';
import {connect} from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import {fetchFavorites, addFavorite, deleteFavorite} from '../store';
import {ItemsGrid} from './index';

/*///
 COMPONENT
*////
class BrowseFavorites extends React.Component {

  componentDidMount() {
    if (history.windowY) {
      window.scrollTo(0, history.windowY);
    }
    if (history.location.pathname === '/browse/favorites') {
      this.props.handleFetchFavorites();
    }
  }

  render() {

    const { items, toggleFavorite } = this.props;

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        position: 'relative',
      },
    };

    return (
      <div>
        <ItemsGrid
          items={items}
          toggleFavorite={toggleFavorite}
        />
        <div style={styles.root}>
        { items && items.length === 0 &&
          <h3> Your favorites will display here. </h3>
        }
        { !items ?
          <CircularProgress
            className="spinner"
            size={60}
            thickness={4.5}
            color="#c2a661"
            style={{margin: '20px auto'}}
          />
          : null
        }
        </div>
      </div>
    );
  }
}

/*///
 CONTAINER
*////

const mapState = state => ({
  items: state.itemStore.favoriteItems,
});

const mapDispatch = dispatch => ({
  toggleFavorite: (favorite, id) => {
    if (favorite) {
      dispatch(deleteFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  },
  handleFetchFavorites: () => {
    dispatch(fetchFavorites());
  },
});

export default connect(mapState, mapDispatch)(BrowseFavorites);
