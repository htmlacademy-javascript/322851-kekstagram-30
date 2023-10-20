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


function checkTimeTable(dayStart, dayFinish, meetStart, meetDuration) {
  function parseTime(timeStr) {
    timeStr = timeStr.split(':');
    return parseInt(timeStr[0], 10) * 60 + parseInt(timeStr[1], 10);
  }
  dayStart = parseTime(dayStart);
  dayFinish = parseTime(dayFinish);
  meetStart = parseTime(meetStart);
  meetDuration = parseInt(meetDuration, 10);
  if (meetStart < dayStart || (meetStart + meetDuration) > dayFinish) {
    return false;
  }
  return true;
}

checkTimeTable('08:00', '17:30', '14:00', 90); // true
checkTimeTable('8:0', '10:0', '8:0', 120); // true
checkTimeTable('08:00', '14:30', '14:00', 90); // false
checkTimeTable('14:00', '17:30', '08:0', 90); // false
checkTimeTable('8:00', '17:30', '08:00', 900); // false
