function caesar(string, shift) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  const strArr = string.split('');

  let cipheredString = '';

  for (let i = 0; i < strArr.length; i++) {
    if (alphabet.includes(strArr[i])) {
      function checkLetter(letter) {
        return letter === strArr[i].toLowerCase();
      }

      cipheredString += alphabet[(alphabet.findIndex(checkLetter) + shift) % alphabet.length];
    } else {
      cipheredString += strArr[i];
    }
  }

  return cipheredString;
}

export default caesar;
