import React from 'react';
import NewGotchiForm from './NewgotchiForm';

class Tamagotchi extends React.Component {

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
        <p>"THANKS FOR BEING MY PARENT."</p>
        <h3>Hi, I'm {preciousGotchi.name}, and I'm so happy to meet you! Please help me eat, play, and sleep an appropriate amount, so I can have a long and happy life.</h3>
      </div>
    }

    return(
      <div>
        {formAreaContent}
      </div>
    );
  }
}

export default Tamagotchi;
