'use strict'

class Thermo {

  constructor(){
    this.temperature = 20
    this.powerSave = true 
  };

  currentTemp() {
    return this.temperature
  }

  up() {
    if (this.temperature === 25 && this.powerSave) {
      throw("Maximum temperature reached");
    } else if (this.temperature === 32) {
      throw("Maximum temperature reached");
    }
    else 
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
  
  isPowerSaver() {
    return this.powerSave 
  }

  switch() {
    this.powerSave = false
  }

}