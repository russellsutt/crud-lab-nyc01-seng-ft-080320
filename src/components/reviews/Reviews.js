import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {


  renderReviews = () => {
    let filtered = []
    if (this.props.reviews) {
      filtered = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    }
    if (filtered.length > 0) {
      return filtered.map(review => <Review key={review.id} review={review} deleteReview={this.props.deleteReview}/>)
    }
  }



  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;