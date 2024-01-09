import HolbertonCourse from './2-hbtn_course';

/* eslint-disable no-underscore-dangle */
class Building {
  constructor(sqft) {
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    HolbertonCourse._checks(value, 'number');
    this._sqft = value;
  }
}

export default Building;
