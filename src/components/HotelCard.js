import React, { Component } from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux';
import {add_toFav} from '../redux/actions';


class HotelCard extends Component {
  constructor(props){
    super(props)

    this.state = {
      counter: 0
    }

    this.renderHotels = this.renderHotels.bind(this);
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)

  }

  componentWillReceiveProps (props) {
    this.setState({
      counter: 0,
      max: props.collection.length - 1
    })
  }

  renderHotels() {
    const { collection } = this.props;

    return collection.map(hotel => {
      return <div key={hotel.id} className="image__slider">
      <div className="hotel-card">
        <img src={hotel.images[0]} />
        <div className="hotel__features">
          <div className="hotel__text">
            <div className="hotel__feature__title">Name</div>
            <div className="hotel__feature__content">{hotel.name}</div>
          </div>
          <div className="hotel__text">
            <div className="hotel__feature__title">Price</div>
            <div className="hotel__feature__content price">{hotel.price}</div>
          </div>
          <div className="hotel__text">
            <div className="hotel__feature__title">Address</div>
            <div className="hotel__feature__content">{hotel.address.street}</div>
          </div>
          <div className="hotel__text">
            <div className="hotel__feature__title">Comments</div>
            {hotel.reviews.map((r, index) => {
              return <div key={r.index} className="hotel__feature__content comment">
                <div className="author-comment">{r.comment}</div>
                <div className="author">-{r.name}</div>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  });

    const Results = [];

    for (let id in collection) {
      const hotel = collection[id];

      Results.push(
        <div className="image__slider">
          <div className="hotel-card">
            <img src={hotel.images[0]} />
            <div className="hotel__features">
              <div className="hotel__text">
                <div className="hotel__feature__title">Name</div>
                <div className="hotel__feature__content">{hotel.name}</div>
              </div>
              <div className="hotel__text">
                <div className="hotel__feature__title">Price</div>
                <div className="hotel__feature__content price">{hotel.price}</div>
              </div>
              <div className="hotel__text">
                <div className="hotel__feature__title">Address</div>
                <div className="hotel__feature__content">{hotel.address.street}</div>
              </div>
              <div className="hotel__text">
                <div className="hotel__feature__title">Comments</div>
                {hotel.reviews.map(r => {
                  return <div id={r.id} className="hotel__feature__content comment">
                    <div className="author-comment">{r.comment}</div>
                    <div className="author">-{r.name}</div>
                  </div>
                })}
              </div>
            </div>
          </div>
        </div>
      )
    }
    return Results;
  }

  next() {
    const { addToFavorites, collection } = this.props;
    const { counter, max } = this.state;

    if (counter >= max) {
      return this.setState({
        counter: 0
      })
    }

    addToFavorites(collection[counter]);
    this.setState({ counter: counter + 1 }, () => {
      this.slider.slickNext();
    });
  }

  previous() {
    const { addToFavorites, collection } = this.props;
    const { counter, max } = this.state;

    if (counter >= max) {
      return this.setState({
        counter: 0
      })
    }


    this.setState({ counter: counter + 1 }, () => {
      this.slider.slickNext();
    });
  }


  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      vertical: false,
      arrows: false
    };

    return (
      <div>
        <Slider ref={c => this.slider = c } {...settings} className="image__slider">
          {this.renderHotels()}
        </Slider>
        <div style={{textAlign: 'center'}}>
          <button className='button' onClick={this.previous}>Previous</button>
          <button className='button' onClick={this.next}>Next</button>
        </div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  const collection = [];

  for (let id in state.all) collection.push(state.all[id]);

  return {
    collection,
  }
}

function mapDispatchToProps(dispatch) {
    return({
        addToFavorites: (hotel) => {add_toFav(hotel);}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelCard);
