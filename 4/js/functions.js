function checkStringLength(str, num) {
  return str.length <= num;
}

// Cтрока короче 20 символов
checkStringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkStringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkStringLength('проверяемая строка', 10); // false

function checkForPalindrom(str) {
  let testStr = '';
  str = str.replaceAll(' ', '').toLowerCase();
  for (let i = str.length - 1; i >= 0; i--) {
    testStr += str[i];
  }
  return str === testStr;
}

// Строка является палиндромом
checkForPalindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
checkForPalindrom('ДовОд'); // true
// Это не палиндром
checkForPalindrom('Кекс'); // false
// Это палиндром
checkForPalindrom('Лёша на полке клопа нашёл '); // true

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

getNumbersFromString('2023 год'); // 2023
getNumbersFromString('ECMAScript 2022'); // 2022
getNumbersFromString('1 кефир, 0.5 батона'); // 105
getNumbersFromString('а я томат'); // NaN
getNumbersFromString(2023); // 2023
getNumbersFromString(-1); // 1
getNumbersFromString(1.5); // 15
