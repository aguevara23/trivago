import React, {Component} from 'react';
import {connect} from 'react-redux';

import plusIcon from '../images/im_plus.png';
import closeIcon from '../images/im_close_button.png';
import downArrow from '../images/im_arrow_down.png';


class HotelFeatures extends Component {
  constructor(props){
    super(props)
    this.state = {
      FeatureIsVisible: true
    }


    this.toggleFeatureState = this.toggleFeatureState.bind(this);
  }

  toggleFeatureState() {
    let featureState = this.state.FeatureIsVisible;
    this.setState({FeatureIsVisible: !featureState})
  }


  render() {
    const { hotel } = this.props;

    return (
      <div className={this.state.FeatureIsVisible ? "hotel__feature hotel__feature--revealed" : "hotel__feature hotel__feature--hidden"}>
        <div className="hotel__features">
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
          <div className="hotel__text">
            <div className="hotel__feature__title">Comments</div>
            <div className="">{hotel.reviews[0].comment}-{hotel.reviews[0].name}</div>
          </div>
        </div>
        <div className={this.state.FeatureIsVisible ? "feature__arrow hover-glow-icon feature__arrow--flipped" : "feature__arrow hover-glow-icon"} onClick={this.toggleFeatureState}>
          <img src={downArrow} alt="down arrow button"/>
        </div>
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
