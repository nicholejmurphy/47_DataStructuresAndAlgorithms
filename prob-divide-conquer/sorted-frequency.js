function sortedFrequency(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  // Find an instance of val
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal < val) {
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      rightIdx = middleIdx - 1;

      // If instance is found, find left-most and right most idx of val
    } else if (middleVal === val) {
      let leftMostValIdx = middleIdx;
      let rightMostIdx = middleIdx;
      while (arr[leftMostValIdx - 1] === val || arr[rightMostIdx + 1] === val)
        if (arr[leftMostValIdx - 1] === val) {
          leftMostValIdx -= 1;
        } else if (arr[leftMostValIdx + 1] === val) {
          rightMostIdx += 1;
        }

      // Find difference in indicies and add one to find total count
      return rightMostIdx - leftMostValIdx + 1;
    }
  }

  // If instance of val not found, return -1
  return -1;
}

module.exports = sortedFrequency;
