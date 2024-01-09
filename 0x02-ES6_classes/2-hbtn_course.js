class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  _checks(value, type) {
    if (type === 'array') {
      if (!Array.isArray(value)) {
        throw new TypeError(`Students must be an array of strings`);
      }
      return;
    }
    if (typeof value !== type) {
      throw new TypeError(`${value} must be a ${type}`);
    }
  }

  get name() {
    return this._name;
  }
  set name(value) {
    this._checks(value, 'string');
    this._name = value;
  }

  get length() {
    return this._length;
  }
  set length(value) {
    this._checks(value, 'number')
    this._length = value;
  }

  get students() {
    return this._students;
  }
  set students(value) {
    this._checks(value, 'array')
    this._students = value;
  }
}

export default HolbertonCourse;