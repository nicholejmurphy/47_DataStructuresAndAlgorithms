function findRotationCount(arr) {
  // If arr has only one val, or arr[0] is less than arr[arr.length], rotation count is 0
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  let start = 0;
  let end = arr.length - 1;
  // Find where arr[x] is < arr[x+1]
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

module.exports = findRotationCount;
