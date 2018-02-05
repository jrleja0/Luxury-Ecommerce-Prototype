import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {GridTile} from 'material-ui/GridList';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import {fetchItems} from '../store';

/*///
 COMPONENT
*////
const Browse = (props) => {

  const { items, totalItems, handleLoadMoreItems } = props;
  console.log(items);

  const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    actionFavorite: {
      fill: '#c2a661',
    },
    loadMoreButton: {
      color: '#c2a661',
      border: '4px solid #c2a661',
      borderRadius: 20,
      height: 60,
      width: 200,
      margin: 20,
    },
    loadMoreButtonDisabled: {
      color: 'rgba(0, 0, 0, 0.4)',
      border: '4px solid rgba(0, 0, 0, 0.2)',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: 20,
      height: 60,
      width: 200,
      margin: 20,
    }
  };

  return (
    <div>
      <h1 className="">Browse Items Page</h1>
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
                    iconStyle={styles.actionFavorite}
                  />
                }
              >
                <Link to={`/item/${item.id}`}>
                  <img src={item.image} alt="" />
                </Link>
              </GridTile>
            </div>
          ))
          : null
        }
        </div>
        <FlatButton
          label="Load More"
          rippleColor="#c2a661"
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
  }
});

export default connect(mapState, mapDispatch)(Browse);
