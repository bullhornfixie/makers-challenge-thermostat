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

}