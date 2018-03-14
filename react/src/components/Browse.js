import React from 'react';
import {Link} from 'react-router-dom';
import history from '../history';
import {connect} from 'react-redux';
import {GridTile} from 'material-ui/GridList';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import {fetchItems, fetchFavorites, addFavorite, deleteFavorite} from '../store';

/*///
 COMPONENT
*////
class Browse extends React.Component {

  componentDidMount() {
    if (history.windowY) {
      window.scrollTo(0, history.windowY);
    }
    if (history.location.pathname === '/browse/favorites') {
      this.props.handleFetchFavorites();
    }
  }

  render() {

    const { items, totalItems, toggleFavorite, handleLoadMoreItems } = this.props;

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
      },
      loadMoreButton: {
        color: '#c2a661',
        border: '4px solid #c2a661',
        borderRadius: 20,
        height: 60,
        width: 200,
        margin: '20px auto',
      },
      loadMoreButtonDisabled: {
        color: 'rgba(0, 0, 0, 0.4)',
        border: '4px solid rgba(0, 0, 0, 0.2)',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 20,
        height: 60,
        width: 200,
        margin: '20px auto',
      }
    };

    return (
      <div>
        <h1 className="">Browse Items</h1>
        <div className="div-filter-input">
          <span>{'Filter By: '}
            <FlatButton
              className="button-load-more"
              label="Favorites"
              hoverColor="#c2a661"
              rippleColor="yellow"
              style={styles.loadMoreButton}
              containerElement={
                <Link to="/browse/favorites" />
              }
            >
            </FlatButton>
          </span>
        </div>
        <div className="items-grid" style={styles.root}>
          <div>
          { items && items.length ?
            items.map(item => (
              <div className="tile-container" key={item.id}>
                <GridTile
                  title={item.price ? item.price.amounts.USD : 'Price Upon Request'}
                  subtitle={item.title}
                  actionIcon={
                    <Checkbox
                      checkedIcon={<ActionFavorite />}
                      uncheckedIcon={<ActionFavoriteBorder />}
                      iconStyle={{fill: '#c2a661'}}
                      checked={item.favorite}
                      onCheck={() => toggleFavorite(item.favorite, item.id)}
                    />
                  }
                >
                  <Link to={`/item/${item.id}`}
                    onClick={() => {
                      history.windowY = window.scrollY;
                      history.previousPathname = history.location.pathname;
                    }}
                  >
                    <div className="div-img-background" />
                    <img src={item.image} alt="" />
                  </Link>
                </GridTile>
              </div>
            ))
            : null
          }
          </div>
          <div style={{position: "relative"}}>
          { items && items.length ?
            <FlatButton
              className="button-load-more"
              label="Load More"
              hoverColor="#c2a661"
              rippleColor="yellow"
              style={
                !items || items.length === totalItems ?
                styles.loadMoreButtonDisabled
                : styles.loadMoreButton
              }
              onClick={() => {
                if (items && items.length) {
                  handleLoadMoreItems(items.length);
                }
              }}
              disabled={!items || items.length === totalItems}
            />
            : <CircularProgress
                className="spinner"
                size={60}
                thickness={4.5}
                color="#c2a661"
                style={{margin: '20px auto'}}
              />
          }
          </div>
        </div>
      </div>
    );
  }
}

/*///
 CONTAINER
*////
const mapState = state => ({
  items: state.itemStore.items,
  totalItems: state.itemStore.totalItems,
});

const mapStateBrowseFavorites = state => ({
  items: state.itemStore.favoriteItems,
});

const mapDispatch = dispatch => ({
  handleLoadMoreItems: start => {
    dispatch(fetchItems({start}));
  },
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

export default connect(mapState, mapDispatch)(Browse);

export const BrowseFavorites = connect(mapStateBrowseFavorites, mapDispatch)(Browse);
