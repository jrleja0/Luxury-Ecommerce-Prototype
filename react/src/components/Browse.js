import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {GridTile} from 'material-ui/GridList';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import {fetchItems, addFavorite, deleteFavorite} from '../store';

/*///
 COMPONENT
*////
const Browse = (props) => {

  const { items, totalItems, toggleFavorite, handleLoadMoreItems } = props;

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
                <Link to={`/item/${item.id}`}>
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

/*///
 CONTAINER
*////
const mapState = state => ({
  items: state.itemStore.items,
  totalItems: state.itemStore.totalItems,
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
});

export default connect(mapState, mapDispatch)(Browse);
