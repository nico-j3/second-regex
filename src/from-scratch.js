const helloWorldRegex = (str) => {
  const regex = /hello world/i;
  return regex.test(str);
};

const hasAVowel = (str) => {
  const regex = /[aeiou]/i;
  return regex.test(str);
};

const hasCatsOrDogs = (str) => {
  const regex = /(cats|dogs)/i;
  return regex.test(str);
};
// console.log(hasCatsOrDogs("Gosh, I love having so many !"))

const hasVowelStart = (str) => {
  const regex = /^[aeiou]/i;
  return regex.test(str);
};
// console.log(hasVowelStart('oh'))

const hasPunctuationEnd = (str) => {
  const regex = /[.?!]$/i;
  return regex.test(str);
};

const hasNothingOrDigits = (str) => {
  const regex = /^[^a-zA-Z]*$/i;
  return regex.test(str);
};
// console.log(hasNothingOrDigits(''))

const hasNoFlippers = (str) => {
  const regex = /^[^BCcDEHIKOoXxl]*$/;
  return regex.test(str);
};
console.log(hasNoFlippers('Zabdabbq'))


const isValidEmail = (str) => {
  const regex = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  return regex.test(str);
};

/* This is so close! But it only accepts phone numbers that start with 860. How can you make it more flexible? */
const isValidPhoneNumber = (str) => {
  const regex = /^(\(860\)|860)[ -.]?\d{3}(?:[ -.]?\d{4})?$/;
  return regex.test(str);
};

const matchAllNumbers = (str) => {
  const regex = /\d+/g;
  const matches = str.match(regex);
  return matches || [];
};
console.log(matchAllNumbers('im 23'))


const matchAllNumbersAsNumbers = (str) => {
  const regex = /\d+/g;
  const matches = str.match(regex);
  return matches ? matches.map(Number) : [];
};
console.log(matchAllNumbersAsNumbers('im 23'))


const matchAllWords = (str) => {
  const regex = /[a-zA-Z]+(?:'[a-zA-Z]+)?/g;
  return str.match(regex) || [];
};
console.log(matchAllWords('hello world!'))


const replaceAllNumbers = (str) => {
  const regex = /\d+/g;
  return str.replace(regex, "???");
};
console.log(replaceAllNumbers('There were 40 fire drills last year, and luckily 0 fires'))


const fixFileName = (str) => {
  const regex = /\s+/g;
  return str.replace(regex, '_')
};

const nameRedacter = (str) => {
  const regex = /\b(?:[A-Z](?:[A-Z']{3,})?)\b/;
  return str.replace(regex, "REDACTED");
};

console.log(nameRedacter('my name is ITZEL'))

const camelToSnakeCase = (str) => { };

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
