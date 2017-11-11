import React from 'react';

const Hotel = ({hotel}) => {
  console.log(hotel)
  return (
    <div>
      <div className="hotel">
        <img src="https://i.ytimg.com/vi/LQikZZIia2k/maxresdefault.jpg" alt="img"/>
        <div className="hotel__text">
          <div className="">{hotel.name}</div>
          <div className="">{hotel.price}</div>
          <div className="">{hotel.address.street}</div>
          <div className="">{hotel.reviews[0].comment}-{hotel.reviews[0].name}</div>
        </div>
      </div>
    </div>
  )
}

export default Hotel;
