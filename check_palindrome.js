// Palindrome -> The word or sentence which will be readed from right to left (or) left to right as same.
//Eg: radar, level

const string_to_check = "mahi";

function checkPalindrome(str) {
  let case_conversion = str.toLowerCase();
  let reversed = "";

  for (let i = case_conversion.length - 1; i >= 0; i--) {
    reversed += case_conversion[i];
  }

  return reversed === case_conversion;
}

console.log(checkPalindrome(string_to_check));
