import Currency from './3-currency';

/**
 * a class representing Pricing
 */
export default class Pricing {
  /**
   *
   * @param {number} amount - the amount of Currency
   * @param {Currency} currency - the name of the Currency
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * gets the amount of the currency
   */
  get amount() {
    return this._amount;
  }

  /**
   * sets the amount of the currency
   */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  /**
   * @returns {Currency}
   */
  get currency() {
    return this._currency;
  }

  /**
   * sets the currency
   *
   * @param {Currency} value
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }

  /**
   * display a @string representing Pricing
   *
   * @returns {string}
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, convesionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof convesionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * convesionRate;
  }
}
