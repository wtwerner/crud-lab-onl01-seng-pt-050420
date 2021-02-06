import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  renderRestaurants = () => {
    return this.props.restaurants.map(restaurant => <Restaurant delete={this.props.delete} key={restaurant.id} restaurant={restaurant} />)
  }

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;