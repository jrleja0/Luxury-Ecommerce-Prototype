import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import {fetchItem, addFavorite, deleteFavorite} from '../store';

/*///
 COMPONENT
*////
class Item extends Component {

  componentDidMount() {
    const { loadItem, match } = this.props;
    loadItem(match.params.id);
  }

  render() {

    const { item, toggleFavorite } = this.props;

    const styles = {
      flatButton: {
        color: '#c2a661',
        border: '2px solid #c2a661',
        flex: 1,
      },
    };

    return (
      item ?
      <div>
        <AppBar
          title={item.seller && item.seller.company}
          iconElementLeft={
            <FlatButton
              href="/browse"
              label="Browse"
              secondary={true}
              icon={<NavigationChevronLeft />}
              />
          }
          style={{backgroundColor: 'white'}}
          titleStyle={{color: '#222'}}
        />
        <div className="flex-grid card-container-outer">
          <div className="col-1">
            <div className="card-container-image">
              <Card>
                <CardHeader
                  children={
                    <Checkbox
                      className="favorite-checkbox"
                      checkedIcon={<ActionFavorite />}
                      uncheckedIcon={<ActionFavoriteBorder />}
                      iconStyle={{fill: '#c2a661'}}
                      checked={item.favorite}
                      onCheck={() => toggleFavorite(item.favorite, item.id)}
                    />
                  }
                />
                <CardMedia>
                  <img src={item.image} alt="" />
                </CardMedia>
                <CardText />
              </Card>
            </div>
          </div>
          <div className="col-2">
            <div className="flex-grid-column">
              <div className="card-container">
                <Card>
                  <CardTitle
                    title={
                      <span>
                        {item.title}
                        <br />
                        {item.price ? item.price.amounts.USD : 'Price Upon Request'}
                      </span>
                    }
                  />
                  <CardText>
                    <span>
                      Measurements:
                      <br />
                      {item.measurements && item.measurements.display}
                    </span>
                  </CardText>
                  <CardActions style={{display: 'flex'}}>
                    <FlatButton
                      label="Purchase"
                      style={styles.flatButton}
                      onClick={() => alert('You selected "Purchase".')}
                    />
                    <FlatButton
                      label="Make Offer"
                      style={styles.flatButton}
                      onClick={() => alert('You selected "Make Offer".')}
                    />
                  </CardActions>
                </Card>
              </div>
              <div className="card-container-description">
                <Card>
                  <CardText>
                    <p>{item.description}</p>
                    <p>Creator: {item.creators}</p>
                  </CardText>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      : null
    );
  }
}

/*///
 CONTAINER
*////
const mapState = state => ({
  item: state.itemStore.item
});

const mapDispatch = dispatch => ({
  loadItem: id => {
    dispatch(fetchItem(id));
  },
  toggleFavorite: (favorite, id) => {
    if (favorite) {
      dispatch(deleteFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  },
});

export default connect(mapState, mapDispatch)(Item);
