// ! node modules import syntax

const { calculateTotal, celsiusToFahrenheit, fahrenheitToCelsius, fibonacci } = require('./math');

// ! es6 module syntax

// import {calculateTotal,celsiusToFahrenheit,fahrenheitToCelsius,fibonacci } from './math';

describe('fahrenheitToCelcius', () => {
  // define tests
  it('should exist', () => {
    // test code
    expect(fahrenheitToCelsius).toBeDefined();
  });

  it('should convert 32F to 0C', () => {
    expect(fahrenheitToCelsius(32)).toBe(0);
  });
});

describe('celsiusToFahrenheit', () => {
  it('should exist', () => {
    expect(celsiusToFahrenheit).toBeDefined();
  });

  it('should return a number', () => {
    expect(celsiusToFahrenheit(10)).toBe(50);
  });

  it('should convert 20 C to 68 F', () => {
    expect(celsiusToFahrenheit(20)).toBe(68);
  });
});

describe('::calculateTotal', () => {
  it('should exist', () => {
    expect(calculateTotal).toBeDefined();
  });

  it('should return a number', () => {
    expect(calculateTotal(100, 0.2)).toBe(120);
  });

  it('should calculate total with default VAT', () => {
    expect(calculateTotal(200)).toBe(236);
  });
});
