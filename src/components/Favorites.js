import React from 'react';
import { connect } from 'react-redux';

const Favorites = ({hotels}) => {
  return (
    <div>
      {Object.keys(hotels).map(id => {
        const name = hotels[id].name;

        return <div key={name}>{name}</div>
      })}
    </div>
  )
}

function mapStateToProps(state){
  console.clear();
  console.log(state);

  return {
    hotels: state.fav
  }
}

export default connect(mapStateToProps)(Favorites);
