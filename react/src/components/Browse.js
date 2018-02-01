import React from 'react';
import {connect} from 'react-redux';
import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

/*///
 COMPONENT
*////
const Browse = (props) => {

  const { items } = props;
  console.log(items);

  const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'stretch',
    },
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
                title={item.price && item.price.amounts.USD}
                subtitle={item.title}
                actionIcon={
                  <Checkbox
                    checkedIcon={<ActionFavorite />}
                    uncheckedIcon={<ActionFavoriteBorder />}
                  />
                }
              >
                <img src={item.image} />
              </GridTile>
            </div>
          ))
          : null
        }
        </div>
      </div>
    </div>
  );
}

/*///
 CONTAINER
*////
const mapState = (state) => ({
  items: state.itemStore.items
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Browse);
