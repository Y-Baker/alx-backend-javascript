import Building from './5-building';
import HolbertonCourse from './2-hbtn_course';

/* eslint-disable no-underscore-dangle */
class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    HolbertonCourse._checks(value, 'number');
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}

export default SkyHighBuilding;
