import { SET_HOTELS, ADD_HOTELS } from "../constants";

var paths = [];
for(var i = 1; i < 17; i++) {
  paths.push("C:/trivago/src/images/hotel" + i + "/pic1.jpeg");
}

console.log(paths);


const ids = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const DATA = {};

ids.forEach((id, index) => {
  const images = [];

  let hotel = index + 1;

  for (let x = 1; x < 4; x++)
    images.push(`../../images/hotels/hotel${hotel}/pic${x}.jpeg`)

  images.push(`../../images/hotels/hotel${hotel}/map.png`)

  DATA[id] = {
    id,
    name: `Hotel ${id}`,
    address: { street: `${id} Street` },
    price: "$100",
    images,
    reviews: [
      {
          name: "Nick Feuer",
          comment: "Our front-end team sucks!"
      },
      {
          name: "Alex Guevara",
          comment: "Like sucks too, but you're living it!"
      },
      {
          name: "Stanimir Stoychev",
          comment: "Fuck it! Ship it!"
      },
      {
          name: "Ben Breichman",
          comment: "... Play nice!"
      }
    ]
  }
})


const HOTELS = {
    "A": {
        id: "A",
        name: "Hotel A",
        price: "$100",
        address: {
            street: "Street A",
            city: "City A",
            state: "NY",
            country: "USA",
        },
        images: ["https://img.nh-hotels.net/files/nh_dusseldorf_city-023-facade.jpg"],
        amenities: [
            {
                name: "WI-FI",
                value: "Free for all"
            },
            {
                name: "Parking",
                value: "Public, free for all"
            },
            {
                name: "Parking",
                value: "Private, extra $10 per car"
            }
        ],
        reviews: [
            {
                name: "Nick Feuer",
                comment: "Our front-end team sucks!"
            },
            {
                name: "Alex Guevara",
                comment: "Like sucks too, but you're living it!"
            },
            {
                name: "Stanimir Stoychev",
                comment: "Fuck it! Ship it!"
            },
            {
                name: "Ben Breichman",
                comment: "... Play nice!"
            }
        ],
    },

    "B": {
        id: "B",
        name: "Hotel B",
        price: "$100",
        address: {
            street: "Street B",
            city: "City B",
            state: "NY",
            country: "USA",
        },
        images: [
          "https://www.getaltd.co.uk/GTA_StsContFiles/2706693-2-01.jpg"
        ],
        amenities: [
            {
                name: "WI-FI",
                value: "Free for all"
            },
            {
                name: "Parking",
                value: "Public, free for all"
            },
            {
                name: "Parking",
                value: "Private, extra $10 per car"
            }
        ],
        reviews: [
            {
                name: "Nick Feuer",
                comment: "Our front-end team sucks!"
            },
            {
                name: "Alex Guevara",
                comment: "Like sucks too, but you're living it!"
            },
            {
                name: "Stanimir Stoychev",
                comment: "Fuck it! Ship it!"
            },
            {
                name: "Ben Breichman",
                comment: "... Play nice!"
            }
        ],
    },

    "C": {
        id: "C",
        name: "Hotel C",
        price: "$100",
        address: {
            street: "Street C",
            city: "City C",
            state: "NY",
            country: "USA",
        },
        images: [
            "http://www.telegraph.co.uk/content/dam/Travel/hotels/europe/spain/canary-islands/fuerteventura/atlantis-fuerteventura-p.jpg"
        ],
        amenities: [
            {
                name: "WI-FI",
                value: "Free for all"
            },
            {
                name: "Parking",
                value: "Public, free for all"
            },
            {
                name: "Parking",
                value: "Private, extra $10 per car"
            }
        ],
        reviews: [
            {
                name: "Nick Feuer",
                comment: "Our front-end team sucks!"
            },
            {
                name: "Alex Guevara",
                comment: "Like sucks too, but you're living it!"
            },
            {
                name: "Stanimir Stoychev",
                comment: "Fuck it! Ship it!"
            },
            {
                name: "Ben Breichman",
                comment: "... Play nice!"
            }
        ],
    },

    "D": {
        id: "D",
        name: "Hotel D",
        price: "$100",
        address: {
            street: "Street D",
            city: "City D",
            state: "NY",
            country: "USA",
        },
        images: [
          "https://img1.10bestmedia.com/Images/Photos/317860/The-Plaza-Hotel-New-York_54_990x660.jpg"
        ],
        amenities: [
            {
                name: "WI-FI",
                value: "Free for all"
            },
            {
                name: "Parking",
                value: "Public, free for all"
            },
            {
                name: "Parking",
                value: "Private, extra $10 per car"
            }
        ],
        reviews: [
            {
                name: "Nick Feuer",
                comment: "Our front-end team sucks!"
            },
            {
                name: "Alex Guevara",
                comment: "Like sucks too, but you're living it!"
            },
            {
                name: "Stanimir Stoychev",
                comment: "Fuck it! Ship it!"
            },
            {
                name: "Ben Breichman",
                comment: "... Play nice!"
            }
        ],
    },

    "E": {
        id: "E",
        name: "Hotel E",
        price: "$100",
        address: {
            street: "Street E",
            city: "City E",
            state: "NY",
            country: "USA",
        },
        images: [
            "https://vignette.wikia.nocookie.net/naruto/images/7/77/Sasuke%27s_Ninja_Way.png/revision/latest?cb=20150729224620",
            "https://vignette.wikia.nocookie.net/narutofanon/images/8/85/Sasuke_mangekyo34.jpg/revision/latest?cb=20101230004806",
            "https://vignette.wikia.nocookie.net/naruto/images/d/dc/Naruto%27s_Sage_Mode.png/revision/latest?cb=20150124180545",
            "https://img00.deviantart.net/4d14/i/2014/267/6/0/naruto_sage_mode_by_respawn_editing-d80cnh9.jpg",
            "http://www.thechewns.com/wp-content/uploads/2015/07/vlcsnap-2015-07-30-21h46m52s912.png",
        ],
        amenities: [
            {
                name: "WI-FI",
                value: "Free for all"
            },
            {
                name: "Parking",
                value: "Public, free for all"
            },
            {
                name: "Parking",
                value: "Private, extra $10 per car"
            }
        ],
        reviews: [
            {
                name: "Nick Feuer",
                comment: "Our front-end team sucks!"
            },
            {
                name: "Alex Guevara",
                comment: "Like sucks too, but you're living it!"
            },
            {
                name: "Stanimir Stoychev",
                comment: "Fuck it! Ship it!"
            },
            {
                name: "Ben Breichman",
                comment: "... Play nice!"
            }
        ],
    },

    "F": {
        id: "F",
        name: "Hotel F",
        price: "$100",
        address: {
            street: "Street F",
            city: "City F",
            state: "NY",
            country: "USA",
        },
        images: [
            "https://vignette.wikia.nocookie.net/naruto/images/7/77/Sasuke%27s_Ninja_Way.png/revision/latest?cb=20150729224620",
            "https://vignette.wikia.nocookie.net/narutofanon/images/8/85/Sasuke_mangekyo34.jpg/revision/latest?cb=20101230004806",
            "https://vignette.wikia.nocookie.net/naruto/images/d/dc/Naruto%27s_Sage_Mode.png/revision/latest?cb=20150124180545",
            "https://img00.deviantart.net/4d14/i/2014/267/6/0/naruto_sage_mode_by_respawn_editing-d80cnh9.jpg",
            "http://www.thechewns.com/wp-content/uploads/2015/07/vlcsnap-2015-07-30-21h46m52s912.png",
        ],
        amenities: [
            {
                name: "WI-FI",
                value: "Free for all"
            },
            {
                name: "Parking",
                value: "Public, free for all"
            },
            {
                name: "Parking",
                value: "Private, extra $10 per car"
            }
        ],
        reviews: [
            {
                name: "Nick Feuer",
                comment: "Our front-end team sucks!"
            },
            {
                name: "Alex Guevara",
                comment: "Like sucks too, but you're living it!"
            },
            {
                name: "Stanimir Stoychev",
                comment: "Fuck it! Ship it!"
            },
            {
                name: "Ben Breichman",
                comment: "... Play nice!"
            }
        ],
    }
};

export default (state = HOTELS, action) => {

    switch (action.type) {
       case SET_HOTELS:
        return Object.assign({}, action.payload);

       case ADD_HOTELS:
        return Object.assign({}, state, action.payload);

       default:
          return state;
    }
}
