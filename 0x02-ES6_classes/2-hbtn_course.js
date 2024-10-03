/**
 * Class representing a HolbertonCourse.
 */
export default class ClassRoom {
  /**
   * Creates a new @see {@link HolbertonCourse}
   *
   * @param {String} name - the name of the course
   * @param {Number} length - How long the course is (in months)
   * @param {String[]} students - the names of the students in the course
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * gets the name of the course
   */
  get name() {
    return this._name;
  }

  /**
   * sets the name of the course
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * gets the length of the course(months)
   */
  get length() {
    return this._length;
  }

  /**
   * set the length of the course
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * gets the names of the students in the course
   */
  get students() {
    return this._students;
  }

  /**
   * sets the name of the students in the course
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
