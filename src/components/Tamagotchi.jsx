import React from 'react';
import PropTypes from 'prop-types';

function Tamagotchi(props) {



  return(
    <div>
      <h1>Hi, I'm {props.name}!</h1>
      <p>I was born {props.timeSinceBorn} ago</p>
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
