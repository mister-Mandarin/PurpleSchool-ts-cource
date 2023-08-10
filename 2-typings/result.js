"use strict";
var makeOrdinal = require('./makeOrdinal');
var isFinite = require('./isFinite'); //проверка число ли отправили или нет true/false
var isSafeNumber = require('./isSafeNumber'); //проверка размеров числа true/false
const LESS_THAN_TWENTY = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];
const TENTHS_LESS_THAN_HUNDRED = [
    'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];
function toWords(number, asOrdinal) {
    let num = parseInt(number, 10); //возвращаем целое число
    if (!isFinite(num)) {
        throw new TypeError('Not a finite number: ' + number + ' (' + typeof number + ')');
    }
    if (!isSafeNumber(num)) {
        throw new RangeError('Input is not a safe number, it’s either too large or too small.');
    }
    let words = generateWords(num);
    return asOrdinal ? makeOrdinal(words) : words;
}
let remainder = 0;
let word = '';
function generateWords(number, words) {
    // We’re done
    if (number === 0) {
        return !words ? 'zero' : words.join(' ').replace(/,$/, '');
    }
    // First run
    if (!words) {
        words = [];
    }
    // If negative, prepend “minus”
    if (number < 0) {
        words.push('minus');
        number = Math.abs(number);
    }
    if (number < 20) {
        remainder = 0;
        word = LESS_THAN_TWENTY[number];
    }
    else if (number < 100 /* nameNumbers.ONE_HUNDRED */) { // 100
        remainder = number % 10 /* nameNumbers.TEN */;
        word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / 10 /* nameNumbers.TEN */)];
        // In case of remainder, we need to handle it here to be able to add the “-”
        if (remainder) {
            word += '-' + LESS_THAN_TWENTY[remainder];
            remainder = 0;
        }
    }
    else if (number < 1000 /* nameNumbers.ONE_THOUSAND */) { // 1.000
        remainder = number % 100 /* nameNumbers.ONE_HUNDRED */;
        word = generateWords(Math.floor(number / 100 /* nameNumbers.ONE_HUNDRED */)) + ' hundred';
    }
    else if (number < 1000000 /* nameNumbers.ONE_MILLION */) { // 1.000.000
        remainder = number % 1000 /* nameNumbers.ONE_THOUSAND */;
        word = generateWords(Math.floor(number / 1000 /* nameNumbers.ONE_THOUSAND */)) + ' thousand,';
    }
    else if (number < 1000000000 /* nameNumbers.ONE_BILLION */) { // 1.000.000.000
        remainder = number % 1000000 /* nameNumbers.ONE_MILLION */;
        word = generateWords(Math.floor(number / 1000000 /* nameNumbers.ONE_MILLION */)) + ' million,';
    }
    else if (number < 1000000000000 /* nameNumbers.ONE_TRILLION */) { // 1.000.000.000.000
        remainder = number % 1000000000 /* nameNumbers.ONE_BILLION */;
        word = generateWords(Math.floor(number / 1000000000 /* nameNumbers.ONE_BILLION */)) + ' billion,';
    }
    else if (number < 1000000000000000 /* nameNumbers.ONE_QUADRILLION */) { // 1.000.000.000.000.000
        remainder = number % 1000000000000 /* nameNumbers.ONE_TRILLION */;
        word = generateWords(Math.floor(number / 1000000000000 /* nameNumbers.ONE_TRILLION */)) + ' trillion,';
    }
    else if (number <= 9007199254740992 /* nameNumbers.MAX */) { // много
        remainder = number % 1000000000000000 /* nameNumbers.ONE_QUADRILLION */;
        word = generateWords(Math.floor(number / 1000000000000000 /* nameNumbers.ONE_QUADRILLION */)) +
            ' quadrillion,';
    }
    words.push(word);
    return generateWords(remainder, words);
}
// console.log(generateWords(234));
module.exports = toWords;
