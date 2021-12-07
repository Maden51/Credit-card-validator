export default function validator(value) {
  let sum = 0;
  let isEven = false;
  for (let i = 15; i >= 0; i -= 1) {
    let number = parseInt(value.charAt(i), 10);
    if (isEven) {
      number *= 2;
      if (number > 9) {
        number -= 9;
      }
    }
    sum += number;
    isEven = !isEven;
  }
  return (sum % 10) === 0;
}
