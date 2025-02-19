function firstNonRepeatedChar(str) {
  const frequency = {};

  for (let i = 0; i < str.length; i++) {
    frequency[str[i]] = (frequency[str[i]] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (frequency[str[i]] === 1) {
      return str[i];  
    }
  }
  return null;
}

}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
