// BEGIN
export default function getSameParity(arr) {
    if (arr.length === 0) {
        return [];
    }
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(arr[0]) % 2 === Math.abs(arr[i]) % 2) {
            res[res.length] = arr[i];
        }
    }
    return res;
}
// END