const original_string = "Hipnotizer";

const reversedString = reverseString(original_string);
console.log("The reversed string is :", reversedString);

function reverseString(str) {
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return reversedString;
}
