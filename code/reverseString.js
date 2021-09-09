function reverseString(string) {
  string = string.toLowerCase();
  const strArr = string.split('');

  let reversedString = '';

  for (let i = strArr.length - 1; i >= 0; i--) {
    reversedString += strArr[i];
  }

  return reversedString;
}

export default reverseString;
