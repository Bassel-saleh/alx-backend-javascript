/**
 * Class representing Currency
 */
export default class Currency {
  /**
   * Creates a new @see {@link Currency}
   *
   * @param {string} code -
   * @param {string} name
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * gets the code of the Currency
   */
  get code() {
    return this._code;
  }

  /**
   * sets the code of the Currency
   */
  set code(value) {
    this._code = value;
  }

  /**
   * gets the name of the currency
   */
  get name() {
    return this._name;
  }

  /**
   * sets the name of the Currency
   */
  set name(value) {
    this._name = value;
  }

  /**
   * creates a string represents Currency
   * @returns {string}
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
