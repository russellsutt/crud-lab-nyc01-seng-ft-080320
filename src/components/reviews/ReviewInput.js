import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    
    text: ''
   }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.addReview({ text: this.state.text, restaurantId: this.props.restaurantId});
    this.setState({ text: '' });
  }


  render() {
    return (
      <div>
        Review Input
          <form onSubmit={(event) => this.submitHandler(event)}>
            <input type="text" name="text" value={this.state.text} onChange={event => this.changeHandler(event)} />
            <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
