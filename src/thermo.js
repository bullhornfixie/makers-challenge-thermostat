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
    if (this.powerSave) {
      this.powerSave = false 
    }
    else
      this.powerSave = true 
  }

  reset() {
    this.temperature = 20
  }

  energyEfficiency() {
    if(this.temperature < 18) {
      return 'low-usage'
    }
    else if(this.temperature <= 25) {
      return 'medium-usage'
    }
    else {
      return 'high-usage'
    }
  }

}