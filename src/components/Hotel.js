import React from 'react';
import HotelFeatures from './HotelFeatures';

const Hotel = ({hotel}) => {
  console.log(hotel)
  return (
    <div className="hotel">
      <img src={hotel.images[0]} alt="img"/>
      <HotelFeatures hotel={hotel} />
    </div>
  )
}

export default Hotel;
