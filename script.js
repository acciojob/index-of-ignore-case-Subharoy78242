function indexOfIgnoreCase(str, subStr) {
  // Convert both strings to lowercase
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();
  
  // Find the index of the substring in the main string
  const index = lowerStr.indexOf(lowerSubStr);
  
  // Return the index
  return index;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
