function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  // Find left-most index of 0
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal !== 0) {
      leftIdx = middleIdx + 1;
    } else if (middleVal === 0) {
      rightIdx = middleIdx - 1;
    }
  }
  // Return total count of 0 instances
  return arr.length - leftIdx;
}

module.exports = countZeroes;
