//This is for JavaScript! Not Java
function sumDigits(str){
  str = str.toLowerCase();
  sum = 0;
  
  for (let i = 0; i < str.length; i++) {
    
    if ((/[0-9]/).test(str.charAt(i))) {
      //substring keeps track of all numbers in string
      let temp = str.substring(i, i + 1);
      sum += parseInt(temp);
    }
  }
  return sum;
}
