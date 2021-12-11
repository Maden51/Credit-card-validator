export default function validator(value) {
  const numbers = value.replace(/\s/g, '').split('').map((item) => Number(item));
  if (numbers.length < 13 || numbers.length > 19) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    let number = numbers[i];
    if ((numbers.length - i) % 2 === 0) {
      number *= 2;
      if (number > 9) {
        number -= 9;
      }
    }
    sum += number;
  }
  return (sum % 10) === 0;
}
