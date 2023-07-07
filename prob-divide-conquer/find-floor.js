function findFloor(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal < val) {
      if (arr[middleIdx + 1] > val || middleIdx === arr.length - 1) {
        return arr[middleIdx];
      }
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      rightIdx = middleIdx - 1;
    } else {
      return middleIdx;
    }
  }
  return -1;
}
// ([1, 2, 8, 10, 10, 12, 19], 5)
module.exports = findFloor;
