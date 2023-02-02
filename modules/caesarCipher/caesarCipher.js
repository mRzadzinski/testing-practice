function caesarCipher(string, shiftFactor) {
  if (typeof string !== 'string') {
    string = String(string);
  }

  // Scan all characters
  for (let i = 0; i < string.length; i++) {
    // Get character code
    const charCode = string.charCodeAt(i);
    let newCode;

    // Modify lower case letter
    if (charCode > 96 && charCode < 123) {
      // After mod is still a letter
      if (charCode + shiftFactor > 96 && charCode + shiftFactor < 123) {
        newCode = charCode + shiftFactor;
        // Wrap when it's out of letter code range
      } else if (charCode + shiftFactor > 122) {
        newCode = charCode;
        for (let j = 0; j < shiftFactor; j++) {
          if (newCode + 1 > 122) {
            newCode = 97;
          } else {
            newCode += 1;
          }
        }
      } else {
        newCode = charCode;
        for (let j = 0; j > shiftFactor; j--) {
          if (newCode - 1 < 97) {
            newCode = 122;
          } else {
            newCode -= 1;
          }
        }
      }
      // Modify upper case letter
    } else if (charCode > 64 && charCode < 91) {
      // If character after modification is still a letter
      if (charCode + shiftFactor > 64 && charCode + shiftFactor < 91) {
        newCode = charCode + shiftFactor;
        // Wrap when it's out of letter code range
      } else if (charCode + shiftFactor > 90) {
        newCode = charCode;
        for (let j = 0; j < shiftFactor; j++) {
          if (newCode + 1 > 90) {
            newCode = 65;
          } else {
            newCode += 1;
          }
        }
      } else {
        newCode = charCode;
        for (let j = 0; j > shiftFactor; j--) {
          if (newCode - 1 < 97) {
            newCode = 90;
          } else {
            newCode -= 1;
          }
        }
      }
    }
    // Update character
    if (newCode) {
      string =
        string.substring(0, i) +
        String.fromCharCode(newCode) +
        string.substring(i + 1);
    }
  }
  return string;
}

export default caesarCipher;
