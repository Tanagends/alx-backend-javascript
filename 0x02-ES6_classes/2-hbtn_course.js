class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!(Array.isArray(students))) {
       throw new TypeError('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set length(leng) {
    if (typeof leng !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = leng;
  }

  get length() {
    return this._length
  }

  set students(arr) {
    if (!(arr instanceof Array)) {
       throw new Error('Students must be an array of strings');
    }
    for (let el of arr) {
      if (typeof el !== 'string') {
        throw new TypeError('Each student must be a string');
      }
    }
    this._students = arr;
  }

  get students() {
    return this._students;
  }
}
