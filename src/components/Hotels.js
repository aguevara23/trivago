import React from 'react';
import Hotel from './Hotel';
import HotelCard from './HotelCard';
import { connect } from 'react-redux';

import DeckSlider from './DeckSlider';

const Hotels = ({hotels}) => {
  if (true) {
    return (
      <div className="hotels">
        <DeckSlider collection={hotels} />
      </div>
    )
  }

  return (
    <div className="hotels">
      <HotelCard />
    </div>
  )
}

export default Hotels;
