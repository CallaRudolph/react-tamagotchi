import Moment from 'moment';

class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.food = 10;
    this.play = 10;
    this.sleep = 10;
    this.timeBorn = new Moment();
    this.timeSinceBorn = this.setTimeSinceBorn();
    this.lifeClock = this.timeBorn.format("h:mm:ss a");
  }

  setTimeSinceBorn() {
    return this.timeBorn.fromNow(true);
  }

}
setInterval(this.lifeClock, 1000);

export default Tamagotchi;
