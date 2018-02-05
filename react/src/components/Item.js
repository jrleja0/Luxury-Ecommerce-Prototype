import React from 'react';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import {fetchItem} from '../store';

/*///
 COMPONENT
*////
const Item = (props) => {

  const { item } = props;
  console.log('param', props.match.params.id)

  const styles = {
    appBarRoot: {
      backgroundColor: 'white',
    },
    appBarTitle: {
      color: '#222',
    },
    actionFavorite: {
      fill: '#c2a661',
    },
  };

    return (
      item ?
      <div>
        <AppBar
          title={item.seller.company}
          iconElementLeft={
            <FlatButton
              href=""
              target="_blank"
              label="Home"
              secondary={true}
              icon={<NavigationChevronLeft />}
              />
          }
          style={styles.appBarRoot}
          titleStyle={styles.appBarTitle}
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
                      iconStyle={styles.actionFavorite}
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
                      {item.measurements.display}
                    </span>
                  </CardText>
                  <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
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

/*///
 CONTAINER
*////
const mapState = state => ({
  item: state.itemStore.item
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Item);
