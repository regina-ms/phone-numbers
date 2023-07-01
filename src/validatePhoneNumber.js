export default function validatePhoneNumber(number) {
  let result = number.replace(/[^\d+]/g, '');
  const regExp = /^[7-8]\d{10}$/;
  if (regExp.test(result)) {
    result = result.replace(/\d/, '+7');
  }
  return result;
}
