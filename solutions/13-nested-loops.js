const _ = require("lodash"); 

// BEGIN
import uniq from "lodash/uniq.js";

export default function getSameCount(arr1, arr2) {
  const uniqueArr1 = uniq(arr1);
  const uniqueArr2 = uniq(arr2);
  let count = 0;

  for (let i = 0; i < uniqueArr1.length; i++) {
    for (let j = 0; j < uniqueArr2.length; j++) {
      if (uniqueArr1[i] === uniqueArr2[j]) {
        count++;
        break;
      }
    }
  }

  return count;
}
// END