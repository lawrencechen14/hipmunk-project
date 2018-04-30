import React from 'react';
import { Flex, Box } from 'reflexbox';
import data from './data.json';
import Dropdown from './Dropdown.js';
import './Tiles.css';

class Tiles extends React.Component {

  // Finds the closest point of interest and displays the distance in miles.
  getNearestPOI(hotelKey) {
    var poi = data.pois[hotelKey][0].name;
    var distance = (data.pois[hotelKey][0].distance / 1609.34).toPrecision(1); // Meters to miles conversion
    return <div> {distance} mi from {poi} </div>
  }

  /* Calculates total review score based on reviews from other sites out of ten.
     Assigns a category for each hotel based on this calculated score.*/
  getReview(hotel) {
    var total = 0;
    var count = 0;
    for (let review of Object.keys(hotel.reviews)) {
      total += hotel.reviews[review].mean * hotel.reviews[review].count;
      count += hotel.reviews[review].count;
    }
    var scoreOutOfTen = (total / count * 2).toPrecision(2);
    var category = "";
    if (scoreOutOfTen >= 8) {
      category = "Excellent";
    } else if (scoreOutOfTen >= 6) {
      category = "Good";
    } else if (scoreOutOfTen >= 4) {
      category = "Fair";
    } else if (scoreOutOfTen >= 2) {
      category = "Poor";
    } else {
      category = "Very Poor";
    }
    return <div> {scoreOutOfTen}/10 {category} </div>;
  }

  // Formats the tiles by selecting the appropriate images, names, and information all pulled from data.json
  getHotelTiles() {
    var format = [];
    var hotelKeys = Object.keys(data.hotels);
    var numHotels = hotelKeys.length;
    for (var i = 0; i < numHotels; i+=3) {
      if (numHotels - i === 2) {
        format.push(
          <Flex p={3} align='center'>
            <Box style={
              {
                backgroundImage: "url(" + data.hotels[hotelKeys[i]].thumbnail_url + ")",
                backgroundSize: 'cover',
                color: 'white',
                bottom: 0,
                height: '300px',
                width: '500px',
                textAlign: 'left',
                padding: '10px'
              }
            }
            px={3}
            w={1/3}>
              {data.hotels[hotelKeys[i]].name}
              {this.getReview(data.hotels[hotelKeys[i]])}
              {this.getNearestPOI(hotelKeys[i])}
            </Box>
            <Box style={
              {
                backgroundImage: "url(" + data.hotels[hotelKeys[i+1]].thumbnail_url + ")",
                backgroundSize: 'cover',
                color: 'white',
                bottom: 0,
                height: '300px',
                width: '500px',
                textAlign: 'left',
                padding: '10px'
              }
            }
            px={3}
            w={1/3}>
              {data.hotels[hotelKeys[i+1]].name}
              {this.getReview(data.hotels[hotelKeys[i+1]])}
              {this.getNearestPOI(hotelKeys[i+1])}
            </Box>
            <Box style={{backgroundSize: 'cover', color: 'white', bottom: 0, height: '300px', width: '500px', padding: '10px'}} px={3} w={1/3}>
            </Box>
          </Flex>
        )
      } else if (numHotels - i === 1) {
        format.push(
          <Flex p={3} align='center'>
            <Box style={
              {
                backgroundImage: "url(" + data.hotels[hotelKeys[i]].thumbnail_url + ")",
                backgroundSize: 'cover',
                color: 'white',
                bottom: 0,
                height: '300px',
                width: '500px',
                textAlign: 'left',
                padding: '10px'
              }
            }
            px={3}
            w={1/3}>
              {data.hotels[hotelKeys[i]].name}
              {this.getReview(data.hotels[hotelKeys[i]])}
              {this.getNearestPOI(hotelKeys[i])}
            </Box>
          </Flex>
        )
      } else {
        format.push(
          <Flex p={3} align='center'>
            <Box style={
              {
                backgroundImage: "url(" + data.hotels[hotelKeys[i]].thumbnail_url + ")",
                backgroundSize: 'cover',
                color: 'white',
                bottom: 0,
                height: '300px',
                width: '500px',
                textAlign: 'left',
                padding: '10px'
              }
            }
            px={3}
            w={1/3}>
              {data.hotels[hotelKeys[i]].name}
              {this.getReview(data.hotels[hotelKeys[i]])}
              {this.getNearestPOI(hotelKeys[i])}
              <Dropdown />
            </Box>
            <Box style={
              {
                backgroundImage: "url(" + data.hotels[hotelKeys[i+1]].thumbnail_url + ")",
                backgroundSize: 'cover',
                color: 'white',
                bottom: 0,
                height: '300px',
                width: '500px',
                textAlign: 'left',
                padding: '10px'
              }
            }
            px={3}
            w={1/3}>
              {data.hotels[hotelKeys[i+1]].name}
              {this.getReview(data.hotels[hotelKeys[i+1]])}
              {this.getNearestPOI(hotelKeys[i+1])}
              <Dropdown />
            </Box>
            <Box style={
              {
                backgroundImage: "url(" + data.hotels[hotelKeys[i+2]].thumbnail_url + ")",
                backgroundSize: 'cover',
                color: 'white',
                bottom: 0,
                height: '300px',
                width: '500px',
                textAlign: 'left',
                padding: '10px'
              }
            }
            px={3}
            w={1/3}>
              {data.hotels[hotelKeys[i+2]].name}
              {this.getReview(data.hotels[hotelKeys[i+2]])}
              {this.getNearestPOI(hotelKeys[i+2])}
              <Dropdown />
            </Box>
          </Flex>
        )
      }
    }
    return format;
  }

  render() {
    return (
      this.getHotelTiles()
    )
  }
}

export default Tiles;
