var makeOrdinal = require('./makeOrdinal');
var isFinite = require('./isFinite'); //проверка число ли отправили или нет true/false
var isSafeNumber = require('./isSafeNumber'); //проверка размеров числа true/false

const enum nameNumbers {
    TEN = 10,
    ONE_HUNDRED = 100,
    ONE_THOUSAND = 1_000,
    ONE_MILLION = 1_000_000,
    ONE_BILLION = 1_000_000_000,              //         1.000.000.000 (9)
    ONE_TRILLION = 1_000_000_000_000,         //     1.000.000.000.000 (12)
    ONE_QUADRILLION = 1_000_000_000_000_000,  // 1.000.000.000.000.000 (15)
    MAX = 9_007_199_254_740_992               // 9.007.199.254.740.992 (15)
}
const LESS_THAN_TWENTY: string[] = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

const TENTHS_LESS_THAN_HUNDRED:string[] = [
    'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

function toWords(number: string, asOrdinal?: boolean): string {

    let num:number = parseInt(number, 10); //возвращаем целое число

    if (!isFinite(num)) {
        throw new TypeError(
            'Not a finite number: ' + number + ' (' + typeof number + ')'
        );
    }
    if (!isSafeNumber(num)) {
        throw new RangeError(
            'Input is not a safe number, it’s either too large or too small.'
        );
    }
    let words: string = generateWords(num);
    return asOrdinal ? makeOrdinal(words) : words;
}

let remainder: number = 0;
let word: string = '';

function generateWords(number: number, words?: string[]): string {

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

    } else if (number < nameNumbers.ONE_HUNDRED) { // 100
        remainder = number % nameNumbers.TEN;
        word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / nameNumbers.TEN)];
        // In case of remainder, we need to handle it here to be able to add the “-”
        if (remainder) {
            word += '-' + LESS_THAN_TWENTY[remainder];
            remainder = 0;
        }

    } else if (number < nameNumbers.ONE_THOUSAND) { // 1.000
        remainder = number % nameNumbers.ONE_HUNDRED;

        word = generateWords(Math.floor(number / nameNumbers.ONE_HUNDRED)) + ' hundred';
    } else if (number < nameNumbers.ONE_MILLION) { // 1.000.000
        remainder = number % nameNumbers.ONE_THOUSAND;
        word = generateWords(Math.floor(number / nameNumbers.ONE_THOUSAND)) + ' thousand,';

    } else if (number < nameNumbers.ONE_BILLION) { // 1.000.000.000
        remainder = number % nameNumbers.ONE_MILLION;
        word = generateWords(Math.floor(number / nameNumbers.ONE_MILLION)) + ' million,';

    } else if (number < nameNumbers.ONE_TRILLION) { // 1.000.000.000.000
        remainder = number % nameNumbers.ONE_BILLION;
        word = generateWords(Math.floor(number / nameNumbers.ONE_BILLION)) + ' billion,';

    } else if (number < nameNumbers.ONE_QUADRILLION) { // 1.000.000.000.000.000
        remainder = number % nameNumbers.ONE_TRILLION;
        word = generateWords(Math.floor(number / nameNumbers.ONE_TRILLION)) + ' trillion,';

    } else if (number <= nameNumbers.MAX) { // много
        remainder = number % nameNumbers.ONE_QUADRILLION;
        word = generateWords(Math.floor(number / nameNumbers.ONE_QUADRILLION)) +
            ' quadrillion,';
    }

    words.push(word);
    return generateWords(remainder, words);
}

// console.log(generateWords(234));

module.exports = toWords;