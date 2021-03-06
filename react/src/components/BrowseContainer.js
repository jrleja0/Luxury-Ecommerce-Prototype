import React from 'react';
import history from '../history';
import {NavLink} from 'react-router-dom';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import HomeIcon from 'material-ui/svg-icons/action/home';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';

/*///
 COMPONENT
*////
const BrowseContainer = (props) => {

  const { children } = props;

  const styles = {
    toolbar: {
      backgroundColor: '#222',
      border: '2px solid #c2a661',
      height: '75px',
      padding: 0,
      marginBottom: '20px',
    },
    flatButton: {
      color: 'white',
      height: '75px',
      width: '100%',
    },
  };

  const handleScrollUp = () => {
    history.windowY = 0;
  }

  return (
    <div>
      <div className="titlebar-browse">
        <h2>{'< SecondDibs >'}</h2>
        <h1>Browse Items</h1>
      </div>
      <div>
        <Toolbar
          style={styles.toolbar}
        >
          <ToolbarGroup
            style={{width: '100%'}}
          >
            <NavLink to="/browse"
              exact={true}
              activeClassName="button-active-route"
              style={{flex: 1}}
              onClick={handleScrollUp}
            >
              <FlatButton
                label="Browse All"
                style={styles.flatButton}
                icon={<HomeIcon
                  style={{fill: '#c2a661'}}
                />}
                className="button-route-browse"
                hoverColor="transparent"
                rippleColor="#c2a661"
              />
            </NavLink>
            <span style={{borderLeft: '2px solid #c2a661', height: '100%'}} />
            <NavLink to="/browse/favorites"
              activeClassName="button-active-route"
              style={{flex: 1}}
              onClick={handleScrollUp}
            >
              <FlatButton
                label="Favorites"
                style={styles.flatButton}
                icon={<FavoriteIcon
                  style={{fill: '#c2a661'}}
                />}
                className="button-route-favorites"
                hoverColor="transparent"
                rippleColor="#c2a661"
              />
            </NavLink>
          </ToolbarGroup>
        </Toolbar>
      </div>
      {children}
    </div>
  );
}

export default BrowseContainer;
