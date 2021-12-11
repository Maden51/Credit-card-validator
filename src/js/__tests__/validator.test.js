import validator from '../validator';

test('validator should return false forn letters in cardnumber', () => {
  expect(validator('4916021653a415449')).toBeFalsy();
});

test('validator should return false for cardnumbers less than 13 numbers', () => {
  expect(validator('491658613209')).toBeFalsy();
});

test('validator should be able check cardnumber with spaces', () => {
  expect(validator('5410 0726 8759 1810')).toBeTruthy();
});

test.each([
  ['4485582857453388', true],
  ['4485582857453380', false],
  ['4485582857453381', false],
  ['4485582857453382', false],
  ['4485582857453383', false],
  ['4485582857453384', false],
  ['4485582857453385', false],
  ['4485582857453386', false],
  ['4485582857453387', false],
  ['4485582857453389', false],
  ['2720995267978795', true],
  ['2720995267978790', false],
  ['2720995267978791', false],
  ['2720995267978792', false],
  ['2720995267978793', false],
  ['2720995267978794', false],
  ['2720995267978796', false],
  ['2720995267978797', false],
  ['2720995267978798', false],
  ['2720995267978799', false],
])('should return correct result for %s', (number, result) => {
  expect(validator(number)).toBe(result);
});
