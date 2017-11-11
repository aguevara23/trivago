import React, {Component} from 'react';
import {connect} from 'react-redux';

import plusIcon from '../images/im_plus.png';
import closeIcon from '../images/im_close_button.png';
import downArrow from '../images/im_arrow_down.png';


class HotelFeatures extends Component {
  constructor(props){
    super(props)
    this.state = {
      FeatureIsVisible: false
    }
  }

  toggleFeatureState() {
    let featureState = this.state.FeatureIsVisible;
    this.setState({FeatureIsVisible: !featureState})
  }

  render() {
    const { hotel } = this.props;

    return (
      <div className="hotel__feature">
        <div className="hotel__text">
          <div className="hotel__feature__title">Name</div>
          <div className="">{hotel.name}</div>
        </div>
        <div className="hotel__text">
          <div className="hotel__feature__title">Price</div>
          <div className="">{hotel.Price}</div>
        </div>
        <div className="hotel__text">
          <div className="hotel__feature__title">Address</div>
          <div className="">{hotel.Address}</div>
        </div>


        <div className="">{hotel.price}</div>
        <div className="">{hotel.address.street}</div>
        <div className="">{hotel.reviews[0].comment}-{hotel.reviews[0].name}</div>
      </div>
    );
  }
}


// function mapStateToProps(state) {
//   const { MenuIsOpen } = state;
//   return {MenuIsOpen};
// }

// export default connect(mapStateToProps)(HotelFeatures);

export default HotelFeatures;
