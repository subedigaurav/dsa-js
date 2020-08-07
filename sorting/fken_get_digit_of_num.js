//! A program to extract the nth digit of a number in a given number system

// the number system base
const radix = 10
// 0 is for the last digit 1 for second last and so on
const digit_to_extract = 2
// the number
const number = 12345
// extract the digit here
const extracted_digit =
  Math.floor(number / Math.pow(radix, digit_to_extract)) % radix
console.log(extracted_digit)
