module.exports = function toReadable (number) {
 
    const num =  [
        'zero',
        'one',
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",];

    const dozens = [
        '',
        'ten',
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",];
    
  
if (number < 100) {
  if (number < 20) {
      return num[number];
  }
  
  else if (number % 10 === 0) {
    return dozens[Math.floor(number / 10)];
  }

  else  {
    return (dozens[Math.floor(number / 10)] + ' ' + num[number % 10]);
  }
}

  else  {
      if (number % 10 !== 0 && number % 100 !== 0) {
      return (num[Math.floor(number / 100)] + ' hundred ' + dozens[(Math.floor(number / 10)) % 10] + ' ' +num[number % 10]);
      
  }
      else if (number % 10 === 0) {
        return (num[Math.floor(number / 100)] + ' hundred ' + dozens[(Math.floor(number / 10)) % 10]);
      } 
      else if (number % 100 < 20) {
        return (num[Math.floor(number / 100)] + ' hundred ' +num[number % 100]);
      }
      else {
        return (num[Math.floor(number / 100)] + ' hundred');
      }
  }
}


