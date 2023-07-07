function findRotation(arr) {
  // if arr has only one val, or first val is less than last val, arr is sorted
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  let start = 0;
  let end = arr.length - 1;
  // Find where right val of idx is < left val of idx
  while (start <= end) {
    let middleIdx = Math.floor((start + end) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal >= arr[middleIdx + 1]) return middleIdx + 1;
    else if (arr[start] <= middleVal) {
      start = middleIdx + 1;
    } else {
      end = middleIdx - 1;
    }
  }
}

function findRotatedIndex(arr, val) {
  // Find idx where array is rotated
  let rotation = findRotation(arr);

  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  // Check if val is before or after rotation point
  if (val > arr[0]) {
    rightIdx = rotation - 1;
  } else {
    leftIdx = rotation;
  }

  // Run binary search of defined leftIdx and rightIdx
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal < val) {
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      rightIdx = middleIdx - 1;
    } else {
      return middleIdx;
    }
  }
  return -1;
}

module.exports = findRotatedIndex;
