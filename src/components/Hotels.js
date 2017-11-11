import React from 'react';
import Hotel from './Hotel';

const Hotels = ({hotels}) => {
  return (
    <div className="hotels">
      <Hotel hotel={hotels["A"]}/>
    </div>
  )
}

export default Hotels;
