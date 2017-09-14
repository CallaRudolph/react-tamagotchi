import React from 'react';
import PropTypes from 'prop-types';
import Food from './Food';

function Tamagotchi(props) {



  return(
    <div>
      <h1>Hi, I'm {props.name}!</h1>
      <p>I was born {props.timeSinceBorn} ago. Please help me enjoy a long healthy life, by keeping the below numbers as high as possible.</p>
      <Food foodLevel={props.food}/>
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
