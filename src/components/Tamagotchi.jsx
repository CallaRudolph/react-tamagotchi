import React from 'react';
import PropTypes from 'prop-types';

class Tamagotchi extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(
      <h1> Good Morning, {this.props.name}!</h1>
    )
  }
}

Tamagotchi.propTypes = {
  name: PropTypes.string.isRequired,
  food: PropTypes.number.isRequired,
  play: PropTypes.number.isRequired,
  sleep: PropTypes.number.isRequired,
  timeSinceBorn: PropTypes.string
}

export default Tamagotchi;
