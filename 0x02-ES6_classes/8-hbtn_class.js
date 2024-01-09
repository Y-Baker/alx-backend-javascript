import HolbertonCourse from './2-hbtn_course';

/* eslint-disable no-underscore-dangle */
class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    HolbertonCourse._checks(value, 'number');
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    HolbertonCourse._checks(value, 'string');
    this._location = value;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this._location;
    }
    if (hint === 'number') {
      return this._size;
    }
    return this;
  }
}

export default HolbertonClass;
