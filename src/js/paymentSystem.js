export default function paymentSystem(value) {
  const firstNum = parseInt(value.charAt(0), 10);
  const secondNum = parseInt(value.charAt(1), 10);
  switch (firstNum) {
    case 2: return 'mir';
    case 3: switch (secondNum) {
      case 0: return 'diners_club';
      case 1: return 'jcb';
      case 4: return 'american_express';
      case 5: return 'jcb';
      case 6: return 'diners_club';
      case 7: return 'american_express';
      case 8: return 'diners_club';
      default: return false;
    }
    case 4: return 'VISA';
    case 5: switch (secondNum) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5: return 'mastercard';
      case 0:
      case 8: return 'maestro';
      default: return false;
    }
    case 6: switch (secondNum) {
      case 3:
      case 7: return 'maestro';
      default: return false;
    }
    default: return false;
  }
}
