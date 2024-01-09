import HolbertonCourse from './2-hbtn_course';

/* eslint-disable no-underscore-dangle */
class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    HolbertonCourse._checks(value, 'string');
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    HolbertonCourse._checks(value, 'string');
    this._name = value;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}

export default Airport;
