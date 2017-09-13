import React from 'react';
import NewGotchiForm from './NewgotchiForm';
import Tamagotchi from './Tamagotchi';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterGotchi: [],
      formVisible: true,
    }
    this.birthGotchi = this.birthGotchi.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  birthGotchi(newGotchi) {
    var newMasterGotchi = this.state.masterGotchi.slice();
    newMasterGotchi.push(newGotchi);
    this.setState({masterGotchi: newMasterGotchi});
  }

  hideForm() {
    this.setState({formVisible: false});
  }

  render() {
    const formVisible = this.state.formVisible;
    const preciousGotchi = this.state.masterGotchi[0];
    let formAreaContent = null;
    if (formVisible) {
      formAreaContent = <NewGotchiForm
        onNewGotchiBirth={this.birthGotchi}
        hideFormAfterSubmission={this.hideForm}/>
    } else {
      console.log(this.state.masterGotchi);
      formAreaContent =
      <div>
        {this.state.masterGotchi.map((pet, index) =>
          <Tamagotchi
            name={pet.name}
            food={pet.food}
            play={pet.play}
            sleep={pet.sleep}
            timeSinceBorn={pet.timeSinceBorn}
            key={index}/>
        )}
      </div>
    }

    // <p>"THANKS FOR BEING MY PARENT."</p>
    // <h3>"Hi, I'm {preciousGotchi.name}, and I was born {preciousGotchi.timeBorn}. I'm so happy to meet you! Please help me eat, play, and sleep an appropriate amount, so I can have a long and happy life."</h3>
    return(
      <div>
        {formAreaContent}
      </div>
    );
  }
}

export default Game;
