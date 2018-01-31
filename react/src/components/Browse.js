import React from 'react';
import {connect} from 'react-redux';

/*///
 COMPONENT
*////
const Browse = (props) => {

  const { items } = props;
  console.log(items);

  return (
    <h1 className="">Browse Items Page</h1>
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
