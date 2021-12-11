import paymentSystem from '../paymentSystem';

test('should be able check spaces', () => {
  expect(paymentSystem('4916 0216 5341 5449')).toBe('VISA');
});

test.each([
  ['20'],
  ['21'],
  ['22'],
  ['23'],
  ['24'],
  ['25'],
  ['26'],
  ['27'],
  ['28'],
  ['29'],
])('should return "mir" for any cards start with 2', (number) => {
  expect(paymentSystem(number)).toBe('mir');
});

test.each([
  ['40'],
  ['41'],
  ['42'],
  ['43'],
  ['44'],
  ['45'],
  ['46'],
  ['47'],
  ['48'],
  ['49'],
])('should return "VISA" for any cards start with 4', (number) => {
  expect(paymentSystem(number)).toBe('VISA');
});

test.each([
  ['30'],
  ['36'],
  ['38'],
])('should return "diners_club"', (number) => {
  expect(paymentSystem(number)).toBe('diners_club');
});

test.each([
  ['54'],
  ['51'],
  ['52'],
  ['53'],
  ['55'],
])('should return "mastercard"', (number) => {
  expect(paymentSystem(number)).toBe('mastercard');
});

test.each([
  ['50'],
  ['63'],
  ['58'],
  ['67'],
])('should return "maestro"', (number) => {
  expect(paymentSystem(number)).toBe('maestro');
});

test.each([
  ['34'],
  ['37'],
])('should return "american_express"', (number) => {
  expect(paymentSystem(number)).toBe('american_express');
});

test.each([
  ['31'],
  ['35'],
])('should return "jcb"', (number) => {
  expect(paymentSystem(number)).toBe('jcb');
});
