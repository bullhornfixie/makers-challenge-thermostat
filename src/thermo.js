'use strict'

class Thermo {

  constructor(){
    this.temperature = 20
  };

  currentTemp() {
    return this.temperature
  }

  up() {
    this.temperature ++;
  }

  down() {
    if (this.temperature > 10) {
      this.temperature --;
    }
    else {
      throw("Minimum temperature reached")
    }
  }

}