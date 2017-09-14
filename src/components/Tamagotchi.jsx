import React from 'react';
import PropTypes from 'prop-types';

function Tamagotchi(props) {

  return(
    <div>
      <h1>Good Morning, {props.name}!</h1>
    </div>
  )
}

Tamagotchi.propTypes = {
  name: PropTypes.string.isRequired,
  food: PropTypes.number.isRequired,
  play: PropTypes.number.isRequired,
  sleep: PropTypes.number.isRequired,
  timeSinceBorn: PropTypes.string
}

export default Tamagotchi;
