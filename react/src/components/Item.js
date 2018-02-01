import React from 'react';
import {connect} from 'react-redux';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

/*///
 COMPONENT
*////
const Item = (props) => {
    return (
      <div />
    );
}

/*///
 CONTAINER
*////
const mapState = (state) => ({
  items: state.itemStore.items
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Item);
