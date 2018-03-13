import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
        height: '50px',
      },
      navbarChevronLeft: {
        width: '48px',
        height: '48px',
        margin: 0,
      },
      backButton: {
        color: '#c2a661',
        textDecoration: 'underline',
        height: '90%',
        width: '150px',
      },
      backButtonLabel: {
        fontSize: '18px',
        padding: 0,
      },
      titleStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        color: '#222',
      }
    };

    return (
      item ?
      <div>
        <AppBar
          title={
            <img
              src={(item.seller && 'https://a.1stdibscdn.com' + item.seller.logo)
              || (item.seller && item.seller.company)}
              alt={item.seller && item.seller.company}
            />
          }
          iconElementLeft={
            <FlatButton
              label="Browse"
              secondary={true}
              icon={
                <NavigationChevronLeft
                  style={styles.navbarChevronLeft}
                />
              }
              style={styles.backButton}
              labelStyle={styles.backButtonLabel}
              className="button-back-to-browse"
              hoverColor="#c2a661"
              rippleColor="yellow"
              containerElement={
                <Link to="/browse" />
              }
            />
          }
          style={{backgroundColor: 'white'}}
          titleStyle={styles.titleStyle}
          className="item-navbar"
        />
        <div className="flex-grid card-container-outer">
          <div className="col-1">
            <div className="flex-grid-column">
              <div className="card-container-image">
                <Card
                  style={{height: '100%'}}
                >
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
                        <span
                          className="title-price"
                        >{item.price ? item.price.amounts.USD : 'Price Upon Request'}
                        </span>
                      </span>
                    }
                    className="card-title"
                  />
                  <CardText
                    style={{paddingTop: 0}}
                  >
                    <span className="description-measurements">
                      <b>Measurements:</b>
                      <br />
                      {item.measurements && item.measurements.display}
                    </span>
                  </CardText>
                  <CardActions style={{display: 'flex'}}>
                    <FlatButton
                      label="Purchase"
                      style={styles.flatButton}
                      onClick={() => alert('You selected "Purchase".')}
                      className="button-purchase"
                      hoverColor="#c2a661"
                      rippleColor="yellow"
                    />
                    <FlatButton
                      label="Make Offer"
                      style={styles.flatButton}
                      onClick={() => alert('You selected "Make Offer".')}
                      className="button-make-offer"
                      hoverColor="#c2a661"
                      rippleColor="yellow"
                    />
                  </CardActions>
                </Card>
              </div>
              <div className="card-container-description">
                <Card
                  style={{height: '100%'}}
                >
                  <CardText>
                    <p className="p-item-description">
                      {item.description}
                    </p>
                    {item.creators &&
                    <p><b>Creator:</b> {item.creators}</p>
                    }
                  </CardText>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="flex-grid-column">
              <div className="card-container-col3">
                <Card
                  style={{height: '100%'}}
                />
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
  item: state.itemStore.item,
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
