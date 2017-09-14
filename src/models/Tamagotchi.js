import Moment from 'moment';

class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.food = 10;
    this.play = 10;
    this.sleep = 10;
    this.timeBorn = new Moment();
    this.timeSinceBorn = "a few seconds ago";
  }

  setTimeSinceBorn() {
    this.timeSinceBorn = this.timeBorn.fromNow(true);
  }

}

export default Tamagotchi;
