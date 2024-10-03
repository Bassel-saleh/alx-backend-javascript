/**
 * class representing Building
 */
export default class Building {
  /**
   *
   * @param {number} sqft - Square Footage Calculator
   */
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage'
        );
      }
    }
  }

  /**
   * @returns {number} 
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * sets the value of sqft
   */
  set sqft(value) {
    this._sqft = value;
  }
}
