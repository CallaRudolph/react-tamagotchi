import React from 'react';
import NewGotchiForm from './NewgotchiForm';
import Tamagotchi from './Tamagotchi';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterGotchi: null,
      formVisible: true,
      deadOrAlive: "alive"
    }
    this.birthGotchi = this.birthGotchi.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.getHungry = this.getHungry.bind(this);
    this.masterIncreaseFood = this.masterIncreaseFood.bind(this);
    this.getSleepy = this.getSleepy.bind(this);
    this.masterIncreaseSleep = this.masterIncreaseSleep.bind(this);
    this.getBored = this.getBored.bind(this);
    this.masterIncreasePlay = this.masterIncreasePlay.bind(this);
  }

  birthGotchi(newGotchi) {
    this.setState({masterGotchi: newGotchi});
  }

  hideForm() {
    this.setState({formVisible: false});
  }

  updateTimeSinceBorn() {
    let newMasterGotchi = this.state.masterGotchi;
    newMasterGotchi.setTimeSinceBorn();
    this.setState({masterGotchi: newMasterGotchi})
  }

  masterIncreaseFood() {
    let newMasterGotchi = this.state.masterGotchi;
    newMasterGotchi.food += 2;
    this.setState({masterGotchi: newMasterGotchi});
  }

  masterIncreaseSleep() {
    let newMasterGotchi = this.state.masterGotchi;
    newMasterGotchi.sleep += 3;
    this.setState({masterGotchi: newMasterGotchi});
  }

  masterIncreasePlay() {
    let newMasterGotchi = this.state.masterGotchi;
    newMasterGotchi.play += 2;
    this.setState({masterGotchi: newMasterGotchi});
  }

  componentWillMount() {
    if (this.state.deadOrAlive === "alive") {
      this.timeSinceBornChecker = setInterval(() =>
        this.updateTimeSinceBorn(),
        5000
      );
    }
  }

  getHungry() {
    if (this.state.masterGotchi.food > 0) {
      let newMasterGotchi = this.state.masterGotchi;
      newMasterGotchi.food -= 2;
      this.setState({masterGotchi: newMasterGotchi});
    } else {
      this.gameOver();
    }
  }

  getSleepy() {
    if (this.state.masterGotchi.sleep > 0) {
      let newMasterGotchi = this.state.masterGotchi;
      newMasterGotchi.sleep -= 1;
      this.setState({masterGotchi: newMasterGotchi});
    } else {
      this.gameOver();
    }
  }

  getBored() {
    if (this.state.masterGotchi.play > 0) {
      let newMasterGotchi = this.state.masterGotchi;
      newMasterGotchi.play -= 1;
      this.setState({masterGotchi: newMasterGotchi});
    } else {
      this.gameOver();
    }
  }

  gameOver() {
    let newLiveState = this.state.deadOrAlive;
    newLiveState = "dead";
    this.setState({deadOrAlive: newLiveState});
    clearInterval(this.timeSinceBornChecker);
  }

  render() {
    let app = this.liveTime;
    const formVisible = this.state.formVisible;
    const preciousGotchi = this.state.masterGotchi;
    let formAreaContent = null;
    if (formVisible) {
      formAreaContent = <NewGotchiForm
        onNewGotchiBirth={this.birthGotchi}
        hideFormAfterSubmission={this.hideForm}/>
    } else {
      formAreaContent =
      <div>
        <Tamagotchi
          gameIncreaseSleep={this.masterIncreaseSleep}
          childGetSleepy={this.getSleepy}
          gameIncreaseFood={this.masterIncreaseFood}
          childGetHungry={this.getHungry}
          gameIncreasePlay={this.masterIncreasePlay}
          childGetBored={this.getBored}
          deadOrAlive={this.state.deadOrAlive}
          name={this.state.masterGotchi.name}
          food={this.state.masterGotchi.food}
          play={this.state.masterGotchi.play}
          sleep={this.state.masterGotchi.sleep}
          timeSinceBorn={this.state.masterGotchi.timeSinceBorn}/>
      </div>
    }

    return(
      <div>
        {formAreaContent}
      </div>
    );
  }
}

export default Game;
