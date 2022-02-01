function reverseString(str) {
  let solution = ""
    for (i = str.length - 1; i > -1; --i) {
      solution = solution + str[i]
    }
    return solution
};

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
  /*
  let answer be an empty str
  pass input string into a loop
  beginning from the end of str add each element to the one before it into the answer var
  */

  // And a written explanation of your solution

/* in order to achieve the reverse string i've passed the str into a loop in order to transpose the final element of input into the beginning of a new str var named solution*/
