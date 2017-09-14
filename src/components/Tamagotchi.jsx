import React from 'react';
import PropTypes from 'prop-types';
import Food from './Food';

class Tamagotchi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTime: "Loading Time...",
    }
    this.updateClock = this.updateClock.bind(this);
    this.wasteAway = this.wasteAway.bind(this);
  }

  updateClock() {
    var currentTime = new Date();
    var currentTimeStr = currentTime.toLocaleTimeString();
    this.setState({currentTime: currentTimeStr});
  }

  componentWillReceiveProps() {

    if (this.props.deadOrAlive === "dead") {
      console.log("he's dead");
      clearInterval(this.deadYetChecker);
    }
  }

  componentWillMount() {
    setInterval(this.updateClock, 1000);
    this.deadYetChecker = setInterval(() => this.props.childGetHungry(), 1000);
  }

  wasteAway() {
    this.props.childGetHungry();
  }

  render() {
    let formAreaContent = null;
    if (this.props.deadOrAlive === "alive") {
      formAreaContent =
      <div>
        <h1>{this.state.currentTime}</h1>
        <h2>Hi, I'm {this.props.name}!</h2>
        <p>I was born {this.props.timeSinceBorn} ago. Please help me enjoy a long healthy life, by keeping the below numbers as high as possible.</p>
        <Food
          foodLevel={this.props.food}
          />
      </div>
    } else {
      formAreaContent =
      <div>
        <h2>
          {this.props.name} has died. You are a bad, bad parent. The authorities have been notified.
        </h2>
      </div>
    }

    return(
      <div>
        {formAreaContent}
      </div>
    )
  }
}

Tamagotchi.propTypes = {
  name: PropTypes.string.isRequired,
  food: PropTypes.number.isRequired,
  play: PropTypes.number.isRequired,
  sleep: PropTypes.number.isRequired,
  timeSinceBorn: PropTypes.string,
  childGetHungry: PropTypes.func,
  deadOrAlive: PropTypes.string
}

export default Tamagotchi;
