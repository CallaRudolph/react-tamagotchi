import React from 'react';
import Tamagotchi from '../models/Tamagotchi.js';
import PropTypes from 'prop-types';

class NewGotchiForm extends React.Component {

  constructor(props) {
    super(props);
    this.createGotchi = this.createGotchi.bind(this);
  }

  createGotchi(event) {
    event.preventDefault();
    const { _name } = this.refs;
    var newGotchi = new Tamagotchi(_name.value);
    this.props.onNewGotchiBirth(newGotchi);
    this.props.hideFormAfterSubmission();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.createGotchi}>
          <input id="name" ref="_name" placeholder="Enter Name"/>
          <br/><br/>
          <button type="submit">Create Me!</button>
        </form>
      </div>
    )
  }
}

NewGotchiForm.propTypes = {
  onNewGotchiBirth: PropTypes.func,
  hideFormAfterSubmission: PropTypes.func,
}

export default NewGotchiForm;
