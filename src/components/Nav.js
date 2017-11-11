import React from 'react';
// import FA from 'react-fontawesome'
const Nav = ({viewFavorites, viewAllHotels}) => {

  return (
    <div className="nav">
      <button onClick={viewAllHotels}>View All Hotels</button>
      <button onClick={viewFavorites}>View Favorites</button>
    </div>
  )
}

export default Nav;
