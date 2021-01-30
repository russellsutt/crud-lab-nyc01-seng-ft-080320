import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({ text: '' });
  }


  render() {
    return (
      <div>
         <h1>Restaurant Input</h1>
        <form onSubmit={(event) => this.submitHandler(event)}>
          <input type="text" name="text" value={this.state.text} onChange={event => this.changeHandler(event)} />
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
