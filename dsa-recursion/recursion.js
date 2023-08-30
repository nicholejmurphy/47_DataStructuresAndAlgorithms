/** product: calculate the product of an array of numbers. */

function product(nums) {
  // Base Case
  if (nums.length === 0) return 1;
  // Normal case
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, count = 0) {
  // base case
  if (words.length === 0) return count;
  // normal case
  if (words[0].length > count) {
    count = words[0].length;
  }
  return longest(words.slice(1), count);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, newStr = "") {
  //base case
  if (str.length === 0) return newStr;
  //normal case
  newStr += str[0];
  return everyOther(str.slice(2), newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, startIdx = 0, endIdx = str.length - 1) {
  // base case
  if (startIdx >= endIdx) return true;
  // normal case
  if (str[startIdx] === str[endIdx]) {
    startIdx += 1;
    endIdx -= 1;
    return isPalindrome(str, startIdx, endIdx);
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  // base case
  if (i === arr.length - 1) return -1;
  // normal case
  if (arr[i] === val) {
    return i;
  }
  i += 1;
  return findIndex(arr, val, i);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, newStr = "", i = str.length - 1) {
  //base case
  if (i === -1) return newStr;
  // normal case
  newStr = newStr + str[i];
  i -= 1;
  return revString(str, newStr, i);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = []) {
  // base case
  for (key in obj) {
    if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    } else if (obj[key] instanceof Object) {
      gatherStrings(obj[key], arr);
    }
  }
  return arr.sort();
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, i = 0) {
  // base case
  if (i === arr.length) return -1;
  // normal case
  if (arr[i] === val) {
    return i;
  }
  i += 1;
  return binarySearch(arr, val, i);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
