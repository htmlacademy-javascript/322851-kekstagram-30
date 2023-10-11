function checkStringLength(str, num) {
  return str.length <= num;
}

function checkForPalindrom(str) {
  let testStr = '';
  str = str.replaceAll(' ', '');
  str = str.toLowerCase();
  //str = str.replaceAll(' ', '');
  for (let i = str.length - 1; i > -1; i--) {
    testStr += str[i];
  }
  return str === testStr;
}

function getNumbersFromString(str) {
  str = String(str);
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const test = parseInt(str[i], 10);
    if (!Number.isNaN(test)) {
      result += str[i];
    }
  }
  return parseInt(result, 10);
}
