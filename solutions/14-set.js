// BEGIN
import uniq from "lodash/uniq.js";

export default function countUniqueChars(str) {
    let arr = str.split('');
    let uniqueChars = uniq(arr);
    return uniqueChars.length;
}
  
// END