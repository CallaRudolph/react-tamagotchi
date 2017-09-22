import React from 'react';
import PropTypes from 'prop-types';
import Food from './Food';
import Sleep from './Sleep';

class Tamagotchi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTime: "Loading Time...",
    }
    this.updateClock = this.updateClock.bind(this);
  }

  updateClock() {
    var currentTime = new Date();
    var currentTimeStr = currentTime.toLocaleTimeString();
    this.setState({currentTime: currentTimeStr});
  }

  componentWillReceiveProps() {
    if (this.props.deadOrAlive === "dead") {
      console.log("he's dead");
      clearInterval(this.starvedYetChecker);
      clearInterval(this.crankyYetChecker);
    }
  }

  componentWillMount() {
    setInterval(this.updateClock, 1000);
    this.starvedYetChecker = setInterval(() => this.props.childGetHungry(), 1000);
    this.crankyYetChecker = setInterval(() => this.props.childGetSleepy(), 1000);
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
          increaseFood={this.props.gameIncreaseFood}
          />
        <br/>
        <Sleep
          sleepLevel={this.props.sleep}
          increaseSleep={this.props.gameIncreaseSleep}/>
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
  deadOrAlive: PropTypes.string,
  gameIncreaseFood: PropTypes.func,
  childGetSleepy: PropTypes.func,
  gameIncreaseSleep: PropTypes.func
}

export default Tamagotchi;
