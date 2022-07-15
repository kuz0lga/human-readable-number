module.exports = function toReadable (number) {
  
  let stringHuman = '';  
  let funcNumber1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let funcNumber2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let funcNumber3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];        
  let hundred = 'hundred';
  let zero = 'zero';

  if (number < 100) {
  if (number === 0) {stringHuman = zero;}
  else if (number < 10) {
    stringHuman = funcNumber1[number - 1];
  }
  else if (number > 10 && number < 20) {
    stringHuman = funcNumber2[number % 10 - 1];
  }
  else if (number % 10 === 0) {
    stringHuman = funcNumber3[Math.floor(number / 10) - 1];
  }
  else if  (number > 20 && number % 10 !== 0) {
    stringHuman = funcNumber3[Math.floor(number / 10) - 1] + ' ' + funcNumber1[number % 10 - 1];
  }
  
}

else {
    if (number % 100 === 0) {
    stringHuman = funcNumber1[Math.floor(number / 100) - 1] + ' ' + hundred;} //100
    else if ((Math.floor(number / 10)) % 10 === 0) {
        stringHuman = funcNumber1[Math.floor(number / 100) - 1] + ' ' + hundred + ' ' + funcNumber1[number % 10 - 1];} //101
    else if (number % 100 < 20 && number % 100 > 10) {
        stringHuman = funcNumber1[Math.floor(number / 100)- 1] + ' ' + hundred + ' ' + funcNumber2[number % 10 - 1];} //119
    else if (number >= 20 && number % 10 === 0) {
        stringHuman = funcNumber1[Math.floor(number /100) - 1] + ' ' + hundred + ' ' + funcNumber3[(Math.floor(number / 10)) % 10 - 1];} //110
    else {
        stringHuman = funcNumber1[Math.floor(number / 100) - 1] + ' ' + hundred + ' ' + funcNumber3[(Math.floor(number / 10)) % 10 - 1] + ' ' + funcNumber1[number % 10 - 1];}
}

  return stringHuman;
}
