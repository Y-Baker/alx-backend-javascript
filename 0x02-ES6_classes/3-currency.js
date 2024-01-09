import HolbertonCourse from './2-hbtn_course';

/* eslint-disable no-underscore-dangle */
class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
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

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
