import Currency from "./3-currency";
import HolbertonCourse from "./2-hbtn_course";

class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    HolbertonCourse._checks(value, 'number');
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!value instanceof Currency) {
      throw new TypeError(`Currency must be an instance of the Currency class`);
    } else {
      this._currency = value;
    }
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency.name} (${this._currency.code})`);
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;
