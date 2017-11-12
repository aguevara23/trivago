import React, {Component} from 'react';
import "../deck.css";

import {TweenMax, Power2} from "gsap";

export default class DeckSlider extends Component {
  constructor(props) {
    super(props);

    const collection = [];

    for (let x in props.collection) collection.push(props.collection[x]);

    this.state = {
      collection,
    };
    this.next = this.next.bind(this);
    this.good = this.good.bind(this);
    this.bad = this.bad.bind(this);
    this.cards = [];
  }

  next = () => {
    const cards = document.querySelectorAll(".deck-card");

    TweenMax.to(cards[0], 1, {
      left: "unset",
      right: 0,
      onCompleteParams:[this],
      onComplete: (t) => {
        const { collection } = t.state;
        collection.splice(0, 1);

        this.setState({
          collection
        })
      },
    });
  }

  good = () => {
    const cards = document.querySelectorAll(".deck-card");

    TweenMax.to(cards[0], .3, {
      left: "unset",
      translateX: "unset",
      right: 0,
      onCompleteParams:[this],
      onComplete: (t) => {
        const { collection } = t.state;
        collection.splice(0, 1);

        this.setState({
          collection
        })
      },
    });
  }

  bad = () => {
    const cards = document.querySelectorAll(".deck-card");

    TweenMax.to(cards[0], .3, {
      left: 0,
      onCompleteParams:[this],
      onComplete: (t) => {
        const { collection } = t.state;
        collection.splice(0, 1);

        this.setState({
          collection
        })
      },
    });
  }

  render() {
    const { collection } = this.state;
    let max = collection.length;

    console.log(this.cards);

    return(
      <div className="deck">
        {collection.map((hotel) => {
          max -= 1;

          return <div
            key={hotel.id}
            className="deck-card"
            style={{ zIndex: max }}
          >
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
          </div>;
        })}

        <button onClick={this.good}>Good</button>
        <button onClick={this.bad}>Bad</button>

      </div>
    )
  }
}
